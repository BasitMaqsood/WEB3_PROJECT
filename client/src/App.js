import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Header from './components/organism/Header';
import Main from './components/organism/Main';
import configuration from './build/contracts/Tickets.json';
import './App.css';

const CONTRACT_ADDRESS = configuration.networks['5777'].address;
const CONTRACT_ABI = configuration.abi;
const TOTAL_TICKETS = 10;
const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';

function App() {
  const [account, setAccount] = useState(EMPTY_ADDRESS);
  const [tickets, setTickets] = useState([]);
  const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

  const refreshTickets = async () => {
    try {
      let tickets = [];
      for (let i = 0; i < TOTAL_TICKETS; i++) {
        const ticket = await contract.methods.tickets(i).call();
        ticket.id = i;
        tickets.push(ticket);
      }
      setTickets(tickets);
    } catch (ex) {
      console.log('___ EX', ex);
    }
  }

  async function getAddress() {
    try {
      const accounts = await web3.eth.requestAccounts();
      await refreshTickets();
      setAccount(accounts.at(0));
    } catch (ex) {

    }
  }

  useEffect(() => {
    getAddress();

  }, []);

  const handleBuy = async (ticket) => {
    try {
      console.log('___ TICKET', ticket);
      await contract.methods.buyTicket(ticket.id).send({
        from: account,
        value: ticket.price
      });

      await refreshTickets();

    } catch (ex) {
      console.log('___ ERROR', ex)
    }
  }

  return (
    <>
      <Header account={account} />
      <Main EMPTY_ADDRESS={EMPTY_ADDRESS} tickets={tickets} onBuy={handleBuy} />
    </>
  );
}

export default App;
