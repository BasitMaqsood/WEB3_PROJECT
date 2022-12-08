import React from 'react';
import imageUrl from '../../images/ticket.png';

const Ticket = ({ EMPTY_ADDRESS, ticket, onBuy }) => {

    const { price, owner, id } = ticket;
    const isSold = owner !== EMPTY_ADDRESS;

    return (
        <div className='col-3 mb-2'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={imageUrl} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {`TICKET NO ${id}`}</h5>
                    <p className="card-text">{price / 1e18} ETH</p>
                    <button
                        className="btn btn-secondary"
                        disabled={isSold}
                        onClick={() => onBuy(ticket)}>
                            {isSold ? 'Sold' : 'Buy Now'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ticket;