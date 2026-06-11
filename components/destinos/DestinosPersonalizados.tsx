import TrackLink from "@/components/TrackLink";

const WA_LINK = "https://wa.me/5218716887385";

const STEPS = [
  { n: "01", label: "Nos cuentas", desc: "Destino, fechas aproximadas, cuántos son y el presupuesto que traen en mente." },
  { n: "02", label: "Diseñamos la ruta", desc: "Mapeamos la lógica de traslados, zonas ideales, hoteles y actividades — sin backtracking innecesario." },
  { n: "03", label: "Afinamos juntos", desc: "Ajustamos ritmo, estilo y detalles hasta que suene perfecto. Sin apuros." },
  { n: "04", label: "Todo queda en contrato", desc: "Todo lo que te vendemos queda firmado. Sabemos que eso vale." },
];

export default function DestinosPersonalizados() {
  return (
    <section id="personalizado" style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        {/* Top: editorial headline split */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

          {/* Left */}
          <div>
            <p className="text-eyebrow-accent mb-8">Tu destino, aunque no esté en la lista</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Cualquier</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>destino</span>
              <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.3 }}>del mundo.</span>
            </h2>

            <p className="mt-10 max-w-md" style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-brand-ink)", opacity: 0.6 }}>
              Flymingo no opera con catálogos fijos. Si puedes soñarlo, nosotros lo aterrizamos: ruta con lógica, hoteles que te queden, actividades reales y asistencia las 24 horas del viaje.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <TrackLink href={WA_LINK} className="btn btn-accent" label="Destinos — Pedir propuesta">
                Pedir propuesta por WhatsApp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </TrackLink>
              <a href="/nosotros" className="btn btn-ghost">

                Conocer Flymingo
              </a>
            </div>

            <p className="mt-5 text-caption">
              Tip: si ya tienes fechas, avanzamos mucho mas rapido.
            </p>
          </div>

          {/* Right: what to send us — brand voice card */}
          <div style={{ background: "var(--color-brand-surface)", borderRadius: "24px", padding: "3rem", border: "1px solid var(--color-brand-border)" }}>
            <p className="text-eyebrow-accent mb-8">Envianos esto por WhatsApp y en menos de 24 horas tienes una propuesta</p>

            <div className="space-y-0">
              {[
                { emoji: "🌍", label: "Destino o idea", hint: "aunque sea vaga" },
                { emoji: "📅", label: "Fechas aproximadas", hint: "o temporada del ano" },
                { emoji: "👥", label: "Numero de personas", hint: "pareja, familia, amigos" },
                { emoji: "💰", label: "Presupuesto estimado", hint: "por persona o total" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-5"
                  style={{ borderBottom: i < 3 ? "1px solid var(--color-brand-border)" : "none" }}
                >
                  <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{item.emoji}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em", color: "var(--color-brand-ink)", lineHeight: 1 }}>{item.label}</p>
                    <p className="text-caption mt-1">{item.hint}</p>
                  </div>
                </div>
              ))}
            </div>

            <TrackLink
              href={WA_LINK}
              className="mt-8 btn btn-accent w-full justify-center"
              label="Destinos — Escribir ahora"
            >
              Escribir ahora
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </TrackLink>
          </div>
        </div>

        {/* Process: editorial numbered list */}
        <div className="mt-28">
          <p className="text-eyebrow-accent mb-12">Como lo hacemos</p>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={i}
                className="py-8 md:py-0 md:px-8"
                style={{
                  borderLeft: i > 0 ? "1px solid var(--color-brand-border)" : "none",
                  borderTop: i > 0 ? undefined : undefined,
                }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.04em", lineHeight: 0.85, color: "var(--color-brand-accent)", opacity: 0.18 }}>
                  {s.n}
                </p>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "var(--color-brand-ink)", marginTop: "0.75rem", lineHeight: 1.1 }}>
                  {s.label}
                </p>
                <p className="text-caption mt-3">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
