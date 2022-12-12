import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import loggedInReducer from "../features/isLoggedIn/loginSlice";

const reducers = combineReducers({
  userLogIn: loggedInReducer,
});

const persistConfig = {
  key: "userInfo",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// we import the loginSlice.reducer into the store
const store = configureStore({
  reducer: {
    // name is loggedInReducer because we exported loginSlice.reducer as a default
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export {store, persistor}