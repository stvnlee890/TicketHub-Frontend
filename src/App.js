import React from "react";
import { Route, Routes } from "react-router-dom";
import ConcertDetail from "./components/concerts/concertDetail/ConcertDetail";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Login from "./components/user/Login";
import Logout from "./components/user/Logout";
import Signup from "./components/user/Signup";

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/concert-detail/:concertId" element={<ConcertDetail />} />
      </Routes>
    </div>
  );
}

export default App;
