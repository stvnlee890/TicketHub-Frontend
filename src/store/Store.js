import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "../features/isLoggedIn/loginSlice";


export const store = configureStore({
  reducer: {
    loggedIn:loggedInReducer
  },
});  
