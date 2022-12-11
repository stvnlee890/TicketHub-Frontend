import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider"

const Logout = () => {
  const context = useContext(AuthContext)
  useEffect(() => {
    context.handleLogout()
  }, []);

  return <div>Logout successful</div>;
};
export default Logout;
