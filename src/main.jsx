import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App'
import { BrowserRouter, Routes, Route } from "react"


createRoot(document.getElementById('root')).render(
  <StrictMode>  
<BrowserRouter basename="/Brandpage/"></BrowserRouter>
   <App/>
  </StrictMode>,
)

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
