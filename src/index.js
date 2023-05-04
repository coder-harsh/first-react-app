/*
predefined template in react 18 for rendering
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// in react 17, import ReactDOM from 'react-dom';

render in react 17
ReactDOM.render(<App />, document.getElementById("root"));
*/



import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
