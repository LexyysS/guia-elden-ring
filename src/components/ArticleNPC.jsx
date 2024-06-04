

const articleNPC = ({nombre, descripcion, imagen, localizacion , rol}) => {
  return (
    <>
      <h1 className="text-2xl font-eldenRing uppercase "> {nombre}</h1>
      <div className="w-full h-1/2 grid grid-cols-1 md:grid-cols-2 mt-12 gap-3">
        <div className="w-full h-full ">
          <p className="text-white ">{descripcion}</p>
        </div>

        <div className="w-full h-full rounded-lg">
          
          <img src={imagen} alt={"Imagen card"} className="w-full h-[250px]  object-cover object-top  rounded-lg" />
        </div>
      </div>

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
    </>
  );
};

export default articleNPC;
