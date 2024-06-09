import { useState } from "react";
import ArticleNPC from "../../components/ArticleNPC";
import ArticleBosses from "../../components/ArticleBosses";
import { DataNPC } from "../../data/dataApi";
import { DataBosses } from "../../data/dataBosses";
import Sidebar from "../../components/Side";
import { DataClases } from "../../data/dataClases";
import ArticleClases from "../../components/ArticleClases";

const PersonajesClases = () => {
  const [selected, setSelected] = useState({
    id: "",
    tipo: "",
  });

  return (
    <>
      <main className="h-screen bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-6xl h-full mx-auto grid grid-cols-4 gap-3 pt-28 pb-10">
          <div className="col-span-1 rounded-lg w-full h-full overflow-y-auto">
            <Sidebar setSelected={setSelected} />
          </div>

          <div className="col-span-3  flex flex-col pl-12  bg-gradient-to-br from-[rgba(141,124,60,0.9)] to-[rgba(238,205,85,0.9)] rounded-lg overflow-y-auto">
            {selected &&
              (selected["tipo"] === "jefe"
                ? DataBosses.data.map((dataItem) =>
                    dataItem.id === selected["id"] ? (
                      <ArticleBosses
                        key={dataItem.id}
                        nombre={dataItem.name}
                        region={dataItem.region}
                        descripcion={dataItem.description}
                        imagen={dataItem.image}
                        localizacion={dataItem.location}
                        drops={dataItem.drops}
                        vida={dataItem.healthPoints}
                      />
                    ) : (
                      ""
                    )
                  )
                : selected["tipo"] === "npc"
                ? DataNPC.data.map((dataItem) =>
                    dataItem.id === selected["id"] ? (
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
                  )
                : DataClases.data.map((dataItem) =>
                    dataItem.id === selected["id"] ? (
                      <ArticleClases
                        key={dataItem.id}
                        nombre={dataItem.name}
                        imagen={dataItem.image}
                        descripcion={dataItem.description}
                        skill={dataItem.skill}
                        stats={dataItem.stats}
                      />
                    ) : (
                      ""
                    )
                  ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default PersonajesClases;
