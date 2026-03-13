const faqs = [
  {
    question: "¿Los invitados pagan su viaje?",
    answer:
      "Sí. En la mayoría de las bodas destino, cada invitado cubre su viaje y hospedaje. Lo importante es elegir una opción que funcione bien para el grupo y comunicarlo de forma clara desde el inicio.",
  },
  {
    question: "¿Los precios que veo aquí son por persona?",
    answer:
      "No. Los precios que mostramos en esta página corresponden al paquete de boda de los novios. El viaje y hospedaje de los invitados se cotiza por separado, según destino, fechas y tipo de habitación.",
  },
  {
    question: "¿Cuánto cuesta realmente una boda destino?",
    answer:
      "Depende del hotel, del tipo de ceremonia, de los extras que quieran agregar y del tamaño del grupo. Hay opciones más visuales, otras más premium y otras que ofrecen mejores beneficios conforme crece la reservación de invitados.",
  },
  {
    question: "¿Necesitamos tener fecha exacta para empezar?",
    answer:
      "No necesariamente. Si todavía no tienen fecha definida, podemos empezar por entender qué tipo de boda quieren, qué destino les atrae más y qué tan grande imaginan su grupo.",
  },
  {
    question: "¿Se puede pagar poco a poco?",
    answer:
      "Sí, en muchos casos se puede estructurar el proceso para que tanto la pareja como los invitados tengan mayor claridad sobre tiempos, anticipos y pagos. Eso depende del hotel, la fecha y las políticas del paquete elegido.",
  },
  {
    question: "¿Qué pasa si no sabemos qué hotel nos conviene?",
    answer:
      "Justo para eso existe Flymingo Weddings. La idea de esta página es ayudarlos a empezar por una colección curada de opciones que realmente valen la pena según el estilo de boda y la experiencia que quieren vivir.",
  },
  {
    question: "¿Primero conviene agendar llamada o ver opciones?",
    answer:
      "Lo ideal es llegar a la llamada con un poco más de claridad. Por eso esta página les ayuda a descubrir estilos, entender cómo funciona una boda destino y acercarse a opciones que sí hagan sentido para ustedes.",
  },
  {
    question: "¿Flymingo también ayuda con los invitados?",
    answer:
      "Sí. Esa es una parte muy importante de una boda destino. No se trata solo del evento, sino también de ayudar a que el grupo entienda mejor cómo viajar, dónde hospedarse y cómo aprovechar mejor la experiencia.",
  },
];

export default function WeddingsFaq() {
  return (
    <section className="border-b border-[#e9dfd2] bg-[#fcf8f2]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88d87]">
              Preguntas frecuentes
            </p>

            <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-[#5a4a42] sm:text-4xl lg:text-5xl">
              Hay muchas dudas que son completamente normales al empezar.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#75645c] sm:text-base sm:leading-8 lg:text-lg">
              Una boda destino emociona muchísimo, pero también trae preguntas
              importantes. Aquí te compartimos algunas de las más comunes para
              que todo empiece a sentirse más claro desde el principio.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[1.35rem] border border-[#eadfd4] bg-white p-4 shadow-sm sm:rounded-[1.5rem] sm:p-5"
              >
                <h3 className="text-lg font-semibold leading-7 text-[#5a4a42] sm:text-xl">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#7b6a61] sm:text-[15px] sm:leading-7">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}