import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'
import { useFetch } from './useFetch.jsx'
import { useCounter } from './useCounter.jsx' 
import Loading from './components/Loading.jsx'
import { CustomHook } from './CustomHook.jsx'
import { HookBreakingBad } from './HookBreakingBad.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookBreakingBad></HookBreakingBad>
  </StrictMode>,
)
