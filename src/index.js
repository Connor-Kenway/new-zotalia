import "./index.css";
import React from 'react';
import {createRoot} from 'react-dom/client';
import { UserProvider } from "./context/UserContext";

import App from './App';

// const rootElement = document.getElementById("root");
const root = createRoot(document.getElementById('root'));

root.render(
  <UserProvider>
    <App />
  </UserProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
