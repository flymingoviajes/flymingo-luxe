import TrackLink from "@/components/TrackLink";

type Package = { name: string; price: string };
type Collection = {
  eyebrow: string;
  title: string;
  location: string;
  intro: string;
  bullets: string[];
  packages: Package[];
  badge: string;
  wa: string;
};

const collections: Collection[] = [
  {
    eyebrow: "Riviera Maya",
    title: "Xcaret Weddings",
    location: "Hotel Xcaret Mexico · Hotel Xcaret Arte",
    intro: "Para la pareja que quiere una experiencia completa — para ellos y para sus invitados.",
    bullets: [
      "Premium y muy aspiracional",
      "Gran hospitalidad para el grupo",
      "Ceremonia, cóctel y cena",
    ],
    packages: [
      { name: "Atardecer", price: "Desde $75,000 MXN" },
      { name: "Alux", price: "Desde $140,000 MXN" },
    ],
    badge: "Premium",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20cotizar%20Xcaret%20Weddings.",
  },
  {
    eyebrow: "Cancún",
    title: "AVA Resort Cancún",
    location: "AVA Cancun",
    intro: "Para la pareja que prioriza la estética, las fotos y una atmósfera visualmente impecable.",
    bullets: [
      "Chic, editorial y contemporáneo",
      "Paquetes con estilo muy definido",
      "Frente al mar, luz perfecta",
    ],
    packages: [
      { name: "Sunset", price: "$6,000 USD" },
      { name: "Willow", price: "$7,000 USD" },
      { name: "Golden", price: "$8,000 USD" },
    ],
    badge: "Visual & chic",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20cotizar%20AVA%20Cancun%20Weddings.",
  },
  {
    eyebrow: "Cancún",
    title: "Palace · Moon Palace",
    location: "Moon Palace Cancún · Palace Weddings",
    intro: "Para grupos grandes. La lógica de invitados y los beneficios por habitaciones son su fuerte.",
    bullets: [
      "Ideal para grupos numerosos",
      "Beneficios claros por reservación",
      "Estrategia sólida para invitados",
    ],
    packages: [
      { name: "Colección Complementaria", price: "Según mínimo de grupo" },
      { name: "Beneficios por Grupo", price: "Según habitaciones" },
    ],
    badge: "Ideal para grupos",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20cotizar%20Palace%20Weddings.",
  },
];

export default function WeddingsCollections() {
  return (
    <section id="colecciones" style={{ background: "var(--color-brand-surface)" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <p className="text-eyebrow-accent mb-6">Colección Flymingo Weddings</p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
              }}
            >
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>
                El venue que va
              </span>
              <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.28 }}>
                con ustedes.
              </span>
            </h2>
          </div>
          <p className="text-caption max-w-xs">
            Precios del paquete de boda de los novios. El viaje de los invitados se cotiza por separado.
          </p>
        </div>

        {/* Collection cards */}
        <div className="scroll-clip -mx-6 lg:mx-0">
          <div className="scroll-row gap-4 px-6 pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
            {collections.map((col) => (
              <article
                key={col.title}
                className="flex-none snap-start w-[88vw] lg:w-auto lg:max-w-none flex flex-col"
                style={{
                  background: "white",
                  borderRadius: "24px",
                  border: "1px solid var(--color-brand-border)",
                  overflow: "hidden",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    background: "var(--color-brand-surface)",
                    padding: "1.5rem 1.75rem",
                    borderBottom: "1px solid var(--color-brand-border)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-eyebrow-accent">{col.eyebrow}</p>
                    <span className="badge badge-accent" style={{ fontSize: "0.58rem" }}>{col.badge}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.45rem",
                      letterSpacing: "-0.03em",
                      color: "var(--color-brand-ink)",
                      lineHeight: 1.05,
                    }}
                  >
                    {col.title}
                  </h3>
                  <p className="text-caption mt-1">{col.location}</p>
                </div>

                {/* Card body */}
                <div style={{ padding: "1.5rem 1.75rem" }} className="flex flex-col flex-1">
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 300,
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      color: "var(--color-brand-ink)",
                      opacity: 0.6,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {col.intro}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-2 mb-6">
                    {col.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-3">
                        <span
                          style={{
                            height: "5px",
                            width: "5px",
                            borderRadius: "50%",
                            background: "var(--color-brand-accent)",
                            flexShrink: 0,
                          }}
                        />
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.82rem",
                            lineHeight: 1.5,
                            color: "var(--color-brand-ink)",
                            opacity: 0.65,
                          }}
                        >
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Packages — stripped down to name + price only */}
                  <div
                    style={{
                      borderTop: "1px solid var(--color-brand-border)",
                      paddingTop: "1.1rem",
                      marginBottom: "1.5rem",
                    }}
                    className="flex-1"
                  >
                    <p className="text-eyebrow-accent mb-3">Paquetes</p>
                    <div className="space-y-2">
                      {col.packages.map((pkg) => (
                        <div
                          key={pkg.name}
                          className="flex items-center justify-between gap-3"
                          style={{
                            padding: "0.65rem 0.9rem",
                            borderRadius: "10px",
                            border: "1px solid var(--color-brand-border)",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "var(--font-display)",
                              fontWeight: 700,
                              fontSize: "0.88rem",
                              letterSpacing: "-0.02em",
                              color: "var(--color-brand-ink)",
                            }}
                          >
                            {pkg.name}
                          </p>
                          <span className="badge badge-accent" style={{ fontSize: "0.56rem", whiteSpace: "nowrap" }}>
                            {pkg.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <TrackLink
                    href={col.wa}
                    className="btn btn-accent w-full justify-center"
                    label={`Weddings — Cotizar ${col.title}`}
                  >
                    Cotizar esta colección
                    <svg
                      width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </TrackLink>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
