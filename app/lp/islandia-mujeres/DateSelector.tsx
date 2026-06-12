"use client";

import { useState } from "react";
import TrackLink from "@/components/TrackLink";

const salidas = [
  {
    id: "octubre",
    corta: "Oct 2026",
    fechas: "24 — 31 oct 2026",
    estado: "nueva",
    estadoLabel: "Nueva salida",
    disponibles: 12,
    precio: "$84,890",
    apartado: "$10,000",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20vi%20el%20anuncio%20y%20quiero%20informes%20de%20Islandia%20Mujeres%20Oct%202026.",
    nota: null as string | null,
    fechasAlt: null as string | null,
  },
  {
    id: "noviembre",
    corta: "Nov 2026",
    fechas: "14 — 21 nov 2026",
    estado: "ultimos",
    estadoLabel: "Último lugar",
    disponibles: 1,
    precio: "$84,890",
    apartado: "$10,000",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20vi%20el%20anuncio%20y%20quiero%20el%20ultimo%20lugar%20de%20Islandia%20Mujeres%20Nov%202026.",
    nota: "Sin visa americana: también hay ruta vía Europa.",
    fechasAlt: null as string | null,
  },
  {
    id: "febrero",
    corta: "Feb 2027",
    fechas: "13 — 20 feb 2027",
    estado: "nueva",
    estadoLabel: "Nueva salida",
    disponibles: null as number | null,
    precio: "$84,890",
    apartado: "$10,000",
    wa: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20vi%20el%20anuncio%20y%20quiero%20informes%20de%20Islandia%20Mujeres%20Feb%202027.",
    nota: null as string | null,
    fechasAlt: "17 — 25 feb 2027",
  },
];

export default function DateSelector() {
  const [selected, setSelected] = useState("noviembre");
  const salida = salidas.find((s) => s.id === selected)!;

  return (
    <div>
      {/* Date buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {salidas.map((s) => {
          const isSelected = selected === s.id;

          let badgeBg = "var(--color-brand-surface)";
          let badgeColor = "var(--color-brand-ink)";
          let badgeBorder = "var(--color-brand-border)";
          if (s.estado === "ultimos") {
            badgeBg = "rgba(244,120,152,0.12)";
            badgeColor = "var(--color-brand-accent)";
            badgeBorder = "rgba(244,120,152,0.3)";
          }
          if (s.estado === "nueva") {
            badgeBg = "rgba(255,45,120,0.08)";
            badgeColor = "var(--color-brand-neon)";
            badgeBorder = "rgba(255,45,120,0.2)";
          }

          return (
            <button
              key={s.id}
              onClick={() => setSelected(s.id)}
              style={{
                flex: 1,
                borderRadius: "20px",
                border: isSelected
                  ? "2px solid var(--color-brand-accent)"
                  : "1.5px solid var(--color-brand-border)",
                background: "white",
                padding: "1.25rem 1rem",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.15s ease",
                boxShadow: isSelected
                  ? "0 0 0 4px rgba(244,120,152,0.1)"
                  : "none",
              }}
            >
              <span
                style={{
                  background: badgeBg,
                  color: badgeColor,
                  border: `1px solid ${badgeBorder}`,
                  borderRadius: "999px",
                  padding: "0.2rem 0.65rem",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "0.58rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  display: "inline-block",
                  marginBottom: "0.6rem",
                }}
              >
                {s.estadoLabel}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  letterSpacing: "-0.03em",
                  color: "var(--color-brand-ink)",
                  lineHeight: 1,
                }}
              >
                {s.corta}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  color: "var(--color-brand-ink)",
                  opacity: 0.5,
                  marginTop: "0.3rem",
                }}
              >
                {s.fechas}
              </p>
              {s.estado === "ultimos" && s.disponibles && (
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "0.65rem",
                    color: "var(--color-brand-accent)",
                    marginTop: "0.4rem",
                  }}
                >
                  Solo {s.disponibles} lugar
                </p>
              )}
              {s.estado === "nueva" && (
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "0.65rem",
                    color: "var(--color-brand-neon)",
                    marginTop: "0.4rem",
                  }}
                >
                  {s.disponibles ? `${s.disponibles} lugares` : "Lugares disponibles"}
                </p>
              )}
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        style={{
          borderRadius: "24px",
          border: "1px solid var(--color-brand-border)",
          background: "white",
          padding: "2rem 2rem 1.75rem",
          maxWidth: "540px",
        }}
      >
        {/* Dates */}
        <div style={{ marginBottom: "1.5rem" }}>
          <p className="text-eyebrow-accent mb-2">Fechas</p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.75rem",
              letterSpacing: "-0.04em",
              color: "var(--color-brand-ink)",
              lineHeight: 1,
            }}
          >
            {salida.fechas}
          </p>
          {salida.fechasAlt && (
            <p className="text-caption mt-2">
              o {salida.fechasAlt}
              <span
                className="badge badge-neon ml-2"
                style={{ fontSize: "0.58rem" }}
              >
                sin visa americana
              </span>
            </p>
          )}
        </div>

        {/* Prices */}
        <div
          className="flex gap-10"
          style={{
            borderTop: "1px solid var(--color-brand-border)",
            borderBottom: "1px solid var(--color-brand-border)",
            padding: "1.25rem 0",
            marginBottom: "1.25rem",
          }}
        >
          <div>
            <p className="text-eyebrow-accent mb-1">Precio</p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "2.4rem",
                letterSpacing: "-0.04em",
                color: "var(--color-brand-ink)",
                lineHeight: 1,
              }}
            >
              {salida.precio}
            </p>
            <p className="text-caption mt-1">MXN por persona</p>
          </div>
          <div style={{ width: "1px", background: "var(--color-brand-border)" }} />
          <div>
            <p className="text-eyebrow-accent mb-1">Apartado</p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "2.4rem",
                letterSpacing: "-0.04em",
                color: "var(--color-brand-accent)",
                lineHeight: 1,
              }}
            >
              {salida.apartado}
            </p>
            <p className="text-caption mt-1">MXN · asegura tu lugar</p>
          </div>
        </div>

        {/* Nota */}
        {salida.nota && (
          <p
            className="text-caption mb-5"
            style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}
          >
            <span
              style={{
                display: "inline-block",
                height: "6px",
                width: "6px",
                borderRadius: "50%",
                background: "var(--color-brand-accent)",
                marginTop: "5px",
                flexShrink: 0,
              }}
            />
            {salida.nota}
          </p>
        )}

        {/* CTA */}
        <TrackLink
          href={salida.wa}
          className="btn btn-accent w-full justify-center"
          label={`LP Islandia — Pedir informes ${salida.corta}`}
        >
          Quiero este lugar
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </TrackLink>
      </div>
    </div>
  );
}
