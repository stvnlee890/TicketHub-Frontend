import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogOut } from "../../features/isLoggedIn/loginSlice";

const Logout = () => {
  const dispatch = useDispatch();
    window.localStorage.clear()
  useEffect(() => {
    dispatch(setLogOut());
  }, []);
  return <div>Logout successful</div>;
};
export default Logout;
