import React from "react";
import dva from "dva";
import "./index.css";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import { modal } from "src/modal";

const app = dva();

app.model(modal);

app.router(() => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
));

app.start("#root");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
