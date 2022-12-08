import React from 'react';
import TicketList from '../molecule/TicketList';

const Main = ({ EMPTY_ADDRESS, tickets, onBuy }) => {
    return (
        <div className='container-fluid mt-2'>
            <TicketList EMPTY_ADDRESS={EMPTY_ADDRESS} tickets={tickets} onBuy={onBuy}/>
        </div>
    );
}

export default Main;