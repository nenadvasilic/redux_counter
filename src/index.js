import React from "react";

// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/index";

// ReactDOM.render(<App />, document.getElementById('root'));
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// npx create-react-app redux-counter
// yarn add redux react-redux
// yarn start

// yarn add "@reduxjs/toolkit"   <-- or -->   npm install @reduxjs/toolkit
