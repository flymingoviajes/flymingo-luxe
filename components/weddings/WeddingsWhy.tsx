const PILLARS = [
  {
    n: "01",
    title: "Solo opciones que valen la pena",
    body: "No un catalogo eterno. Seleccionamos hoteles y paquetes que realmente destacan por experiencia, estetica y beneficios de grupo.",
  },
  {
    n: "02",
    title: "Te ayudamos a elegir con claridad",
    body: "Cada pareja busca algo distinto. Algunas priorizan lo visual, otras la logistica del grupo, otras el equilibrio entre precio y experiencia.",
  },
  {
    n: "03",
    title: "Pensamos tambien en tus invitados",
    body: "Una boda destino no es solo el evento. Coordinamos que tu grupo entienda como viajar, donde hospedarse y como aprovechar el plan.",
  },
  {
    n: "04",
    title: "Llegamos a una propuesta aterrizada",
    body: "Descubres opciones, respondes preguntas clave y llegas a una videollamada con mucha mas claridad sobre lo que realmente les conviene.",
  },
];

export default function WeddingsWhy() {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-end mb-20">
          <div>
            <p className="text-eyebrow-accent mb-8">Por que Flymingo Weddings</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Mas que</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>mostrarte hoteles.</span>
              <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.25 }}>Encontrar la boda correcta.</span>
            </h2>
          </div>

          <div style={{ paddingBottom: "0.25rem" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-brand-ink)", opacity: 0.6, maxWidth: "38rem" }}>
              Nuestra forma de trabajar combina curaduria, acompanamiento y una estrategia pensada tanto para la pareja como para sus invitados.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="py-10 sm:py-0 sm:px-8"
              style={{ borderLeft: i > 0 ? "1px solid var(--color-brand-border)" : "none" }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.04em", lineHeight: 0.85, color: "var(--color-brand-accent)", opacity: 0.15 }}>
                {p.n}
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em", color: "var(--color-brand-ink)", marginTop: "0.75rem", lineHeight: 1.1 }}>
                {p.title}
              </p>
              <p className="text-caption mt-3">{p.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
