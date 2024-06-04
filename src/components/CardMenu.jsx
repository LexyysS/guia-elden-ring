
const CardMenu = ({url, nombre, descripcion}) => {
  return (
    <div className=" w-full h-full p-6 duration-200 flex flex-col items-center bg-gradient-to-br from-[rgba(120,112,83,0.9)] to-slate-600 rounded-xl shadow-lg cursor-pointer hover:opacity-70 hover:scale-105 transition-all">
        <div className="w-1/2 h-1/2 "> <img src={url} alt={"Imagen card"} className="w-full h-full object-cover "/></div>
        
        <h4 className="text-[rgba(172,162,85)] text-xl font-eldenRing uppercase mt-8 mb-2">{nombre}</h4>
        <p className='text-white text-sm text-center p-4'>{descripcion}</p>
        


    </div>
  )
}

export default CardMenu