import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../Css/output.css";
import StateContextProvider from "./Context/StateContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
