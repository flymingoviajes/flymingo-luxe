import TrackLink from "@/components/TrackLink";

const VENUES = [
  {
    name: "Xcaret\nWeddings",
    location: "Riviera Maya",
    badge: "Premium",
    packages: [
      { name: "Atardecer", price: "Desde $75,000 MXN" },
      { name: "Alux", price: "Desde $140,000 MXN" },
    ],
    accent: "var(--color-brand-green)",
    bg: "#0B2F22",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20cotizar%20Xcaret%20Weddings.",
  },
  {
    name: "AVA\nCancún",
    location: "Cancún",
    badge: "Visual & chic",
    packages: [
      { name: "Sunset", price: "$6,000 USD" },
      { name: "Willow", price: "$7,000 USD" },
      { name: "Golden", price: "$8,000 USD" },
    ],
    accent: "var(--color-brand-neon)",
    bg: "#1A2E4A",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20cotizar%20AVA%20Cancun%20Weddings.",
  },
  {
    name: "Palace\nWeddings",
    location: "Cancún · Moon Palace",
    badge: "Grupos grandes",
    packages: [
      { name: "Complementaria", price: "Según grupo" },
      { name: "Beneficios por grupo", price: "Según habitaciones" },
    ],
    accent: "var(--color-brand-accent)",
    bg: "#2A1520",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20cotizar%20Palace%20Weddings.",
  },
];

export default function WeddingsVenues() {
  return (
    <section
      id="colecciones"
      style={{ background: "var(--color-brand-ink)", padding: "clamp(4rem, 10vw, 8rem) 0" }}
    >
      {/* Header */}
      <div
        style={{ padding: "0 clamp(1.5rem, 6vw, 5rem)", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "0.58rem",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "var(--color-brand-accent)",
            marginBottom: "1.5rem",
          }}
        >
          Colección Flymingo Weddings
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            letterSpacing: "-0.055em",
            lineHeight: 0.88,
          }}
        >
          <span style={{ display: "block", fontWeight: 800, color: "white" }}>El venue</span>
          <span style={{ display: "block", fontWeight: 200, color: "rgba(255,255,255,0.22)" }}>que va</span>
          <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>con ustedes.</span>
        </h2>
      </div>

      {/* Venue blocks — horizontal scroll on mobile, row on desktop */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "1px",
          paddingBottom: "0",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {VENUES.map((v) => (
          <div
            key={v.name}
            style={{
              flex: "0 0 clamp(85vw, 85vw, 90vw)",
              maxWidth: "420px",
              minWidth: "280px",
              background: v.bg,
              scrollSnapAlign: "start",
              display: "flex",
              flexDirection: "column",
              padding: "clamp(2rem, 5vw, 3.5rem)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Venue name as a watermark */}
            <p
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-0.1em",
                right: "-0.05em",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(5rem, 18vw, 12rem)",
                letterSpacing: "-0.06em",
                lineHeight: 0.85,
                color: "rgba(255,255,255,0.04)",
                userSelect: "none",
                pointerEvents: "none",
                whiteSpace: "pre-line",
                textAlign: "right",
              }}
            >
              {v.name}
            </p>

            <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
              {/* Location + badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {v.location}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: v.accent,
                    border: `1px solid ${v.accent}`,
                    padding: "0.25rem 0.65rem",
                    borderRadius: "100px",
                  }}
                >
                  {v.badge}
                </span>
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 2.8rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  color: "white",
                  whiteSpace: "pre-line",
                  marginBottom: "auto",
                  paddingBottom: "2.5rem",
                }}
              >
                {v.name}
              </h3>

              {/* Packages */}
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "1.25rem" }} />
                {v.packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "1rem",
                      paddingBlock: "0.6rem",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 400,
                        fontSize: "0.82rem",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {pkg.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.82rem",
                        letterSpacing: "-0.01em",
                        color: v.accent,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {pkg.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <TrackLink
                href={v.wa}
                className="btn btn-outline w-full justify-center"
                label={`Weddings — Cotizar ${v.name}`}
                style={{ borderColor: v.accent, color: v.accent }}
              >
                Cotizar esta colección
              </TrackLink>
            </div>
          </div>
        ))}

        {/* Spacer on desktop so last card doesn't touch the right edge */}
        <div style={{ flex: "0 0 clamp(1.5rem, 6vw, 5rem)" }} aria-hidden="true" />
      </div>

      {/* Scroll hint — mobile only */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 300,
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          color: "rgba(255,255,255,0.2)",
          textAlign: "center",
          marginTop: "1.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        Desliza para ver más venues →
      </p>

    </section>
  );
}
