"use client";

import Image from "next/image";
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
  window.gtag?.("event", "schedule", { event_category: "Calendly", event_label: "weddings_hero" });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "calendly_schedule", source: "hero" });
}

export default function WeddingsHero() {
  return (
    <section style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>

      {/* Photo */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/weddings/hero.jpg"
          alt="Boda de destino frente al mar — Flymingo Weddings"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,5,8,0.95) 0%, rgba(10,5,8,0.45) 45%, rgba(10,5,8,0.1) 100%)" }} />
      </div>

      {/* Content — anchored bottom left */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 clamp(1.5rem, 6vw, 5rem) clamp(3.5rem, 8vw, 6rem)",
          maxWidth: "72rem",
          width: "100%",
        }}
      >
        {/* Headline — 3 lines, weight contrast */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4.5rem, 14vw, 13rem)",
            letterSpacing: "-0.055em",
            lineHeight: 0.82,
            marginBottom: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          <span style={{ display: "block", fontWeight: 200, color: "rgba(255,255,255,0.22)" }}>Cásate</span>
          <span style={{ display: "block", fontWeight: 800, color: "white" }}>frente</span>
          <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>al mar.</span>
        </h1>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "1rem" }}>
          <div>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent"
              onClick={trackCalendly}
            >
              Agenda tu videollamada gratis
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p style={{ marginTop: "0.55rem", fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 300, letterSpacing: "0.03em", color: "rgba(255,255,255,0.28)" }}>
              30 min con nuestra Wedding Planner · Sin compromiso
            </p>
          </div>

          <TrackLink href={WA} className="btn-ghost-white" label="Weddings Hero — WhatsApp">
            Cotizar por WhatsApp
          </TrackLink>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(1.5rem, 4vw, 2.5rem)",
          right: "clamp(1.5rem, 4vw, 4rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 1,
        }}
      >
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="16" height="26" rx="8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <rect x="7.5" y="5" width="3" height="5" rx="1.5" fill="rgba(255,255,255,0.45)" />
        </svg>
      </div>

    </section>
  );
}
