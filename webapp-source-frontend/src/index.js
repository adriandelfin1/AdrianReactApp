import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";

const root = createRoot(document.getElementById('root'));

//restrict mode is causing my dashboard to render twice and causes the connect socket to run twice as well so I will leave it out for now4
//But do keep in mind that it's a valuable tool for catching potential issues early in development,
//so it's generally a good practice to use it when developing your app, and then remove it when you're done debugging

root.render(
  // <React.StrictMode> 
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>,
);

serviceWorker.unregister();
