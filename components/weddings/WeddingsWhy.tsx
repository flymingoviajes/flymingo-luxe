export default function WeddingsWhy() {
  const items = [
    {
      title: "Curamos opciones que sí valen la pena",
      text: "No vas a encontrar un catálogo eterno. Seleccionamos hoteles y paquetes que realmente destacan por experiencia, estética, beneficios de grupo y facilidad para invitados.",
    },
    {
      title: "Te ayudamos a elegir con más claridad",
      text: "Cada pareja busca algo distinto. Algunas priorizan una boda visualmente espectacular, otras una mejor logística para su grupo, y otras un equilibrio entre presupuesto, experiencia y beneficios.",
    },
    {
      title: "Pensamos también en tus invitados",
      text: "Una boda destino no se trata solo del evento. También importa que tus invitados entiendan cómo viajar, dónde hospedarse y cómo aprovechar mejor el plan del grupo.",
    },
    {
      title: "Todo avanza hacia una propuesta más aterrizada",
      text: "La idea es que puedas descubrir opciones, responder unas preguntas clave y llegar a una videollamada con mucha más claridad sobre lo que realmente les conviene.",
    },
  ];

  return (
    <section className="border-b border-[#e9dfd2] bg-[#fcf8f2]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.26em] text-[#b88d87]">
            Flymingo Weddings
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#5a4a42] md:text-5xl">
            Más que mostrarte hoteles, queremos ayudarte a encontrar la boda
            destino correcta para ustedes.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#75645c]">
            Por eso nuestra forma de trabajar combina curaduría, acompañamiento
            y una estrategia pensada tanto para la pareja como para sus
            invitados.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.7rem] border border-[#eadfd4] bg-white/85 p-6 shadow-sm"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-[#f2dfd8] text-lg text-[#8e6f66]">
                ✦
              </div>

              <h3 className="text-xl font-semibold text-[#5a4a42]">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-[#7b6a61]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}