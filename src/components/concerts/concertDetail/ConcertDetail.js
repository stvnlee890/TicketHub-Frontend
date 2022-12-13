import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetTicketDetails } from "../../../api/HttpRequest";
import Tickets from "./Tickets";

const ConcertDetail = () => {
  const { concertId } = useParams("concertId");
  const [tickets, setTickets] = useState()

  useEffect(() => {
    GetTicketDetails(concertId).then(res => setTickets(res))
  },[])
  return (
    <div>
        <h1>Concert Details</h1>
        {!tickets ? <p>loading</p> :
        tickets.map((ticket) => (
            <Tickets key={ticket._id} ticket={ticket}/>
        ))
        }
    </div>
  )
};

export default ConcertDetail;
