const FS = "clamp(3.2rem, 7.5vw, 7rem)";

export default function HomeEditorial() {
  return (
    <section
      style={{
        background: "var(--color-brand-ink)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glows */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-15%", right: "-8%",
          width: "55vw", height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,45,120,0.09) 0%, transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: "-10%", left: "-5%",
          width: "35vw", height: "35vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,182,120,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-44 lg:px-12 lg:py-64">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1.5fr_1fr] lg:items-center">

          {/* Left — massive philosophy headline */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: FS, letterSpacing: "-0.04em", lineHeight: 0.88 }}>
              <span style={{ display: "block", fontWeight: 200, color: "white", opacity: 0.28 }}>El mejor viaje</span>
              <span style={{ display: "block", fontWeight: 800, color: "white" }}>de tu vida</span>
              <span style={{ display: "block", fontWeight: 200, color: "white", opacity: 0.28 }}>no debería</span>
              <span style={{ display: "block", fontWeight: 800, color: "white" }}>parecerse</span>
              <span style={{ display: "block", fontWeight: 200, color: "white", opacity: 0.28 }}>al de ningún</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>paquete.</span>
            </div>
          </div>

          {/* Right — editorial support column */}
          <div className="flex flex-col gap-10 lg:pl-8">
            <span className="divider-accent" />

            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                letterSpacing: "-0.015em",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Por eso no vendemos paquetes. Cada itinerario que diseñamos es único — construido desde cero, para quien viaja.
            </p>

            {/* Stat callout */}
            <div
              style={{
                borderLeft: "2px solid rgba(244,120,152,0.25)",
                paddingLeft: "1.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  letterSpacing: "-0.04em",
                  color: "white",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                200+
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "0.8rem",
                  letterSpacing: "0.03em",
                  color: "rgba(255,255,255,0.3)",
                  display: "block",
                  marginTop: "0.4rem",
                }}
              >
                itinerarios diseñados.<br />Ninguno igual al otro.
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.15)",
              }}
            >
              Flymingo Viajes · Torreón, México
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent 0%, rgba(244,120,152,0.4) 40%, rgba(14,182,120,0.3) 70%, transparent 100%)",
        }}
      />
    </section>
  );
}
