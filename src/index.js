import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App2 from "./App2";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App2 />
  </BrowserRouter>
);
