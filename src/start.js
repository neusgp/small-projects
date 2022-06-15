import React from "react";
import ReactDOM from "react-dom/client";
import HelloMessage from "./app.js";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<HelloMessage name="Jane" />);
