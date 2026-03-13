export default function WeddingsCoupleVsGuests() {
  const coupleItems = [
    "El paquete de boda del hotel",
    "Extras como decoración, fotografía, música o ambientación especial",
    "Algunos beneficios pueden mejorar según el tamaño del grupo",
    "La mejor estrategia depende del hotel, la fecha y el número de habitaciones",
  ];

  const guestItems = [
    "Cada invitado normalmente cubre su viaje y hospedaje",
    "El costo depende del destino, hotel, fechas y tipo de habitación",
    "En ciertos hoteles, el tamaño del grupo puede generar beneficios para la pareja",
    "Flymingo ayuda a organizar opciones, pagos y seguimiento del grupo",
  ];

  return (
    <section className="border-b border-[#e9dfd2] bg-[#fcf8f2]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88d87]">
            Cómo funciona
          </p>

          <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-[#5a4a42] sm:text-4xl lg:text-5xl">
            En una boda destino, los novios y los invitados no pagan lo mismo.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#75645c] sm:text-base sm:leading-8 lg:text-lg">
            Entender esto desde el inicio ayuda muchísimo a tomar mejores
            decisiones. Por eso en Flymingo Weddings les ayudamos a aterrizar
            qué corresponde al evento, qué corresponde al viaje y cómo organizar
            mejor todo el grupo.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[1.5rem] border border-[#ead7d1] bg-[linear-gradient(180deg,#fff4ef,rgba(255,250,247,0.95))] p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f2dfd8] text-[#8e6f66]">
                ✦
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#b88d87]">
                  Novios
                </p>
                <h3 className="text-2xl font-semibold text-[#5a4a42]">
                  Lo que normalmente paga la pareja
                </h3>
              </div>
            </div>

            <div className="mt-4 rounded-[1.2rem] border border-[#ecd9d1] bg-white/75 p-4">
              <p className="text-sm leading-6 text-[#755f56]">
                Aquí entra principalmente el{" "}
                <span className="font-semibold text-[#5a4a42]">
                  paquete de boda de los novios
                </span>
                , además de los extras que quieran agregar para personalizar su
                celebración.
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {coupleItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#f0e1d8] bg-white/85 px-4 py-3 text-sm leading-6 text-[#7b6a61]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.5rem] border border-[#eadfd4] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f5ece4] text-[#9f7d70]">
                ✈
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#b29c8f]">
                  Invitados
                </p>
                <h3 className="text-2xl font-semibold text-[#5a4a42]">
                  Lo que normalmente paga el grupo
                </h3>
              </div>
            </div>

            <div className="mt-4 rounded-[1.2rem] border border-[#efe5db] bg-[#fffaf7] p-4">
              <p className="text-sm leading-6 text-[#755f56]">
                En la mayoría de las bodas destino,{" "}
                <span className="font-semibold text-[#5a4a42]">
                  cada invitado cubre su viaje y hospedaje
                </span>
                . Lo importante es organizar bien el grupo y elegir una opción
                que funcione para todos.
              </p>
            </div>

            <div className="mt-4 space-y-2.5">
              {guestItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#f0e7de] bg-[#fffdfb] px-4 py-3 text-sm leading-6 text-[#7b6a61]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#eadfd4] bg-white p-5 shadow-sm sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#b39a8d]">
            Lo que hace Flymingo Weddings
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-[#5a4a42]">
            Les ayudamos a que todo esto tenga sentido desde el principio.
          </h3>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#75645c] sm:text-base sm:leading-8">
            No se trata solo de escoger un hotel bonito. Se trata de entender qué
            opción les conviene más como pareja, cómo se va a mover el grupo, qué
            beneficios pueden aprovechar y cuál es la mejor forma de avanzar hacia
            una propuesta o una videollamada más aterrizada.
          </p>
        </div>
      </div>
    </section>
  );
}