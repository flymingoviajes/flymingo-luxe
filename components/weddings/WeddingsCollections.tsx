import TrackLink from "@/components/TrackLink";

type Package = { name: string; price: string; text: string };
type Collection = {
  eyebrow: string; title: string; location: string;
  intro: string; fit: string; bullets: string[];
  packages: Package[]; badge: string; wa: string;
};

const collections: Collection[] = [
  {
    eyebrow: "Riviera Maya",
    title: "Xcaret Weddings",
    location: "Hotel Xcaret Mexico · Hotel Xcaret Arte",
    intro: "Para parejas que quieren una boda destino que se sienta como una experiencia completa para ustedes y sus invitados.",
    fit: "Ideal si suenan con algo premium, memorable y con una propuesta muy fuerte en hospitalidad, gastronomia y experiencia.",
    bullets: [
      "Experiencia premium y muy aspiracional",
      "Gran valor para invitados que quieren vivir mas que el evento",
      "Perfecto para parejas que quieren algo especial desde el inicio",
    ],
    packages: [
      { name: "Atardecer", price: "Desde $75,000 MXN", text: "Ceremonia, coctel, cena y beneficios especiales para la pareja." },
      { name: "Alux", price: "Desde $140,000 MXN", text: "Celebracion mas estructurada, elegante y con mayor presencia." },
    ],
    badge: "Premium experience",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20cotizar%20Xcaret%20Weddings.",
  },
  {
    eyebrow: "Cancun",
    title: "AVA Resort Cancun",
    location: "AVA Cancun",
    intro: "Para parejas que quieren una boda moderna, elegante y visualmente hermosa desde el primer vistazo.",
    fit: "Ideal si la estetica, la atmosfera y las fotos son parte fundamental de como imaginan su gran dia.",
    bullets: [
      "Coleccion visual, chic y contemporanea",
      "Paquetes con estilos muy definidos",
      "Excelente para parejas que quieren una boda editorial",
    ],
    packages: [
      { name: "Sunset", price: "$6,000 USD", text: "Propuesta luminosa, romantica y fresca, perfecta para una boda muy bien presentada." },
      { name: "Willow", price: "$7,000 USD", text: "Estetica organica y elegante con una opcion calida y sofisticada frente al mar." },
      { name: "Golden", price: "$8,000 USD", text: "La version mas editorial y glamorosa para una boda con gran presencia visual." },
    ],
    badge: "Visual & chic",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20cotizar%20AVA%20Cancun%20Weddings.",
  },
  {
    eyebrow: "Cancun",
    title: "Palace / Moon Palace",
    location: "Moon Palace Cancun · Palace Weddings",
    intro: "Para parejas que quieren una boda hermosa, pero tambien una mejor estrategia para sus invitados.",
    fit: "Ideal si el tamano del grupo, las habitaciones y los beneficios por reservacion son parte importante de su decision.",
    bullets: [
      "Muy fuerte para grupos y logistica",
      "Beneficios claros segun habitaciones reservadas",
      "Gran apoyo para parejas con muchos invitados",
    ],
    packages: [
      { name: "Coleccion Complementaria", price: "Segun minimo de grupo", text: "Ceremonia, cena semi privada y beneficios para la pareja al cumplir los minimos." },
      { name: "Beneficios por Grupo", price: "Segun habitaciones", text: "Mientras mas grande el grupo, mayores las ventajas para los novios." },
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end mb-12">
          <div>
            <p className="text-eyebrow-accent mb-8">Coleccion Flymingo Weddings</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Empiecen por</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>la coleccion</span>
              <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.25 }}>que va con ustedes.</span>
            </h2>
          </div>

          {/* Nota de precios */}
          <div style={{ background: "white", borderRadius: "16px", border: "1px solid var(--color-brand-border)", padding: "1.5rem" }}>
            <p className="text-eyebrow-accent mb-2">Importante</p>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-brand-ink)", opacity: 0.65 }}>
              Los precios mostrados corresponden al <strong style={{ fontWeight: 600, opacity: 1 }}>paquete de boda de los novios</strong>. El viaje y hospedaje de los invitados se cotiza por separado.
            </p>
          </div>
        </div>

        {/* Collection cards — horizontal scroll on mobile */}
        <div className="scroll-row gap-4 -mx-6 px-6 pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">
          {collections.map((col) => (
            <article
              key={col.title}
              className="w-[88vw] max-w-sm lg:w-auto"
              style={{ background: "white", borderRadius: "24px", border: "1px solid var(--color-brand-border)", overflow: "hidden", flexShrink: 0 }}
            >
              {/* Card header */}
              <div style={{ background: "var(--color-brand-surface)", padding: "1.75rem 1.75rem 1.5rem", borderBottom: "1px solid var(--color-brand-border)" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-eyebrow-accent">{col.eyebrow}</p>
                  <span className="badge badge-accent" style={{ fontSize: "0.6rem" }}>{col.badge}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.03em", color: "var(--color-brand-ink)", lineHeight: 1.1 }}>
                  {col.title}
                </h3>
                <p className="text-caption mt-1">{col.location}</p>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.75rem" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.7, color: "var(--color-brand-ink)", opacity: 0.65, marginBottom: "1.25rem" }}>
                  {col.intro}
                </p>

                {/* Fit note */}
                <div style={{ background: "var(--color-brand-surface)", borderRadius: "12px", padding: "0.85rem 1rem", marginBottom: "1.25rem" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "0.82rem", lineHeight: 1.6, color: "var(--color-brand-ink)" }}>
                    {col.fit}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  {col.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <span style={{ height: "6px", width: "6px", borderRadius: "50%", background: "var(--color-brand-accent)", marginTop: "6px", flexShrink: 0 }} />
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.83rem", lineHeight: 1.6, color: "var(--color-brand-ink)", opacity: 0.6 }}>{b}</p>
                    </div>
                  ))}
                </div>

                {/* Packages */}
                <div style={{ borderTop: "1px solid var(--color-brand-border)", paddingTop: "1.25rem", marginBottom: "1.5rem" }}>
                  <p className="text-eyebrow-accent mb-4">Paquetes destacados</p>
                  <div className="space-y-3">
                    {col.packages.map((pkg) => (
                      <div
                        key={pkg.name}
                        style={{ borderRadius: "12px", border: "1px solid var(--color-brand-border)", padding: "1rem" }}
                      >
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "-0.02em", color: "var(--color-brand-ink)", lineHeight: 1.2 }}>
                            {pkg.name}
                          </p>
                          <span className="badge badge-accent" style={{ fontSize: "0.58rem", whiteSpace: "nowrap" }}>{pkg.price}</span>
                        </div>
                        <p className="text-caption">{pkg.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <TrackLink
                  href={col.wa}
                  className="btn btn-accent w-full justify-center"
                  label={`Weddings — Cotizar ${col.title}`}
                >
                  Cotizar esta coleccion
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </TrackLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
