const FEATURES = [
  {
    title: "Tu ruta, no la de todos",
    desc: "Partimos de tus fechas, tu estilo, tu presupuesto. No al revés.",
  },
  {
    title: "Rutas con lógica real",
    desc: "Sin regresos innecesarios, sin días agotadores. Cada zona elegida con intención.",
  },
  {
    title: "Acompañamiento de verdad",
    desc: "Antes, durante y después. Una persona real — no un chatbot.",
  },
];

const FS = "clamp(3.5rem, 9.5vw, 9rem)";

export default function HomeValueProps() {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-12 lg:pt-48 lg:pb-36">

        <p className="text-eyebrow-accent mb-14">Por qué Flymingo</p>

        {/* Editorial headline — dramatic weight contrast */}
        <div style={{ fontFamily: "var(--font-display)", fontSize: FS, letterSpacing: "-0.04em", lineHeight: 0.9 }}>
          <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.35 }}>No vendemos</span>
          <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>destinos.</span>
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Diseñamos</span>
          <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.25 }}>los tuyos.</span>
        </div>

        <hr className="divider mt-20 mb-16" />

        {/* Features — clean horizontal, no boxes */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-brand-border">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="md:px-10 first:pl-0 last:pr-0">
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--color-brand-accent)",
                  marginBottom: "1rem",
                }}
              >
                0{i + 1}
              </p>
              <h4 style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                {f.title}
              </h4>
              <p className="mt-3 text-sm font-light leading-relaxed" style={{ color: "var(--color-brand-dim)" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
