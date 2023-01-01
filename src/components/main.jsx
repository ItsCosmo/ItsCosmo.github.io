import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basemname={`/${import.meta.env.BASE_URL}`}><App /></Router>
  </React.StrictMode>,
)