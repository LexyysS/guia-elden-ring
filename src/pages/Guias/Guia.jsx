import imagen1 from "../../assets/imagenesHistoria/bgHistoria1.jpeg";
import imagen2 from "../../assets/imagenesHistoria/imagenKale.webp";
import imagen3 from "../../assets/imagenesHistoria/torrentera.webp";
import imagen4 from "../../assets/imagenesHistoria/parches.jpeg";
import imagen5 from "../../assets/imagenesHistoria/margit.webp";
import imagen6 from "../../assets/imagenesHistoria/godrick.webp";
import imagen7 from "../../assets/imagenesHistoria/mesetaAltus.avif";
import imagen8 from "../../assets/imagenesHistoria/ranni.webp";
import imagen9 from "../../assets/imagenesHistoria/morgot.webp";
import imagen10 from "../../assets/imagenesHistoria/fireGiant.webp";
import imagen11 from "../../assets/imagenesHistoria/maliketh.webp";
import imagen12 from "../../assets/imagenesHistoria/radagon.avif";
import Footer from "../../components/Footer";

const Guia = () => {
  return (
    <>
      <main
        className="min-h-screen bg-[url('/bg-Guia.jpeg')] bg-fixed  bg-no-repeat bg-cover bg-center "
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          backgroundBlendMode: "overlay",
        }}
      >
        <section className="max-w-6xl mx-auto pt-32 relative p-4">
          <h1 className="text-3xl w-full p-2 border-b border-white font-eldenRing text-[rgba(172,162,85)] uppercase">
            Historia
          </h1>

          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-20">
            <div className="flex flex-col mt-20">
              <h2 className="text-2xl text-white font-eldenRing uppercase ">
                {" "}
                El Prólogo y el inicio del Viaje
              </h2>
              <p className="mt-5 text-xl text-white">
                El juego comienza con una impresionante cinemática que te
                explica que el anillo Elden ha sido destrozado, y tú, como
                Sinluz, has sido convocado para restaurar el orden. Despiertas
                en el Necrolimbo, donde te familiarizarás con los controles y el
                entorno.
              </p>

              <h3 className="text-xl text-white font-eldenRing uppercase mt-5">
                Primer jefe : Grafted Scion
              </h3>
              <p className="mt-5 text-xl text-white">
                Este jefe está diseñado para derrotarte rápidamente y llevarte
                al siguiente capítulo de tu aventura. Después de esto, recibirás
                tus primeros objetos clave: el
                <span className="text-[rgba(172,162,85)] italic">
                  {" "}
                  Flask of Crimson Tears{" "}
                </span>{" "}
                y el{" "}
                <span className="text-[rgba(172,162,85)] italic">
                  Flask of Cerulean Tears{" "}
                </span>{" "}
                de Melina, los cuales te ayudarán a restaurar salud y magia
              </p>
            </div>

            <div className="w-full h-full rounded-lg flex justify-center items-center">
              <img
                src={imagen1}
                alt="imagen de historia 1"
                className="w-full h-2/3 object-cover rounded-lg border-2 border-[rgba(172,162,85)] animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              />
            </div>
          </div>

          <div className=" w-full h-full gap-4 mt-10 mb-20 flex flex-col ">
            <h2 className="text-2xl text-white font-eldenRing uppercase ">
              {" "}
              Necrolimbo
            </h2>
            <p className="mt-5 text-xl text-white">
              Tu exploración inicial te llevará a la{" "}
              <span className="font-bold">Iglesia de Elleh</span>, donde
              conocerás a un mercader muy útil. Pronto, te encontrarás con
              Melina, quien te ofrecerá el uso de Torrent, tu fiel caballo
              espiritual. Busca el mapa del Necrolimbo en un pilar cercano para
              desbloquear la visibilidad del área.
            </p>

            <div
              className="w-full h-full grid grid-cols-1 md:grid-cols-2  rounded-lg  gap-4 mt-10 mb-5 animate-show "
              style={{
                viewTimelineName: "--image",
                viewTimelineAxis: "block",
                animationTimeline: "--image",
                animationName: "show",
              }}
            >
              <div className="w-full h-full">
                <img
                  src={imagen2}
                  alt="imagen de historia 2"
                  className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)]"
                />
              </div>

              <div className="w-full h-full">
                <img
                  src={imagen3}
                  alt="imagen de historia 3"
                  className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)]"
                />
              </div>
            </div>

            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 rounded-lg gap-4 mt-10">
              <div className="w-full h-full flex items-center">
                <p className="mt-5 text-xl text-white ">
                  Explora mazmorras como la Cueva de Agualóbrega, donde
                  conocerás a Patches, un personaje recurrente en los juegos de
                  FromSoftware. No olvides enfrentarte al Beastman of Farum
                  Azula, un jefe menor que te recompensará bien.
                </p>
              </div>

              <div className="w-full h-full">
                <img
                  src={imagen4}
                  alt="imagen de parches "
                  className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)] animate-show"
                  style={{
                    viewTimelineName: "--image",
                    viewTimelineAxis: "block",
                    animationTimeline: "--image",
                    animationName: "show",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-28 mb-28 ">
            <h2 className="text-2xl text-white font-eldenRing uppercase ">
              {" "}
              Castillo de Velo Tormentoso
            </h2>

            <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-32 ">
              <div className="w-full h-full flex items-center">
                <p className="mt-5 text-xl text-white ">
                  Al norte del Necrolimbo, encontrarás el imponente Castillo de
                  Velo Tormentoso. Aquí te espera tu primer gran reto:{" "}
                  <span className="font-eldenRing uppercase">
                    Margit, el Augurio Caído{" "}
                  </span>
                  , un jefe desafiante que pondrá a prueba tus habilidades. Tras
                  derrotarlo, obtendrás el{" "}
                  <span className="text-[rgba(172,162,85)] italic">
                    Talisman Pouch
                  </span>
                  , que te permitirá equipar más talismanes.
                </p>
              </div>

              <img
                src={imagen5}
                alt="imagen de margit"
                className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)] animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              />

              <img
                src={imagen6}
                alt="imagen de godrick"
                className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)] animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              />

              <div className="w-full h-full flex items-center">
                <p className="mt-5 text-xl text-white">
                  Dentro del castillo, prepárate para enfrentarte a{" "}
                  <span className="font-eldenRing uppercase">
                    Godrick el Injertado
                  </span>{" "}
                  . Este jefe principal te otorgará la Gran Runa de Godrick,
                  necesaria para avanzar en la historia.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-32 mb-28 ">
            <h2 className="text-2xl text-white font-eldenRing uppercase ">
              {" "}
              La Meseta de Altus
            </h2>

            <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-32 ">
              <div className="w-full h-full flex items-center">
                <p className="mt-5 text-xl text-white ">
                  Tu próximo destino es la{" "}
                  <span className="font-bold">Meseta de Altus</span>, al este
                  del Necrolimbo. Aquí encontrarás nuevos desafíos y enemigos.
                </p>
              </div>

              <img
                src={imagen7}
                alt="imagen de margit"
                className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)] animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              />

              <img
                src={imagen8}
                alt="imagen de godrick"
                className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)] aniamte-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              />

              <div className="w-full h-full flex items-center">
                <p className="mt-5 text-xl text-white">
                  No te olvides de encontrarte con{" "}
                  <span className="font-bold">Ranni la Bruja</span>, quien te
                  ofrecerá una misión secundaria importante que puede afectar el
                  final del juego. Busca el mapa de la Meseta de Altus para
                  facilitar tu exploración.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-32 mb-28 ">
            <h2 className="text-2xl text-white font-eldenRing uppercase ">
              {" "}
              Lyndell, Capital Real
            </h2>

            <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-32 ">
              <div className="w-full h-full flex items-center">
                <p className="mt-5 text-xl text-white ">
                  Lyndell es una ciudad central llena de historia y desafíos.
                  Enfrentarás enemigos poderosos y, finalmente, a{" "}
                  <span className="font-eldenRing uppercase">
                    Morgott, Rey Caído
                  </span>
                  . Derrotarlo te dará la{" "}
                  <span className="text-[rgba(172,162,85)] italic">
                    Gran Runa de Morgott
                  </span>
                  , otra pieza clave para tu misión.
                </p>
              </div>

              <img
                src={imagen9}
                alt="imagen de morgott"
                className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)] animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col mt-32 mb-28 ">
            <h2 className="text-2xl text-white font-eldenRing uppercase mb-10">
              {" "}
              Montaña de los Gigantes
            </h2>

            <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-32 ">
              <img
                src={imagen10}
                alt="imagen de gigante de fuego"
                className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)] animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              />

              <div className="w-full h-full flex items-center">
                <p className="mt-5 text-xl text-white ">
                  En esta fría y desolada área, tu objetivo es enfrentarte al{" "}
                  <span className="font-eldenRing uppercase">Fire Giant</span> ,
                  un jefe formidable en tu camino. Tras derrotarlo, obtendrás el{" "}
                  <span className="text-[rgba(172,162,85)] italic">
                    Corazón de Gigante
                  </span>
                  , necesario para encender la llama que abrirá el camino hacia
                  el Árbol Áureo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-32 mb-28 ">
            <h2 className="text-2xl text-white font-eldenRing uppercase mb-10">
              {" "}
              Faram Azula y el Gran Final
            </h2>

            <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-32 ">
              <div className="w-full h-full flex items-center">
                <p className="mt-5 text-xl text-white ">
                  Faram Azula es un antiguo templo de dragones donde te
                  enfrentarás a{" "}
                  <span className="font-eldenRing uppercase">
                    Maliketh, el Lobo Negro
                  </span>{" "}
                  . Derrotarlo es crucial para avanzar a la fase final del juego
                  y obtener la{" "}
                  <span className="text-[rgba(172,162,85)] italic">
                    Rune of Death
                  </span>
                  .
                </p>
              </div>

              <img
                src={imagen11}
                alt="imagen de maliketh"
                className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)] animate-show"
                style={{
                  viewTimelineName: "--image",
                  viewTimelineAxis: "block",
                  animationTimeline: "--image",
                  animationName: "show",
                }}
              />
            </div>

            <div className="flex flex-col mt-32 mb-10 ">
              <h2 className="text-2xl text-white font-eldenRing uppercase mb-10">
                {" "}
                Árbol Áureo y Conclusión
              </h2>

              <div className="w-full h-full  grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-32 ">
                <img
                  src={imagen12}
                  alt="imagen de radagon"
                  className="w-full h-full object-cover rounded-lg border-2 border-[rgba(172,162,85)] animate-show"
                  style={{
                    viewTimelineName: "--image",
                    viewTimelineAxis: "block",
                    animationTimeline: "--image",
                    animationName: "show",
                  }}
                />

                <div className="w-full h-full flex items-center">
                  <p className="mt-5 text-xl text-white ">
                    El asalto final tiene lugar en el{" "}
                    <span className="font-bold">Árbol Áureo</span>, donde te
                    enfrentarás a la{" "}
                    <span className="font-eldenRing uppercase">
                      Reina Marika
                    </span>{" "}
                    y <span className="font-eldenRing uppercase">Radagon</span>.
                    Tu último desafío será derrotar a la{" "}
                    <span className="font-eldenRing uppercase">
                      Elden Beast
                    </span>{" "}
                    , la encarnación del Elden Ring. Al completar el juego,
                    restaurarás el Elden Ring y podrás elegir tu final basado en
                    las decisiones que tomaste durante tu aventura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl text-white mb-28 ">
            ¡Y eso es todo! Elden Ring es una aventura increíblemente rica y
            desafiante. Sigue esta guía y encontrarás los objetos esenciales y
            enfrentarás a los jefes que necesitas para convertirte en el Elden
            Lord. ¡Buena suerte, Sinluz!
          </h3>
        </section>
      </main>
      
      <Footer/>


    </>
  );
};

export default Guia;
