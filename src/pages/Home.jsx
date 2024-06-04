import React from "react";
import CardMenu from "../components/CardMenu";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main
        className='min-h-screen bg-[url("/fondoEldenRing.webp")] bg-fixed  bg-no-repeat bg-cover bg-center flex flex-col '
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="  w-screen absolute z-0 bg-[rgba(0,0,0,0.6)]"></div>
        <section className="max-w-6xl mx-auto mt-32 relative p-4 flex flex-col">
          <h1 className="text-4xl font-bold text-white">
            Bienvenidos a la Guia definitiva de{" "}
            <span className="text-[rgba(172,162,85)] font-eldenRing uppercase">
              Elden Ring
            </span>{" "}
          </h1>
          <p className="text-white mt-10 text-xl font-">
            ¡Hola aventureros! Bienvenidos a la guía definitiva para Elden Ring,
            el aclamado juego de acción y rol desarrollado por FromSoftware y
            publicado por Bandai Namco Entertainment. En esta página encontrarás
            todo lo que necesitas para convertirte en el rey del elden.
          </p>

          <h2 className="text-white text-2xl mt-10 font-bold">
            ¿Qué encontrarás en esta guía?
          </h2>
          <p className="text-white mt-5 text-xl">
            Nuestra guía está diseñada para ayudarte a explorar cada rincón de
            Elden Ring, ofreciendo recursos completos y detallados para
            jugadores de todos los niveles. A continuación, te damos una visión
            general de lo que puedes esperar encontrar:
          </p>

          <div className=" w-full md:h-96 mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <CardMenu
              url={"/cardGuia.png"}
              nombre={"Guia"}
              descripcion={"Explora la trama principal, conoce a los personajes clave, enfrenta a los jefes y descubre los NPCs cruciales."}
            />
            <CardMenu
              url={"/cardMelina.webp"}
              nombre={"Mapa"}
              descripcion={"Encuentra todas las ubicaciones importantes, NPCs, objetos valiosos y la posición de los jefes."}
            />
            <CardMenu
              url={"/cardBuilds.webp"}
              nombre={"Builds"}
              descripcion={"Descubre las mejores combinaciones de armas, habilidades y armaduras para dominar el juego."}
            />
          </div>

          <div
            className="w-full h-80 mt-16 flex gap-4 animate-show"
            style={{
              viewTimelineName: "--image",
              viewTimelineAxis: "block",
              animationTimeline: "--image",
              animationName: "show",
            }}
          >
            <div className="w-1/2 h-full p-6 flex flex-col bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg shadow-lg">
              <h2 className="text-white text-xl font-bold text-left w-full border-b border-white p-2 font-eldenRing uppercase">
                Consejos y trucos
              </h2>
              <p className="text-white mt-5 text-xl text-left ">
                Estrategias para Jefes, Guías detalladas para derrotar a cada
                jefe, incluyendo videos y estrategias paso a paso. Trucos y
                Glitches, Consejos útiles para aprovechar al máximo tu
                experiencia de juego, desde exploits hasta pequeños trucos que
                harán tu aventura más fácil.
              </p>
            </div>

            <div className="w-1/2 h-full p-6 flex flex-col bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg shadow-lg">
              <h2 className="text-white text-xl font-bold text-left w-full border-b border-white p-2 font-eldenRing uppercase">
                Comunidad{" "}
              </h2>
              <p className="text-white mt-5 text-xl text-left ">
                Únete a nuestra comunidad de jugadores para compartir
                estrategias, hacer preguntas y discutir teorías sobre el juego.
                Lee las experiencias de otros jugadores y comparte tus propias
                opiniones sobre las diferentes partes del juego.
              </p>
            </div>
          </div>
        </section>

        <div className=' bg-[url("/bgShadow.webp")] mt-10 bg-no-repeat bg-cover bg-center w-screen h-[60vh] '></div>
        <section className="max-w-5xl mx-auto mt-12 relative p-4">
          <h1
            className="text-white text-3xl text-center uppercase font-eldenRing mb-20 animate-show"
            style={{
              viewTimelineName: "--image",
              viewTimelineAxis: "block",
              animationTimeline: "--image",
              animationName: "show",
            }}
          >
            Proximas actualizaciones{" "}
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 h-1/2">
            <div className="flex flex-col ">
              <h2
                className="text-[rgba(172,162,85)] font-eldenRing uppercase text-xl animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              >
                Una nueva historia
              </h2>
              <p
                className="text-white text-xl mt-5 animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              >
                Guiados por Miquella, los jugadores son llevados a la Tierra
                Sombría, un lugar bajo la sombra del Árbol Áureo donde la diosa
                Márika se asentó primero. En este misterioso lugar, descubrirán
                secretos oscuros y conocerán a otros seguidores de Miquella con
                motivos ocultos.
              </p>

              <h2
                className="text-[rgba(172,162,85)] font-eldenRing uppercase text-xl mt-5 animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              >
                Explora un mundo conocido con nuevos secretos
              </h2>
              <p
                className="text-white text-xl mt-5 animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              >
                Shadow of the Erdtree expande ELDEN RING al llevar a los
                jugadores más allá de las Tierras Intermedias hacia la Tierra
                Sombría. Aquí, pueden explorar un vasto y conectado mapa, con
                varios lugares y mazmorras intrincadas llenas de enemigos
                peligrosos.
              </p>

              <h2
                className="text-[rgba(172,162,85)] font-eldenRing uppercase text-xl mt-5 animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              >
                Un juego de rol más profundo
              </h2>
              <p
                className="text-white text-xl mt-5 aniamte-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              >
                Esta expansión añade nuevas armas, magia, habilidades y equipo,
                además de nuevos enemigos, jefes y tramas. Estas adiciones
                aumentan la libertad del juego de rol, permitiendo a los
                jugadores disfrutar de nuevos poderes y experiencias.
              </p>
            </div>

            <div className="w-full h-full ">
              <img
                src="/shadowerdtree.png"
                alt="imagen shadow to the erdtree"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
