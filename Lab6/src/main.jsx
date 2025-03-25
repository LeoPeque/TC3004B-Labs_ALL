import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Manager from './Manager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Manager></Manager>
  </StrictMode>,
)
