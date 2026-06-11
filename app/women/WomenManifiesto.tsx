const PILLARS = [
  { n: "01", title: "Solo mujeres", body: "El grupo importa tanto como el destino. Creamos un ambiente donde puedes llegar sola y regresar con amigas." },
  { n: "02", title: "Seguros y cuidados", body: "Desde la logistica hasta el hotel, todo esta pensado para que te sientas comoda, segura y libre." },
  { n: "03", title: "Acompanamiento real", body: "Flymingo esta contigo antes, durante y despues. Whatsapp, itinerario diario, asistencia 24/7." },
  { n: "04", title: "Momentos que duran", body: "No vendemos boletos. Disenamos la experiencia completa para que cuando regreses, la quieras repetir." },
];

export default function WomenManifiesto() {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        {/* Top: headline + intro */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-end mb-20">
          <div>
            <p className="text-eyebrow-accent mb-8">Por que Flymingo Women</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>No son</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>solo viajes.</span>
              <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.25 }}>Es una comunidad.</span>
            </h2>
          </div>

          <div style={{ paddingBottom: "0.25rem" }}>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-brand-ink)", opacity: 0.6, maxWidth: "38rem" }}>
              Flymingo Women nace para crear viajes entre mujeres que se sientan emocionantes, bonitos, seguros y memorables. Aqui el destino importa, si, pero tambien importa como te sientes durante el viaje: acompanada, inspirada y rodeada de mujeres que tambien decidieron darse esta oportunidad.
            </p>
          </div>
        </div>

        {/* Pillars: editorial 4-col */}
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
