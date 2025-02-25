import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppCounter from './AppCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCounter></AppCounter>
  </StrictMode>,
)
