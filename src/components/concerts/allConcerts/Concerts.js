import React from "react";
import { useNavigate } from "react-router-dom";

const Concerts = ({ concert }) => {
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/concert-detail/${e.target.id}`)
    }
  return (
    <div>
        <p>{concert.artistName}</p>
        <p>{concert.venue}</p>
        <p>{concert.tourDates}</p>
        <button id={concert.concertId} onClick={handleClick}>Learn More</button>
    </div>
  );
};

export default Concerts;
