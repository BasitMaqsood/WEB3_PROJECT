import React from 'react';
import Ticket from '../atom/Ticket';

const TicketList = ({ EMPTY_ADDRESS, tickets, onBuy }) => {
    return (
        <div className='row'>
            {tickets.map(ticket => <Ticket key={ticket.id} EMPTY_ADDRESS={EMPTY_ADDRESS} ticket={ticket} onBuy={onBuy}/>)}
        </div>
    );
}

export default TicketList;