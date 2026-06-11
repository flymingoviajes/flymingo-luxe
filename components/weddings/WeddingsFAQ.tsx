const faqs = [
  {
    question: "Los invitados pagan su viaje?",
    answer: "Si. En la mayoria de las bodas destino, cada invitado cubre su viaje y hospedaje. Lo importante es elegir una opcion que funcione bien para el grupo y comunicarlo con claridad desde el inicio.",
  },
  {
    question: "Los precios que veo aqui son por persona?",
    answer: "No. Los precios que mostramos corresponden al paquete de boda de los novios. El viaje y hospedaje de los invitados se cotiza por separado, segun destino, fechas y tipo de habitacion.",
  },
  {
    question: "Cuanto cuesta realmente una boda destino?",
    answer: "Depende del hotel, el tipo de ceremonia, los extras y el tamano del grupo. Hay opciones mas visuales, otras mas premium y otras que ofrecen mejores beneficios conforme crece la reservacion del grupo.",
  },
  {
    question: "Necesitamos tener fecha exacta para empezar?",
    answer: "No necesariamente. Podemos empezar por entender que tipo de boda quieren, que destino les atrae mas y que tan grande imaginan su grupo.",
  },
  {
    question: "Se puede pagar poco a poco?",
    answer: "Si, en muchos casos se puede estructurar el proceso para que tanto la pareja como los invitados tengan claridad sobre tiempos, anticipos y pagos. Depende del hotel y las politicas del paquete elegido.",
  },
  {
    question: "Que pasa si no sabemos que hotel nos conviene?",
    answer: "Justo para eso existe Flymingo Weddings. La idea es ayudarlos a empezar por una coleccion curada de opciones que realmente valen la pena segun el estilo de boda y la experiencia que quieren vivir.",
  },
  {
    question: "Flymingo tambien ayuda con los invitados?",
    answer: "Si, esa es una parte muy importante. Coordinamos que el grupo entienda como viajar, donde hospedarse y como aprovechar mejor la experiencia. No solo el evento.",
  },
  {
    question: "Primero conviene agendar llamada o ver opciones?",
    answer: "Lo ideal es llegar a la llamada con un poco mas de claridad. Por eso esta pagina les ayuda a descubrir estilos, entender como funciona una boda destino y acercarse a opciones que si hagan sentido para ustedes.",
  },
];

export default function WeddingsFaq() {
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section style={{ background: "var(--color-brand-surface)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="text-eyebrow-accent mb-8">Preguntas frecuentes</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4.5vw, 4rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Dudas que</span>
              <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.3 }}>son completamente</span>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-accent)" }}>normales.</span>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-brand-ink)", opacity: 0.55, maxWidth: "28rem", marginTop: "1.5rem" }}>
              Una boda destino emociona mucho, pero tambien trae preguntas importantes. Aqui aclaramos las mas comunes.
            </p>
          </div>

          {/* Right: FAQ list */}
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="py-6"
                style={{ borderBottom: "1px solid var(--color-brand-border)" }}
              >
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em", color: "var(--color-brand-ink)", lineHeight: 1.2, marginBottom: "0.6rem" }}>
                  {faq.question}
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-brand-ink)", opacity: 0.6 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
