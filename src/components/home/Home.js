import React, { useState, useEffect } from "react";
import { GetConcerts } from "../../api/HttpRequest";
import Concerts from "../concerts/allConcerts/Concerts";

const Home = () => {
  const [concerts, setConcerts] = useState();

  useEffect(() => {
    GetConcerts().then((res) => setConcerts(res));
  }, []);

  return (
    <div>
      <h1>Welcome to TicketHub</h1>
      <h2>Current Shows</h2>
      {!concerts ? (
        <p>loading</p>
      ) : (
        concerts.map((concert) => (
          <Concerts key={concert._id} concert={concert} />
        ))
      )}
    </div>
  );
};

export default Home;
