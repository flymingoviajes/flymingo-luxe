import Link from "next/link";
import TrackLink from "@/components/TrackLink";

const WA = "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20agendar%20una%20llamada%20para%20mi%20boda%20destino.";

export default function WeddingsCTA() {
  return (
    <section style={{ background: "white", borderTop: "1px solid var(--color-brand-border)" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-end">

          {/* Left: headline */}
          <div>
            <p className="text-eyebrow-accent mb-8">El siguiente paso</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6.5vw, 6rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}>
              <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.25 }}>Una boda</span>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>que se sienta</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>como ustedes.</span>
            </h2>

            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, color: "var(--color-brand-ink)", opacity: 0.6, maxWidth: "34rem", marginTop: "1.5rem" }}>
              Descubran una coleccion pensada para elegir mejor, entender como funciona una boda destino y acercarse a una propuesta que de verdad se sienta como ustedes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <TrackLink href={WA} className="btn btn-accent" label="Weddings CTA — Agendar llamada">
                Agendar videollamada
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </TrackLink>
              <Link href="#colecciones" className="btn btn-ghost">
                Ver colecciones
              </Link>
            </div>

            <p className="mt-5 text-caption">Sin compromiso · Respuesta en menos de 24 h · Atencion 1 a 1</p>
          </div>

          {/* Right: stats */}
          <div>
            <div className="space-y-0">
              {[
                { stat: "Xcaret · AVA", label: "nuestros venues favoritos" },
                { stat: "Hard Rock · Palace", label: "opciones premium para grupos" },
                { stat: "Contrato", label: "todo queda por escrito" },
                { stat: "24/7", label: "asistencia durante tu boda" },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between py-5"
                  style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--color-brand-border)" : "none" }}
                >
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "-0.04em", color: "var(--color-brand-ink)", lineHeight: 1 }}>
                    {item.stat}
                  </p>
                  <p className="text-caption text-right">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
