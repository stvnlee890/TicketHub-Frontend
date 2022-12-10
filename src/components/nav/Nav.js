import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
    const loggedIn = useSelector((state) => state)
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </nav>
  );
};

export default Nav;
