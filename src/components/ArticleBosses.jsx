

const ArticleBosses = ({nombre, descripcion, imagen, localizacion , }) => {
  return (
    <>
      <h1 className="text-2xl font-eldenRing uppercase "> Margit</h1>
      <div className="w-full h-1/2 grid grid-cols-1 md:grid-cols-2 mt-12 gap-3">
        <div className="w-full h-full ">
          <p className="text-white ">Descripcion del npc</p>
        </div>

        <div>
          imagen aqui
          <img />
        </div>
      </div>

      <div className="w-full mt-5">
        <h2 className="text-xl mb-5 py-2 border-b text-white border-white ">
          Localizacion
        </h2>
        <p className="text-white">Aqui va donde se localiza</p>
      </div>

      <div className="w-full mt-5">
        <h2 className="text-xl mb-5 py-2 border-b text-white border-white ">
          Drops{" "}
        </h2>
        <p className="text-white">Aqui va los drops</p>
      </div>
    </>
  );
};

export default ArticleBosses;
