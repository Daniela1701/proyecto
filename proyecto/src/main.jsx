import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Testimonios from './componentes/testimonios/testimonios.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Testimonios/>
  </StrictMode>,
)
