import React, { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { setLogOut } from "../../features/isLoggedIn/loginSlice";


const Logout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLogOut({
      token: null,
      isLoggedIn: false,
    }))
  }, []);

  return <div>Logout successful</div>;
};
export default Logout;
