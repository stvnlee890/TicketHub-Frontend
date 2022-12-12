import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const context = useContext(AuthContext)

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {!context.isLoggedIn && <NavLink to="/signup">Sign Up</NavLink>}
      {!context.isLoggedIn && <NavLink to="/login">Login</NavLink>}
      {context.isLoggedIn && <NavLink to="/logout">Logout</NavLink>}
    </nav>
  );
};

export default Nav;
