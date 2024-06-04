import DropButton from "./DropButton"
import { dataGuia , dataMapa } from "../data/dataMenu"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (

    <header className="w-full bg-gradient-to-r from-slate-800 to-slate-700 fixed z-10">

      <nav className=" max-w-6xl mx-auto p-5 flex justify-between">
          <NavLink to="/"><span className="flex items-center text-white font-bold cursor-pointer "><img src="/iconoEldenRing.png" alt="logo" className="w-12 h-12" /> Guia Elden Ring</span></NavLink>

          <ul className="flex items-center gap-4 ">
              <DropButton nombre={"Guía  ▼"} dataMenu={dataGuia}/>
              <DropButton nombre={"Mapa  ▼"} dataMenu={dataMapa}/>
              <button className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg">Builds</button>
              <button className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-lg">Consejos y trucos</button>


          </ul>

      </nav>

    </header>
  )
}

export default Navbar