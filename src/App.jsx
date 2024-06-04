import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Guia from "./pages/Guias/Guia"
import PersonajesClases from "./pages/Guias/PersonajesClases"

import Mapa from "./pages/Mapa/Mapa"
import Builds from "./pages/Builds/Builds"

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/guia" element={<Guia/>} />
        <Route path="/personajesyclases" element={<PersonajesClases/>} />
        <Route path="/mapa" element={<Mapa/>} />
        <Route path="/builds" element={<Builds/>} />

      </Routes>
      

      
    </>
  )
}

export default App
