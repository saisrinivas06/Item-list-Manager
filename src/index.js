import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import App from "./App";
import "./index.css"; // Optional, if you have a CSS file

// Use createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);