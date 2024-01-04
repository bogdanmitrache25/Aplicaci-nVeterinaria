import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index/tailwind.css"; // Asegúrate de que la ruta sea correcta
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
