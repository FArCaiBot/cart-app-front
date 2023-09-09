import React from "react";
import ReactDOM from "react-dom/client";
import { CartApp } from "./CartApp";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartApp />
  </React.StrictMode>
);
