import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
      <App />
  </Provider>
);

