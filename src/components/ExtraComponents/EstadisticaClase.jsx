
const EstadisticaClase = ({nombre, stats}) => {
    
  return (
    <li className= {` ${nombre === "Nivel" ? "col-span-2" : "col-span-1"} flex justify-between font-eldenRing uppercase text-sm  py-2 px-4 bg-gradient-to-br from-yellow-700 to-yellow-600 rounded-md text-white`}><span className="font-bold">{nombre} </span>{stats}</li>

    
  )
}

export default EstadisticaClase