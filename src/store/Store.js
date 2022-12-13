import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
} from "redux-persist";

// this is the login slice
import loggedInReducer from "../features/isLoggedIn/loginSlice";


// Typically, configureStore handles our need of having to combineReducers but in this case, 
// we might have to call combineReducers to pass into persitReducer method
// combineReducers turns an object whose values are different reducing functions
// into a single reducing function you can pass to createState
// we have multiple reducers in loginSlice: setLoggedIn, setLogOut
const reducers = combineReducers({
  userHandle: loggedInReducer,
});

// initialize persistConfig to pass as first argument to persistReducer
// required configs:
  // key, storage
  // additional configs, whitelist, blacklist, version, stateReconciler
const persistConfig = {
  key: "userInfo",
  storage,
};

// persistReducer takes in the reducer function. 
// typically this would be a top level reducer returned by combineReducers
const persistedReducer = persistReducer(persistConfig, reducers);

// configureStore
// by default, configureStore adds some middleware (unless customize) automatically.
// when supplying a middleware, you're responsible for all middleware added to store.
// configure store will not add any extre middleware beyond what you listed.  
// getDefaultMiddleware is useful if you want to add some custom middleware, 
// but also still want to have the default middleware added as well:
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