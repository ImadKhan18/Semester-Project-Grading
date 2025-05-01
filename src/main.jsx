import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './Components/Layouts/NavBar.jsx'
import Footer from './Components/Layouts/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>

    <App />

    <Footer/>
  </StrictMode>
  
)
