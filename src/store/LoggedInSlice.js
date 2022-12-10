import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
const userLoggedIn = window.localStorage.getItem("isLoggedIn");

const loggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState,
  reducers: {
    checkLoggedIn: (state) => {
        state = true;
    },
  },
});

export const { checkLoggedIn } = loggedInSlice.actions;
export default loggedInSlice.reducer;