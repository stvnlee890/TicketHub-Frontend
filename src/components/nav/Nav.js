import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const isLoggedIn = useSelector((state) => state.reducer.userHandle.isLoggedIn.payload.isLoggedIn)
 
  // const isLoggedIn = useSelector((state) => console.log(state))
  console.log(isLoggedIn)

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {!isLoggedIn && <NavLink to="/signup">Sign Up</NavLink>}
      {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
      {isLoggedIn && <NavLink to="/logout">Logout</NavLink>}
    </nav>
  );
};

export default Nav;
