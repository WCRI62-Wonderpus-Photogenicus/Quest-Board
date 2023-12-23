import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.createRoot(rootElement).render(<App />);
};

render()