import TrackLink from "@/components/TrackLink";

const whatsappLink = "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20informes%20de%20Flymingo%20Women.";

export default function WomenCTA() {
  return (
    <section style={{ background: "var(--color-brand-surface)", borderTop: "1px solid var(--color-brand-border)" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-end">

          {/* Left: headline */}
          <div>
            <p className="text-eyebrow-accent mb-8">Empieza aqui</p>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6.5vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}>
              <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.25 }}>Viajes que</span>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>se viven distinto</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>en compania.</span>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <TrackLink href={whatsappLink} className="btn btn-accent" label="Women CTA — Quiero informes">
                Quiero informes por WhatsApp
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </TrackLink>
              <a href="#islandia" className="btn btn-ghost">
                Ver Islandia
              </a>
            </div>
          </div>

          {/* Right: social proof + note */}
          <div style={{ paddingBottom: "0.5rem" }}>
            <div className="space-y-0">
              {[
                { stat: "2 destinos", label: "activos ahora mismo" },
                { stat: "Islandia + NY", label: "salidas nov 2026" },
                { stat: "24/7", label: "asistencia durante tu viaje" },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between py-5"
                  style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--color-brand-border)" : "none" }}
                >
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", letterSpacing: "-0.04em", color: "var(--color-brand-ink)", lineHeight: 1 }}>
                    {item.stat}
                  </p>
                  <p className="text-caption">{item.label}</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: "2rem", fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.8rem", color: "var(--color-brand-dim)", lineHeight: 1.6 }}>
              Islandia y Nueva York son solo el comienzo.{" "}
              <strong style={{ fontWeight: 600, color: "var(--color-brand-ink)" }}>Muy pronto, nuevas experiencias y destinos.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
