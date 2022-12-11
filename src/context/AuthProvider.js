import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  // initial value of context
  isLoggedIn: false,
  // setisloggedin for better IDE completion
  setIsLoggedIn: () => {},
  handleLogin: (token) => {},
  handleLogout: () => {},
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect logic creates persistent user log in.
  // checks local storage for user info to persist state during component mounting upon refresh
  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");
    if (userInfo === "true") setIsLoggedIn(true);
    else if (userInfo === null) setIsLoggedIn(false);
  }, []);

  // handles login
  const handleLogin = (token) => {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true)
  };

  // handles logout
  const handleLogout = () => {
    window.localStorage.clear();
    setIsLoggedIn(false)
  }

  return (
    // we provide the state value to children of the provider as props.
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
