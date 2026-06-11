import Image from "next/image";
import TrackLink from "@/components/TrackLink";

const incluye = [
  { emoji: "✈️", label: "Vuelo redondo directo", sub: "MEX–JFK · Aeromexico / Delta" },
  { emoji: "🏨", label: "Holiday Inn NYC", sub: "Lower East Side · desayuno incluido" },
  { emoji: "🗽", label: "New York CityPASS", sub: "Empire State + 4 atracciones" },
  { emoji: "🧭", label: "Asesoria Flymingo", sub: "Acompanamiento experto" },
];

const itinerario = [
  { dia: "01", titulo: "Llegada a Nueva York", desc: "Vuelo MEX–JFK. Tarde libre para comenzar a respirar la ciudad." },
  { dia: "02", titulo: "Primer encuentro con Manhattan", desc: "Times Square, Quinta Avenida y CityPASS activo." },
  { dia: "03", titulo: "Miradores y museos", desc: "Empire State, Historia Natural y Central Park." },
  { dia: "04", titulo: "Estatua de la Libertad", desc: "Tu eleccion de atracciones adicionales del CityPASS." },
  { dia: "05", titulo: "Dia libre", desc: "SoHo, Brooklyn, High Line o lo que mas te llame." },
  { dia: "06", titulo: "Regreso a Mexico", desc: "Vuelo JFK–MEX. Salida 08:40 · Llegada 13:00." },
];

const whatsapp = "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20informes%20del%20viaje%20Nueva%20York%20entre%20Amigas.";
const brochureUrl = "/docs/NUEVA-YORK-ENTRE-AMIGAS.pdf";

export default function WomenNYCSection() {
  return (
    <section id="nueva-york" style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        {/* Header */}
        <p className="text-eyebrow-accent mb-10">Flymingo Women · Nueva York</p>

        <div className="grid items-start gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* ── Columna izquierda ── */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 7vw, 6.5rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Nueva York</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-green)" }}>entre Amigas.</span>
            </div>

            <p className="text-eyebrow-accent mt-5 mb-8">03 — 08 nov 2026</p>

            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-brand-ink)", opacity: 0.6, maxWidth: "36rem", marginBottom: "2.5rem" }}>
              La Gran Manzana en compania — vuelo directo desde CDMX, hotel centrico, CityPASS incluido y toda la energia de Nueva York para disfrutar entre amigas.
            </p>

            {/* Que incluye */}
            <p className="text-eyebrow-accent mb-4">Tu viaje incluye</p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {incluye.map((item) => (
                <div
                  key={item.label}
                  style={{ borderRadius: "16px", border: "1px solid var(--color-brand-border)", background: "var(--color-brand-surface)", padding: "1rem 1.25rem" }}
                >
                  <span style={{ fontSize: "1.3rem", display: "block", marginBottom: "0.5rem" }}>{item.emoji}</span>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "-0.01em", color: "var(--color-brand-ink)", lineHeight: 1.2 }}>
                    {item.label}
                  </p>
                  <p className="text-caption mt-1">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Precio */}
            <div className="flex gap-10 pb-6" style={{ borderBottom: "1px solid var(--color-brand-border)", marginBottom: "1.5rem" }}>
              <div>
                <p className="text-eyebrow-accent mb-1">Precio</p>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.5rem", letterSpacing: "-0.04em", color: "var(--color-brand-ink)", lineHeight: 1 }}>
                  $49,890
                </p>
                <p className="text-caption mt-1">MXN / persona doble</p>
              </div>
              <div style={{ width: "1px", background: "var(--color-brand-border)" }} />
              <div>
                <p className="text-eyebrow-accent mb-1">Apartado</p>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.5rem", letterSpacing: "-0.04em", color: "var(--color-brand-green)", lineHeight: 1 }}>
                  $5,000
                </p>
                <p className="text-caption mt-1">MXN · asegura tu lugar</p>
              </div>
            </div>

            {/* Formas de pago */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Transferencia bancaria", "Tarjeta de credito o debito", "6 MSI con cualquier tarjeta"].map((p) => (
                <span
                  key={p}
                  className="badge badge-surface"
                  style={{ fontSize: "0.68rem" }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <TrackLink href={whatsapp} className="btn btn-accent" label="Women NY — Pedir informes">
                Pedir informes
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </TrackLink>
              <a href={brochureUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Descargar brochure
              </a>
            </div>
          </div>

          {/* ── Columna derecha — imagen + itinerario ── */}
          <div className="space-y-4 lg:sticky lg:top-10">
            <div className="relative overflow-hidden" style={{ borderRadius: "24px", aspectRatio: "3/4" }}>
              <Image
                src="/images/nyc/hero.jpg"
                alt="Nueva York entre Amigas — Flymingo Women"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="badge badge-green" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <span>✈</span> Vuelo directo MEX–JFK
                </span>
              </div>
            </div>

            {/* Itinerario */}
            <div style={{ borderRadius: "20px", border: "1px solid var(--color-brand-border)", background: "var(--color-brand-surface)", padding: "1.5rem" }}>
              <p className="text-eyebrow-accent mb-5">Itinerario · 6 dias</p>
              <div className="space-y-0">
                {itinerario.map((item, i) => (
                  <div
                    key={item.dia}
                    className="flex gap-4 py-3"
                    style={{ borderBottom: i < itinerario.length - 1 ? "1px solid var(--color-brand-border)" : "none" }}
                  >
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em", color: "var(--color-brand-accent)", opacity: 0.4, minWidth: "1.5rem", lineHeight: 1.3 }}>
                      {item.dia}
                    </p>
                    <div>
                      <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "-0.01em", color: "var(--color-brand-ink)", lineHeight: 1.2 }}>
                        {item.titulo}
                      </p>
                      <p className="text-caption mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-caption mt-4 italic" style={{ opacity: 0.5 }}>
                Itinerario sugerido, sujeto a ajustes operativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
