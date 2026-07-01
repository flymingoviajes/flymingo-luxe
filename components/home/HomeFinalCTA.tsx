import Link from "next/link";
import TrackLink from "@/components/TrackLink";

const WA_LINK = "https://wa.me/5218716887385";
const FS = "clamp(3.2rem, 8vw, 8rem)";

const TRUST_ITEMS = [
  { value: "200+", label: "Viajeros satisfechos" },
  { value: "4.9★", label: "Google Reviews" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export default function HomeFinalCta() {
  return (
    <section style={{ background: "white", borderTop: "1px solid var(--color-brand-border)" }}>
      <div className="mx-auto max-w-7xl px-6 py-36 lg:px-12 lg:py-52">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">

          {/* Left — editorial headline + primary CTA */}
          <div>
            <p className="text-eyebrow-accent mb-12">Empecemos</p>

            <div style={{ fontFamily: "var(--font-display)", fontSize: FS, letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.3 }}>Tu próximo</span>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>viaje</span>
              <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.3 }}>empieza</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>aquí.</span>
            </div>

            <p className="mt-12 max-w-sm text-sm font-light leading-loose" style={{ color: "var(--color-brand-dim)" }}>
              Cuéntanos tu idea — destino, fechas y cómo quieres viajar. Te diseñamos el itinerario perfecto.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <TrackLink href={WA_LINK} className="btn btn-accent" label="Final CTA — Disenar mi viaje">
                Diseñar mi viaje por WhatsApp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </TrackLink>
              <Link href="/destinos" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-50" style={{ color: "var(--color-brand-dim)" }}>
                Ver destinos
              </Link>
            </div>

            <p className="mt-7 text-caption tracking-wide">
              Sin compromiso · Respuesta en menos de 24 h · Atención 1 a 1
            </p>
          </div>

          {/* Right — social proof + trust, closes hesitation */}
          <div className="flex flex-col gap-8 lg:pb-4">

            {/* Stats grid */}
            <div
              style={{
                border: "1px solid var(--color-brand-border)",
                borderRadius: "20px",
                padding: "2rem",
                background: "var(--color-brand-surface)",
              }}
            >
              <div className="grid grid-cols-3 divide-x divide-brand-border">
                {TRUST_ITEMS.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 px-4 first:pl-0 last:pr-0 items-center text-center">
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        letterSpacing: "-0.035em",
                        color: "var(--color-brand-ink)",
                        lineHeight: 1,
                      }}
                    >
                      {item.value}
                    </span>
                    <span className="text-caption text-center leading-tight mt-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial pull-quote */}
            <div style={{ paddingLeft: "1.5rem", borderLeft: "2px solid var(--color-brand-accent)" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.65,
                  color: "var(--color-brand-ink)",
                }}
              >
                "Fue el mejor viaje de nuestras vidas. Cada detalle estaba pensado — solo disfrutamos."
              </p>
              <p className="text-caption mt-3">Sofía M. · Grupo de amigas · Europa</p>
            </div>

            {/* Urgency — Women next trip */}
            <div
              style={{
                background: "rgba(255,45,120,0.04)",
                border: "1px solid rgba(255,45,120,0.15)",
                borderRadius: "14px",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--color-brand-neon)",
                  flexShrink: 0,
                  boxShadow: "0 0 8px rgba(255,45,120,0.5)",
                }}
              />
              <p className="text-sm font-light" style={{ color: "var(--color-brand-dim)" }}>
                <strong style={{ color: "var(--color-brand-neon)", fontWeight: 700 }}>Flymingo Women</strong>
                {" "}— Islandia Nov 2026 · Lugares limitados · desde $84,890 MXN
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
