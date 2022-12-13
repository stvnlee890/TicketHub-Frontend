import React from "react";

const Tickets = ({ ticket }) => {
    return (
        <div>
            <h1>Tickets</h1>
            <p>Ticket Type: {ticket.ticketType}</p>
            <p>Venue: {ticket.venue}</p>
            <p>Price: ${ticket.price}</p>
            <button>Purchase</button>
        </div>
    )
}

export default Tickets;