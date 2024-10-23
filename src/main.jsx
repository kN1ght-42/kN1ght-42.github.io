import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StyledEngineProvider } from '@mui/system'

createRoot(document.getElementById('root')).render(<App />)
