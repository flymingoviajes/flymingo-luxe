"use client";

import { useState } from "react";
import Image from "next/image";
import TrackLink from "@/components/TrackLink";

const salidas = [
  {
    id: "octubre",
    fechasCortas: "Oct 2026",
    fechas: "24 — 31 oct 2026",
    fechasAlt: null,
    estado: "nueva",
    estadoLabel: "Nueva salida",
    disponibles: 12,
    precio: "$84,890",
    apartado: "$10,000",
    whatsapp: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20informes%20del%20viaje%20Islandia%20Oct%202026.",
    nota: null,
  },
  {
    id: "noviembre",
    fechasCortas: "Nov 2026",
    fechas: "14 — 21 nov 2026",
    fechasAlt: null,
    estado: "ultimos",
    estadoLabel: "Ultimo lugar",
    disponibles: 1,
    precio: "$84,890",
    apartado: "$10,000",
    whatsapp: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20informes%20del%20viaje%20Islandia%20Nov%202026.",
    nota: "Sin visa americana tambien hay ruta via Europa.",
  },
  {
    id: "febrero",
    fechasCortas: "Feb 2027",
    fechas: "13 — 20 feb 2027",
    fechasAlt: "17 — 25 feb 2027",
    estado: "nueva",
    estadoLabel: "Nueva salida",
    disponibles: null,
    precio: "$84,890",
    apartado: "$10,000",
    whatsapp: "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20informes%20del%20viaje%20Islandia%20Feb%202027.",
    nota: null,
  },
];

const highlights = [
  "Auroras boreales",
  "Circulo de Oro",
  "Costa Sur de Islandia",
  "Aguas termales",
  "Paisajes de otro mundo",
  "Grupo solo mujeres",
  "Acompanamiento Flymingo 24/7",
];

const brochureUrl = "/docs/ISLANDIA-x-MUJERES-2026.pdf";

export default function WomenIcelandSection() {
  const [selected, setSelected] = useState("noviembre");
  const salida = salidas.find((s) => s.id === selected)!;

  return (
    <section id="islandia" style={{ background: "var(--color-brand-surface)" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        {/* Header */}
        <p className="text-eyebrow-accent mb-10">Flymingo Women · Viaje insignia</p>

        <div className="grid items-start gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* ── Columna izquierda ── */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 7vw, 6.5rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Islandia</span>
              <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>para Mujeres.</span>
            </div>

            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8, color: "var(--color-brand-ink)", opacity: 0.6, maxWidth: "36rem", marginTop: "1.5rem", marginBottom: "2.5rem" }}>
              Nuestro viaje mas iconico. Auroras boreales, glaciares y momentos que no se olvidan — en un grupo de mujeres con la misma energia de aventura.
            </p>

            {/* Selector de salidas */}
            <p className="text-eyebrow-accent mb-4">Elige tu salida</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {salidas.map((s) => {
                const isSelected = selected === s.id;
                const isAgotada = s.estado === "agotada";

                let badgeBg = "var(--color-brand-surface)";
                let badgeColor = "var(--color-brand-dim)";
                let badgeBorder = "var(--color-brand-border)";
                if (s.estado === "ultimos") { badgeBg = "rgba(244,120,152,0.1)"; badgeColor = "var(--color-brand-accent)"; badgeBorder = "rgba(244,120,152,0.25)"; }
                if (s.estado === "nueva") { badgeBg = "rgba(255,45,120,0.1)"; badgeColor = "var(--color-brand-neon)"; badgeBorder = "rgba(255,45,120,0.2)"; }

                return (
                  <button
                    key={s.id}
                    onClick={() => !isAgotada && setSelected(s.id)}
                    disabled={isAgotada}
                    style={{
                      flex: 1,
                      borderRadius: "16px",
                      border: isSelected && !isAgotada ? "2px solid var(--color-brand-accent)" : "1.5px solid var(--color-brand-border)",
                      background: "white",
                      padding: "1rem",
                      textAlign: "left",
                      cursor: isAgotada ? "not-allowed" : "pointer",
                      opacity: isAgotada ? 0.45 : 1,
                      transition: "all 0.15s ease",
                      boxShadow: isSelected && !isAgotada ? "0 0 0 3px rgba(244,120,152,0.12)" : "none",
                    }}
                  >
                    <span
                      className="inline-flex items-center"
                      style={{ background: badgeBg, color: badgeColor, border: `1px solid ${badgeBorder}`, borderRadius: "999px", padding: "0.2rem 0.6rem", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", display: "inline-block", marginBottom: "0.5rem" }}
                    >
                      {s.estadoLabel}
                    </span>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: isAgotada ? "var(--color-brand-dim)" : "var(--color-brand-ink)", lineHeight: 1 }}>
                      {s.fechasCortas}
                    </p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--color-brand-dim)", marginTop: "0.25rem" }}>
                      {s.fechas}
                    </p>
                    {s.estado === "ultimos" && (
                      <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.65rem", color: "var(--color-brand-accent)", marginTop: "0.4rem" }}>
                        Solo {s.disponibles} lugares
                      </p>
                    )}
                    {s.estado === "nueva" && (
                      <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.65rem", color: "var(--color-brand-accent)", marginTop: "0.4rem" }}>
                        {s.disponibles ? `${s.disponibles} lugares` : "Lugares disponibles"}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Panel de detalle */}
            {salida.estado === "agotada" ? (
              <div style={{ borderRadius: "16px", border: "1px solid var(--color-brand-border)", background: "white", padding: "1.5rem" }}>
                <p className="text-caption italic">Esta salida ya esta agotada. Selecciona otra fecha disponible.</p>
              </div>
            ) : (
              <div style={{ borderRadius: "16px", border: "1px solid var(--color-brand-border)", background: "white", padding: "1.5rem 2rem" }}>
                {/* Fechas */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <p className="text-eyebrow-accent mb-2">Fechas</p>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.03em", color: "var(--color-brand-ink)", lineHeight: 1 }}>
                    {salida.fechas}
                  </p>
                  {salida.fechasAlt && (
                    <p className="text-caption mt-2">
                      o {salida.fechasAlt}
                      <span className="badge badge-neon ml-2" style={{ fontSize: "0.6rem" }}>sin visa americana</span>
                    </p>
                  )}
                </div>

                {/* Precios */}
                <div className="flex gap-10 pb-5" style={{ borderBottom: "1px solid var(--color-brand-border)", marginBottom: "1.25rem" }}>
                  <div>
                    <p className="text-eyebrow-accent mb-1">Precio</p>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.2rem", letterSpacing: "-0.04em", color: "var(--color-brand-ink)", lineHeight: 1 }}>
                      {salida.precio}
                    </p>
                    <p className="text-caption mt-0.5">MXN por persona</p>
                  </div>
                  <div style={{ width: "1px", background: "var(--color-brand-border)" }} />
                  <div>
                    <p className="text-eyebrow-accent mb-1">Apartado</p>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.2rem", letterSpacing: "-0.04em", color: "var(--color-brand-accent)", lineHeight: 1 }}>
                      {salida.apartado}
                    </p>
                    <p className="text-caption mt-0.5">MXN · asegura tu lugar</p>
                  </div>
                </div>

                {/* Nota */}
                {salida.nota && (
                  <p className="text-caption mb-5" style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                    <span style={{ display: "inline-block", height: "6px", width: "6px", borderRadius: "50%", background: "var(--color-brand-accent)", marginTop: "5px", flexShrink: 0 }} />
                    {salida.nota}
                  </p>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <TrackLink href={salida.whatsapp!} className="btn btn-accent" label={`Women Islandia — Pedir informes ${salida.fechasCortas}`}>
                    Pedir informes
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </TrackLink>
                  <a href={brochureUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
                    Descargar brochure
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ── Columna derecha — imagen + highlights ── */}
          <div className="space-y-5 lg:sticky lg:top-10">
            <div className="relative overflow-hidden" style={{ borderRadius: "24px", aspectRatio: "3/4" }}>
              <Image
                src="/images/women/islandia.jpg"
                alt="Islandia para Mujeres — Flymingo Women"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {selected === "octubre" && (
                <div className="absolute top-5 left-5">
                  <span className="badge badge-accent" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    <span className="animate-pulse h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-brand-accent)" }} />
                    12 lugares · Oct 2026
                  </span>
                </div>
              )}
              {selected === "noviembre" && (
                <div className="absolute top-5 left-5">
                  <span className="badge badge-neon" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    <span className="animate-pulse h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-brand-neon)" }} />
                    Ultimo lugar
                  </span>
                </div>
              )}
              {selected === "febrero" && (
                <div className="absolute top-5 left-5">
                  <span className="badge badge-accent">Nueva · Feb 2027</span>
                </div>
              )}
            </div>

            {/* Highlights */}
            <div style={{ borderRadius: "20px", border: "1px solid var(--color-brand-border)", background: "white", padding: "1.5rem" }}>
              <p className="text-eyebrow-accent mb-5">Lo principal</p>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span style={{ height: "6px", width: "6px", borderRadius: "50%", background: "var(--color-brand-accent)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-brand-ink)", fontWeight: 400 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
