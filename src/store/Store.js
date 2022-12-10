import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "../features/isLoggedIn/loginSlice";

// we import the loginSlice.reducer into the store
export const store = configureStore({
  reducer: {
    // name is loggedInReducer because we exported loginSlice.reducer as a default
    loggedIn:loggedInReducer
  },
});  
