import TrackLink from "@/components/TrackLink";

const WA_LINK = "https://wa.me/5218716887385";

const STATS = [
  { value: "200+", label: "Itinerarios diseñados" },
  { value: "15+", label: "Destinos" },
  { value: "4.9", label: "Google Reviews" },
  { value: "100%", label: "Personalizados" },
];

const STEPS = [
  {
    num: "01",
    title: "Cuéntanos tu idea",
    desc: "Fechas aproximadas, estilo de viaje, destino soñado y presupuesto. Solo eso basta para arrancar.",
    cta: "Escribir por WhatsApp",
    href: WA_LINK,
    external: true,
  },
  {
    num: "02",
    title: "Diseñamos tu ruta",
    desc: "Armamos un itinerario a medida: ruta con lógica, hoteles, tours y ritmo. Ajustamos hasta que se sienta perfecto.",
  },
  {
    num: "03",
    title: "Viaja sin preocupaciones",
    desc: "Todo confirmado y listo. Acompañamiento antes, durante y después del viaje.",
  },
];

const STAT_FS = "clamp(3.5rem, 7vw, 7rem)";

export default function HomeBeforeAfter() {
  return (
    <section style={{ background: "var(--color-brand-canvas)" }}>
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-12 lg:pt-44 lg:pb-36">

        {/* Stats — monumental numbers, no boxes */}
        <div className="grid grid-cols-2 gap-0 md:grid-cols-4 md:divide-x md:divide-brand-border">
          {STATS.map((s, i) => (
            <div key={s.label} className="flex flex-col gap-3 py-8 md:py-0 md:px-12" style={{ paddingLeft: i === 0 ? 0 : undefined }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: STAT_FS,
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  color: "var(--color-brand-ink)",
                }}
              >
                {s.value}
              </span>
              <span className="text-caption uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>

        <hr className="divider mt-20 mb-20" />

        {/* Process — two-column editorial */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr] lg:items-start">

          {/* Left — big dramatic heading */}
          <div className="lg:sticky lg:top-28">
            <p className="text-eyebrow-accent mb-10">Cómo funciona</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Tres pasos.</span>
              <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.25 }}>Tu viaje listo.</span>
            </h2>
            <p className="mt-9 text-sm font-light leading-loose max-w-xs" style={{ color: "var(--color-brand-dim)" }}>
              Sin formularios. Sin burocracia. Empezamos con una conversación y desde ahí construimos todo.
            </p>
          </div>

          {/* Right — editorial list, zero boxes */}
          <div>
            {STEPS.map((step) => (
              <div key={step.num}>
                <hr className="divider" />
                <div className="grid grid-cols-[3.5rem_1fr] gap-6 py-10">
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 600,
                      fontSize: "0.6rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-brand-accent)",
                      paddingTop: "0.15rem",
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h4 style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                      {step.title}
                    </h4>
                    <p className="mt-4 text-sm font-light leading-relaxed" style={{ color: "var(--color-brand-dim)" }}>
                      {step.desc}
                    </p>
                    {"cta" in step && step.cta && step.href && (
                      <TrackLink
                        href={step.href}
                        target={step.external ? "_blank" : undefined}
                        rel={step.external ? "noreferrer" : undefined}
                        className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-50"
                        style={{ color: "var(--color-brand-ink)" }}
                        label="Como funciona — Escribir por WhatsApp"
                      >
                        {step.cta}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </TrackLink>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <hr className="divider" />
          </div>

        </div>
      </div>
    </section>
  );
}
