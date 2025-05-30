import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SimpleForm } from './SimpleForm.jsx'
import { Message } from './Message.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleForm></SimpleForm>
  </StrictMode>,
)
