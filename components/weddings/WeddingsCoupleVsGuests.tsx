const coupleItems = [
  "El paquete de boda del hotel",
  "Extras como decoracion, fotografia, musica o ambientacion especial",
  "Algunos beneficios mejoran segun el tamano del grupo",
  "La mejor estrategia depende del hotel, fecha y numero de habitaciones",
];

const guestItems = [
  "Cada invitado normalmente cubre su viaje y hospedaje",
  "El costo depende del destino, hotel, fechas y tipo de habitacion",
  "El tamano del grupo puede generar beneficios adicionales para la pareja",
  "Flymingo ayuda a organizar opciones, pagos y seguimiento del grupo",
];

export default function WeddingsCoupleVsGuests() {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        {/* Header */}
        <div className="mb-16">
          <p className="text-eyebrow-accent mb-8">Como funciona</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.9, maxWidth: "22ch" }}>
            <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Novios e invitados</span>
            <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.25 }}>no pagan lo mismo.</span>
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-brand-ink)", opacity: 0.6, maxWidth: "44rem", marginTop: "1.5rem" }}>
            Entender esto desde el inicio ayuda a tomar mejores decisiones. Por eso en Flymingo Weddings les ayudamos a aterrizar que corresponde al evento, que corresponde al viaje y como organizar mejor el grupo.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Novios */}
          <div style={{ borderRight: "1px solid var(--color-brand-border)", paddingRight: "4rem" }} className="pb-12 lg:pb-0">
            <p className="text-eyebrow-accent mb-6">Novios</p>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.025em", color: "var(--color-brand-ink)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Lo que normalmente paga la pareja
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-brand-ink)", opacity: 0.6, marginBottom: "1.5rem" }}>
              Aqui entra principalmente el <strong style={{ fontWeight: 600, opacity: 1 }}>paquete de boda de los novios</strong>, ademas de los extras para personalizar la celebracion.
            </p>
            <div className="space-y-0">
              {coupleItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4"
                  style={{ borderBottom: i < coupleItems.length - 1 ? "1px solid var(--color-brand-border)" : "none" }}
                >
                  <span style={{ height: "6px", width: "6px", borderRadius: "50%", background: "var(--color-brand-accent)", marginTop: "6px", flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.6, color: "var(--color-brand-ink)", opacity: 0.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Invitados */}
          <div style={{ paddingLeft: "4rem" }} className="pt-12 lg:pt-0">
            <p className="text-eyebrow-accent mb-6">Invitados</p>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.025em", color: "var(--color-brand-ink)", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Lo que normalmente paga el grupo
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.88rem", lineHeight: 1.7, color: "var(--color-brand-ink)", opacity: 0.6, marginBottom: "1.5rem" }}>
              En la mayoria de las bodas destino, <strong style={{ fontWeight: 600, opacity: 1 }}>cada invitado cubre su viaje y hospedaje</strong>. Lo importante es organizar bien el grupo.
            </p>
            <div className="space-y-0">
              {guestItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4"
                  style={{ borderBottom: i < guestItems.length - 1 ? "1px solid var(--color-brand-border)" : "none" }}
                >
                  <span style={{ height: "6px", width: "6px", borderRadius: "50%", background: "var(--color-brand-green)", marginTop: "6px", flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", lineHeight: 1.6, color: "var(--color-brand-ink)", opacity: 0.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div style={{ borderTop: "1px solid var(--color-brand-border)", marginTop: "3rem", paddingTop: "2.5rem" }}>
          <p className="text-eyebrow-accent mb-3">Lo que hace Flymingo Weddings</p>
          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1rem", lineHeight: 1.8, color: "var(--color-brand-ink)", opacity: 0.6, maxWidth: "54rem" }}>
            No se trata solo de escoger un hotel bonito. Se trata de entender que opcion les conviene mas como pareja, como se va a mover el grupo, que beneficios pueden aprovechar y cual es la mejor forma de avanzar hacia una propuesta aterrizada.
          </p>
        </div>

      </div>
    </section>
  );
}
