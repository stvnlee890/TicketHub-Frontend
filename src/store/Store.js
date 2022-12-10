import { configureStore } from "@reduxjs/toolkit";
import LoggedInSlice from "./LoggedInSlice";

export default configureStore({
    reducer: {
        isLoggedIn: LoggedInSlice,
    },
})