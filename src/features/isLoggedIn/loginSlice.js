import { createSlice } from "@reduxjs/toolkit";

// think of slice as a feature of an app
const initialState = {
  isLoggedIn: false,
};
const logInStatus = window.localStorage.getItem("isLoggedIn");
const loginSlice = createSlice({
    // create slice requires a name, state, reducers property
  name: "isLoggedIn",
  initialState,
  reducers: {
    // handle the reducers logic here
    // able to mutate state in reducer through **immer** which occurs under the hood
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
      //   else state.isLoggedIn = false
    },
    setLogOut: (state) => {
        state.isLoggedIn = false;
    }
  },
});

// console.log(loginSlice)
export const { setLoggedIn, setLogOut } = loginSlice.actions;
export default loginSlice.reducer;
