const steps = [
  {
    number: "01",
    title: "Descubran qué tipo de boda quieren",
    text: "Empiecen por entender qué les importa más: una boda visualmente espectacular, una mejor experiencia para sus invitados o una opción que combine estética, logística y beneficios.",
  },
  {
    number: "02",
    title: "Exploren la colección ideal para ustedes",
    text: "Les mostramos una selección curada de hoteles y paquetes que realmente destacan, para que puedan empezar por opciones que sí tengan sentido para su estilo y su grupo.",
  },
  {
    number: "03",
    title: "Respondan unas preguntas clave",
    text: "Con el wedding wizard podemos perfilar mejor su fecha aproximada, destino ideal, número estimado de invitados y el tipo de experiencia que imaginan.",
  },
  {
    number: "04",
    title: "Agenden una videollamada más aterrizada",
    text: "Así la conversación ya parte de información útil, con mejores recomendaciones para ustedes, para su evento y para sus invitados.",
  },
];

export default function WeddingsFlow() {
  return (
    <section className="border-b border-[#e9dfd2] bg-[#f8f2eb]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88d87]">
            Su camino con Flymingo Weddings
          </p>

          <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-[#5a4a42] sm:text-4xl lg:text-5xl">
            Así empezamos a diseñar una boda destino que sí se sienta como ustedes.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#75645c] sm:text-base sm:leading-8 lg:text-lg">
            Queremos que este proceso se sienta más claro, más emocionante y mucho
            menos abrumador. Por eso lo llevamos paso a paso.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.5rem] border border-[#eadfd4] bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f2dfd8] text-sm font-semibold tracking-[0.08em] text-[#8e6f66]">
                  {step.number}
                </div>

                <p className="text-[11px] uppercase tracking-[0.2em] text-[#b39a8d]">
                  Paso
                </p>
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-tight text-[#5a4a42]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#7b6a61] sm:text-[15px]">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#ead7d1] bg-[linear-gradient(180deg,#fff5f1,rgba(255,250,247,0.95))] p-5 shadow-sm sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#b88d87]">
            Lo importante
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-[#5a4a42]">
            No se trata de mostrarles demasiadas opciones.
          </h3>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#75645c] sm:text-base sm:leading-8">
            Se trata de ayudarlos a encontrar una boda destino que se vea hermosa,
            funcione bien para su grupo y los acerque a una decisión con mucha más
            claridad.
          </p>
        </div>
      </div>
    </section>
  );
}