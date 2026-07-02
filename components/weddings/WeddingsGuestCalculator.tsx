"use client";

import { useState } from "react";

const CALENDLY_BASE = "https://calendly.com/flymingo/flymingo-weddings";
const MIN_ROOMS = 15;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: object[];
  }
}

function trackCalendlyFromCalc(guests: number) {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Schedule", { content_name: "weddings_calendly", num_guests: guests });
  window.gtag?.("event", "schedule", {
    event_category: "Calendly",
    event_label: "weddings_calculator",
    value: guests,
  });
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "calendly_schedule",
    content_name: "weddings_calendly",
    source: "calculator",
    num_guests: guests,
  });
}

export default function WeddingsGuestCalculator() {
  const [guests, setGuests] = useState(40);

  const rooms = Math.round(guests / 2);
  const isFree = rooms >= MIN_ROOMS;
  const deficit = MIN_ROOMS - rooms;

  const calendlyUrl = `${CALENDLY_BASE}?utm_source=web&utm_medium=calculator&utm_content=guests_${guests}`;

  return (
    <section id="calculadora" style={{ background: "var(--color-brand-canvas)" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-eyebrow-accent mb-8">Beneficio por grupo</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
            }}
          >
            <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>
              En algunos hoteles,
            </span>
            <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>
              tu paquete de boda sale gratis.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "var(--color-brand-ink)",
              opacity: 0.6,
              marginTop: "1.25rem",
              maxWidth: "44rem",
            }}
          >
            Si tu grupo reserva suficientes habitaciones, varios hoteles regalan el paquete de boda a los novios.
            Mueve el slider y ve qué tan cerca están.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">

          {/* ── Left: slider + message + CTA ── */}
          <div>

            {/* Slider block */}
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                border: "1px solid var(--color-brand-border)",
                padding: "2rem",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                    fontSize: "0.68rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-brand-dim)",
                    paddingTop: "0.5rem",
                  }}
                >
                  Invitados estimados
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(3.5rem, 9vw, 6rem)",
                    letterSpacing: "-0.05em",
                    color: "var(--color-brand-ink)",
                    lineHeight: 1,
                  }}
                  aria-live="polite"
                  aria-label={`${guests} invitados`}
                >
                  {guests}
                </p>
              </div>

              <input
                type="range"
                min={10}
                max={120}
                step={2}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full"
                style={{
                  accentColor: "var(--color-brand-accent)",
                  height: "6px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  display: "block",
                }}
                aria-label="Número de invitados"
              />
              <div className="flex justify-between mt-2.5">
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--color-brand-dim)" }}>10</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--color-brand-dim)" }}>120</span>
              </div>
            </div>

            {/* Dynamic message */}
            <div
              style={{
                borderLeft: `3px solid ${isFree ? "var(--color-brand-green)" : "var(--color-brand-accent)"}`,
                paddingLeft: "1.25rem",
                marginTop: "2rem",
                transition: "border-color 0.3s ease",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  lineHeight: 1.8,
                  color: "var(--color-brand-ink)",
                  opacity: 0.75,
                }}
              >
                {isFree ? (
                  <>
                    Con ~{rooms} habitaciones, en varios hoteles el paquete va por cuenta de la casa.{" "}
                    <strong style={{ fontWeight: 600, opacity: 1 }}>
                      Confírmalo en tu videollamada gratis.
                    </strong>
                  </>
                ) : (
                  <>
                    Te faltarían ~
                    <strong style={{ fontWeight: 700, opacity: 1 }}>{deficit} habitaciones</strong>
                    {" "}para que algunos hoteles te regalen el paquete.
                    En la videollamada vemos todas tus opciones y beneficios.
                  </>
                )}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent"
                onClick={() => trackCalendlyFromCalc(guests)}
              >
                Agendar videollamada gratis
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p
                style={{
                  marginTop: "0.75rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  fontWeight: 300,
                  color: "var(--color-brand-dim)",
                  letterSpacing: "0.01em",
                }}
              >
                30 min con nuestra Wedding Planner · Sin compromiso<br />
                <span style={{ opacity: 0.7 }}>Las condiciones exactas varían por hotel y temporada.</span>
              </p>
            </div>
          </div>

          {/* ── Right: result cards ── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 content-start">

            {/* Card: habitaciones */}
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                border: "1px solid var(--color-brand-border)",
                padding: "1.75rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-brand-dim)",
                  marginBottom: "1rem",
                }}
              >
                Habitaciones estimadas
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  letterSpacing: "-0.05em",
                  color: "var(--color-brand-ink)",
                  lineHeight: 1,
                }}
                aria-live="polite"
              >
                {rooms}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.75rem", color: "var(--color-brand-dim)", marginTop: "0.5rem" }}>
                aprox. 1 hab. por cada 2 invitados
              </p>
            </div>

            {/* Card: paquete */}
            <div
              style={{
                background: isFree ? "var(--color-brand-green-soft)" : "white",
                borderRadius: "20px",
                border: `1px solid ${isFree ? "rgba(14,182,120,0.3)" : "var(--color-brand-border)"}`,
                padding: "1.75rem",
                transition: "background 0.35s ease, border-color 0.35s ease",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: isFree ? "var(--color-brand-green)" : "var(--color-brand-dim)",
                  marginBottom: "1rem",
                  transition: "color 0.3s ease",
                }}
              >
                Tu paquete de boda
              </p>
              {isFree ? (
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                    letterSpacing: "-0.03em",
                    color: "var(--color-brand-green)",
                    lineHeight: 1.1,
                  }}
                >
                  Podría salirte gratis 🎁
                </p>
              ) : (
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                    letterSpacing: "-0.025em",
                    color: "var(--color-brand-ink)",
                    lineHeight: 1.15,
                  }}
                >
                  Con beneficios según tu grupo
                </p>
              )}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  color: isFree ? "var(--color-brand-green)" : "var(--color-brand-dim)",
                  marginTop: "0.6rem",
                  opacity: 0.8,
                  transition: "color 0.3s ease",
                }}
              >
                {isFree
                  ? `${rooms} hab. · superas el mínimo`
                  : `${rooms} hab. · mínimo ~${MIN_ROOMS}`}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
