import { StrictMode } from 'react'
import React from 'react'
import ReactDom from 'react-dom/client'
const { createRoot } = ReactDom;
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    <App />
  </BrowserRouter>
  </StrictMode>,
)
