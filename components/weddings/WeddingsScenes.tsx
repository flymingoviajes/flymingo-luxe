"use client";

import TrackLink from "@/components/TrackLink";

const CALENDLY = "https://calendly.com/flymingo/flymingo-weddings";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: object[];
  }
}

function trackCalendly(source: string) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Schedule", { content_name: "weddings_calendly" });
  window.gtag?.("event", "schedule", { event_category: "Calendly", event_label: source });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "calendly_schedule", source });
}

// ── Scene A: Los novios (white bg) ───────────────────────────────────────────
function SceneNovios() {
  return (
    <div
      style={{
        minHeight: "90svh",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark label */}
      <p
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(2rem, 5vw, 4rem)",
          right: "clamp(1.5rem, 4vw, 3rem)",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(4rem, 14vw, 14rem)",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          color: "var(--color-brand-border)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        01
      </p>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "44rem" }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "0.58rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--color-brand-accent)",
            marginBottom: "1.5rem",
          }}
        >
          Los novios
        </span>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            letterSpacing: "-0.055em",
            lineHeight: 0.88,
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Pagan el</span>
          <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.28 }}>paquete de</span>
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>boda.</span>
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(2rem, 5vw, 4rem)", alignItems: "flex-start" }}>
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                letterSpacing: "-0.04em",
                color: "var(--color-brand-accent)",
                lineHeight: 1,
              }}
            >
              ~$50,000 MXN
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "0.78rem",
                color: "var(--color-brand-dim)",
                marginTop: "0.4rem",
              }}
            >
              Para 20 personas · Solo el paquete
            </p>
          </div>

          <div
            style={{
              width: "1px",
              height: "3rem",
              background: "var(--color-brand-border)",
              display: "none",
            }}
          />

          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 300,
                fontSize: "0.88rem",
                lineHeight: 1.75,
                color: "var(--color-brand-dim)",
                maxWidth: "22rem",
              }}
            >
              Hospedaje y vuelos van aparte — los cubre cada invitado. Por eso la boda de destino sale mucho más accesible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Scene B: Los invitados (warm surface bg) ──────────────────────────────────
function SceneInvitados() {
  return (
    <div
      style={{
        minHeight: "90svh",
        background: "var(--color-brand-surface)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <p
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(2rem, 5vw, 4rem)",
          left: "clamp(1.5rem, 4vw, 3rem)",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(4rem, 14vw, 14rem)",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          color: "var(--color-brand-border)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        02
      </p>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "44rem", alignSelf: "flex-end", textAlign: "right" }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "0.58rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--color-brand-accent)",
            marginBottom: "1.5rem",
          }}
        >
          Sus invitados
        </span>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            letterSpacing: "-0.055em",
            lineHeight: 0.88,
            marginBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Cubren su</span>
          <span style={{ display: "block", fontWeight: 200, color: "var(--color-brand-ink)", opacity: 0.28 }}>propio</span>
          <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>viaje.</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            letterSpacing: "-0.02em",
            color: "var(--color-brand-accent)",
            marginBottom: "0.75rem",
          }}
        >
          Flymingo los coordina a todos.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "0.88rem",
            lineHeight: 1.75,
            color: "var(--color-brand-dim)",
            maxWidth: "26rem",
            marginLeft: "auto",
          }}
        >
          Invitaciones, reservas, vuelos y pagos — sin que ustedes persigan a nadie.
        </p>
      </div>
    </div>
  );
}

// ── Scene C: Flymingo (dark bg) ───────────────────────────────────────────────
function SceneFlymingo() {
  return (
    <div
      style={{
        minHeight: "90svh",
        background: "var(--color-brand-ink)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Watermark */}
      <p
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-0.08em",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(6rem, 22vw, 22rem)",
          letterSpacing: "-0.06em",
          lineHeight: 0.8,
          color: "rgba(255,255,255,0.04)",
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        FLYMINGO
      </p>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "48rem" }}>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "0.58rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--color-brand-accent)",
            marginBottom: "1.5rem",
          }}
        >
          03 · Flymingo
        </span>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            letterSpacing: "-0.055em",
            lineHeight: 0.88,
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          <span style={{ display: "block", fontWeight: 200, color: "rgba(255,255,255,0.22)" }}>Nosotros</span>
          <span style={{ display: "block", fontWeight: 800, color: "white" }}>hacemos</span>
          <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>el resto.</span>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "0.95rem",
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.45)",
            maxWidth: "30rem",
            margin: "0 auto 3rem",
          }}
        >
          Coordinación completa desde la primera llamada hasta el día de la boda. Un solo punto de contacto. Ustedes solo llegan a disfrutar.
        </p>

        {/* Beneficio estrella — inline in scene C */}
        <div
          style={{
            display: "inline-block",
            background: "rgba(244,120,152,0.12)",
            border: "1px solid rgba(244,120,152,0.25)",
            borderRadius: "16px",
            padding: "1.5rem 2rem",
            maxWidth: "34rem",
            marginBottom: "2.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "0.58rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-brand-accent)",
              marginBottom: "0.6rem",
            }}
          >
            Beneficio estrella
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.35,
              color: "white",
            }}
          >
            Si tu grupo reserva suficientes habitaciones,{" "}
            <span style={{ color: "var(--color-brand-accent)", fontStyle: "italic" }}>el hotel puede regalarte el paquete de boda.</span>
          </p>
        </div>

        {/* CTA */}
        <div>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent"
            onClick={() => trackCalendly("scenes_c")}
          >
            Checar si aplico
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p style={{ marginTop: "0.6rem", fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 300, color: "rgba(255,255,255,0.25)", letterSpacing: "0.03em" }}>
            En la videollamada gratis con nuestra Wedding Planner
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WeddingsScenes() {
  return (
    <section>
      <SceneNovios />
      <SceneInvitados />
      <SceneFlymingo />
    </section>
  );
}
