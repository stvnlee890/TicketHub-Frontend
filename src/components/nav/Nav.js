import React, {useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  // our store is provided to Nav component through useSelector
  // this is the state (in this case store) needed in order to handle
  // logic based on the change of state.
  // const loggedIn = useSelector((store) => store.loggedIn.isLoggedIn);
  const [loggedIn, setLoggedIn] = useState(false);
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');
  window.addEventListener('storage', () => {
    if(isLoggedIn === 'true') setLoggedIn(true)
  })

  console.log(loggedIn)
  // useEffect(() => {
  //   const checkStorage = () => {
  //     const isLoggedIn = window.localStorage.getItem('isLoggedIn');
  //     console.log(isLoggedIn)
  //     if (isLoggedIn === 'true') setLoggedIn(true);
  //   }
  //   window.addEventListener('storage', checkStorage)

  //   return () => {
  //     window.removeEventListener('storage', checkStorage)
  //   }
  // },[])
  // console.log(loggedIn)

  

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {!loggedIn && <NavLink to="/signup">Sign Up</NavLink>}
      {!loggedIn && <NavLink to="/login">Login</NavLink>}
      {loggedIn && <NavLink to="/logout">Logout</NavLink>}
    </nav>
  );
};

export default Nav;
