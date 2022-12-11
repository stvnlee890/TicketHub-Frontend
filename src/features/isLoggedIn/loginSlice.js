import { createSlice } from "@reduxjs/toolkit";
// think of slice as a feature of an app

const initialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  // create slice requires a name, state, reducers property
  name: "isLoggedIn",
  initialState,
  reducers: {
    // handle the reducers logic here
    // able to mutate state in reducer through **immer** which occurs under the hood
    // we don't actually mutate the state because of immer library.
    // immer detects changes to a "draft state" and produces a
    // brand new immutable state based off those changes
    setLoggedIn: (state) => {
      console.log(state.isLoggedIn)
      state.isLoggedIn = window.localStorage.getItem('user');
      console.log(state.isLoggedIn)
      //   else state.isLoggedIn = false
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// console.log(loginSlice)
export const { setLoggedIn, setLogOut } = loginSlice.actions;
export default loginSlice.reducer;
