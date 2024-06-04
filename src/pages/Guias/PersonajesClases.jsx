import { SideBarMenu } from "../../components/SideBarMenu";
import { useState, useEffect } from "react";
import ArticleNPC from "../../components/ArticleNPC";
import { DataNPC } from "../../data/dataApi";

const PersonajesClases = () => {
  const [data, setData] = useState(DataNPC.data);

  const [selected, setSelected] = useState("");

  return (
    <>
      <main className="h-screen bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-6xl h-full mx-auto grid grid-cols-4 gap-3 pt-28 pb-10">
          <div className="col-span-1  bg-white rounded-lg overflow-y-auto">
            <SideBarMenu data={data} setSelected={setSelected} />
          </div>

          <div className="col-span-3 flex flex-col p-12  bg-gradient-to-br from-[rgba(141,124,60,0.9)] to-[rgba(238,205,85,0.9)] rounded-lg overflow-y-auto">
            {selected &&
              data.map((dataItem) =>
                dataItem.id === selected ? (
                  <ArticleNPC
                    key={dataItem.id}
                    nombre={dataItem.name}
                    descripcion={dataItem.description}
                    imagen={dataItem.image}
                    localizacion={dataItem.location}
                    rol={dataItem.role}
                  />
                ) : (
                  ""
                )
              )}
          </div>
        </div>
      </main>
    </>
  );
};

export default PersonajesClases;
