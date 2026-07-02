"use client";

import TrackLink from "@/components/TrackLink";

const CALENDLY = "https://calendly.com/flymingo/flymingo-weddings";
const WA = "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20informes%20de%20Flymingo%20Weddings.";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: object[];
  }
}

function trackCalendly() {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Schedule", { content_name: "weddings_calendly" });
  window.gtag?.("event", "schedule", { event_category: "Calendly", event_label: "weddings_close" });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "calendly_schedule", source: "close" });
}

export default function WeddingsClose() {
  return (
    <section
      style={{
        background: "var(--color-brand-surface)",
        minHeight: "80svh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: "54rem", margin: "0 auto", width: "100%", textAlign: "center" }}>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "0.58rem",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "var(--color-brand-accent)",
            marginBottom: "2rem",
          }}
        >
          El siguiente paso
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 9vw, 8rem)",
            letterSpacing: "-0.055em",
            lineHeight: 0.87,
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.28 }}>Su boda empieza</span>
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>con una</span>
          <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>llamada.</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "var(--color-brand-dim)",
            maxWidth: "34rem",
            margin: "0 auto clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          En 30 minutos con nuestra Wedding Planner descubren qué hoteles les convienen, cuánto les costaría y si aplican para el paquete de boda gratis.
        </p>

        {/* Primary CTA */}
        <div style={{ marginBottom: "1.5rem" }}>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent"
            onClick={trackCalendly}
            style={{ fontSize: "0.85rem", padding: "1.1rem 2.5rem" }}
          >
            Agendar videollamada gratis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              fontWeight: 300,
              color: "var(--color-brand-dim)",
              letterSpacing: "0.02em",
              marginTop: "0.65rem",
              opacity: 0.6,
            }}
          >
            30 min · Completamente gratis · Sin compromiso
          </p>
        </div>

        {/* Secondary */}
        <TrackLink
          href={WA}
          className="btn-ghost"
          label="Weddings Close — WhatsApp"
        >
          O escríbenos por WhatsApp
        </TrackLink>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "clamp(2rem, 5vw, 4rem)",
            marginTop: "clamp(3rem, 7vw, 5rem)",
            paddingTop: "clamp(2rem, 4vw, 3rem)",
            borderTop: "1px solid var(--color-brand-border)",
          }}
        >
          {[
            { n: "30 min", l: "con nuestra Wedding Planner" },
            { n: "Gratis", l: "sin costo ni compromiso" },
            { n: "48 h", l: "y tienen su primera propuesta" },
          ].map((s) => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  letterSpacing: "-0.04em",
                  color: "var(--color-brand-ink)",
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}
              >
                {s.n}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "0.75rem",
                  color: "var(--color-brand-dim)",
                  opacity: 0.7,
                }}
              >
                {s.l}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
