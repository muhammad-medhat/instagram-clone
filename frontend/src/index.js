import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.css";
// import "../node_modules/react-bootstrap/dist/react-bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
