const articleNPC = ({ nombre, descripcion, imagen, localizacion, rol }) => {
  return (
    <>
      <div className="w-full h-full flex   gap-3 justify-between">
        <div className="w-[55%] h-full ">
          <h1 className="text-2xl mt-12 mb-12 font-eldenRing uppercase animate-slide-in-left">
            {" "}
            {nombre}
          </h1>
          <p className="text-white animate-slide-in-left">{descripcion}</p>

          <div className="w-full mt-5">
            <h2 className="text-xl mb-5 py-2 border-b text-black border-black ">
              Localizacion
            </h2>
            <p className="text-white">{localizacion}</p>
          </div>

          <div className="w-full mt-5">
            <h2 className="text-xl mb-5 py-2 border-b text-black border-black ">
              Rol{" "}
            </h2>
            <p className="text-white">{rol}</p>
          </div>
        </div>

        <div className="w-[45%] flex justify-center items-center h-full bg-gray-900  rounded-l-[40px] ">
          <img
            src={imagen}
            alt={"Imagen card"}
            className="w-full h-[300px] animate-fade-in object-cover object-top " 
            style={{maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)"}}
          />
        </div>
      </div>
    </>
  );
};

export default articleNPC;
