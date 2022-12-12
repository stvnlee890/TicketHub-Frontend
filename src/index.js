import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store, persistor } from "./store/Store";
import { Provider } from "react-redux";
// import { AuthProvider } from "./context/AuthProvider";
import { PersistGate } from "redux-persist/es/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        {/* <AuthProvider> */}
        {/* </AuthProvider> */}
      </Provider>
    </React.StrictMode>
  </Router>
);
