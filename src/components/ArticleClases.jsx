import EstadisticaClase from "./ExtraComponents/EstadisticaClase";

const ArticleClases = ({ nombre, descripcion, imagen, skill, stats }) => {

    const url = "ImagenesClases/"+imagen
    

    return (
      <>
        <div className="w-full h-full flex   gap-3 justify-between">
          <div className="w-[55%] h-full ">
            <h1 className="text-2xl mt-12 mb-12 font-eldenRing uppercase animate-slide-in-left">
              {" "}
              {nombre}
            </h1>
            <p className="text-white animate-slide-in-left">{descripcion}</p>
            <p className="text-white animate-slide-in-left mt-5">{skill}</p>
  

            <div className="w-full mt-5">
              <h2 className="text-xl mb-5 py-2 border-b text-black border-black ">
                Estadisticas{" "}
              </h2>
              
              <ul className=" w-4/5 grid grid-cols-2 gap-2">
                <EstadisticaClase nombre={"Nivel"} stats={stats.level}/>
                <EstadisticaClase nombre={"Vigor"} stats={stats.vigor}/>
                <EstadisticaClase nombre={"Mente"} stats={stats.mind}/>
                <EstadisticaClase nombre={"Aguante"} stats={stats.endurance}/>
                <EstadisticaClase nombre={"Fuerza"} stats={stats.strength}/>
                <EstadisticaClase nombre={"Destreza"} stats={stats.dexterity}/>
                <EstadisticaClase nombre={"Inteligencia"} stats={stats.intelligence}/>
                <EstadisticaClase nombre={"Fe"} stats={stats.faith}/>
                <EstadisticaClase nombre={"Arcano"} stats={stats.arcane}/>

              </ul>
            </div>
          </div>
  
          <div className="w-[45%] flex justify-center items-center p-3  h-full  rounded-l-[40px] ">
            <img
              src={url}
              alt={"Imagen card"}
              className="w-full h-full animate-fade-in object-contain object-center " 
              style={{}}
            />
          </div>
        </div>
      </>
    );
  };
  
  export default ArticleClases;
  