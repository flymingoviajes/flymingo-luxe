export default function WeddingsReveal() {
  return (
    <section
      style={{
        background: "var(--color-brand-surface)",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(4rem, 10vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      {/* Giant decorative number — background watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-0.06em",
          bottom: "-0.1em",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(22rem, 60vw, 90rem)",
          lineHeight: 0.78,
          color: "var(--color-brand-border)",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.06em",
        }}
      >
        3
      </div>

      {/* Foreground content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "46rem" }}>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "0.58rem",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "var(--color-brand-accent)",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          No es lo que imaginas
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            letterSpacing: "-0.055em",
            lineHeight: 0.88,
            marginBottom: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>3 días</span>
          <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.25 }}>de playa, alberca</span>
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>y fiesta</span>
          <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.25 }}>con toda tu gente.</span>
        </h2>

        <div
          style={{
            width: "2.5rem",
            height: "2px",
            background: "var(--color-brand-accent)",
            marginBottom: "1.75rem",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1rem, 2.2vw, 1.4rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
            color: "var(--color-brand-dim)",
          }}
        >
          No 5 horas en un salón.
        </p>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "0.92rem",
            lineHeight: 1.8,
            color: "var(--color-brand-dim)",
            marginTop: "1rem",
            maxWidth: "30rem",
            opacity: 0.8,
          }}
        >
          Una boda de destino es mucho más que una boda — es varios días en un hotel todo incluido frente al mar con todas las personas que más quieres.
        </p>

      </div>
    </section>
  );
}
