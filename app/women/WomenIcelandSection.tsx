"use client"

import { useState } from "react"
import { Button } from "@heroui/button"
import Link from "next/link"
import Image from "next/image"

const salidas = [
  {
    id: "octubre",
    fechasCortas: "Oct 2026",
    fechas: "10 — 17 oct 2026",
    fechasAlt: null,
    estado: "agotada",
    estadoLabel: "Agotada",
    disponibles: 0,
    precio: null,
    apartado: null,
    whatsapp: null,
    nota: null,
  },
  {
    id: "noviembre",
    fechasCortas: "Nov 2026",
    fechas: "14 — 21 nov 2026",
    fechasAlt: null,
    estado: "ultimos",
    estadoLabel: "Últimos lugares",
    disponibles: 3,
    precio: "$84,890",
    apartado: "$10,000",
    whatsapp:
      "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20m%C3%A1s%20info%20del%20viaje%20Islandia%20Nov%202026.",
    nota: "Sin visa americana también hay ruta vía Europa.",
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
    whatsapp:
      "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20m%C3%A1s%20info%20del%20viaje%20Islandia%20Feb%202027.",
    nota: null,
  },
]

const highlights = [
  "Auroras boreales",
  "Círculo de Oro",
  "Costa Sur de Islandia",
  "Aguas termales y paisajes épicos",
  "Experiencia entre mujeres",
  "Acompañamiento Flymingo",
]

export default function WomenIcelandSection() {
  const [selected, setSelected] = useState("noviembre")
  const salida = salidas.find((s) => s.id === selected)!
  const brochureUrl = "/docs/ISLANDIA-x-MUJERES-2026.pdf"

  return (
    <section id="islandia" className="relative bg-[#faf6f9] overflow-hidden">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-rose-100 hidden lg:block" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-rose-400" />
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-rose-400">
            Flymingo Women · Viaje insignia
          </span>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          {/* ── Columna izquierda ── */}
          <div>
            <h2
              className="text-[#1a0f16] leading-[0.95] tracking-[-0.035em] mb-4"
              style={{
                fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                fontWeight: 700,
                fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
              }}
            >
              Islandia<br />
              <span className="text-rose-400">para Mujeres</span>
            </h2>

            <p className="font-sans text-base leading-8 text-[#5c3d52] max-w-lg mb-10 font-normal">
              Nuestro viaje más icónico. Auroras boreales, paisajes épicos y
              momentos que no se olvidan, en un grupo de mujeres con la misma
              energía de aventura.
            </p>

            {/* ── Selector de salidas ── */}
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-[#5c3d52]/50 mb-3">
              Elige tu salida
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {salidas.map((s) => {
                const isSelected = selected === s.id
                const isAgotada = s.estado === "agotada"

                const badgeClass =
                  s.estado === "agotada"
                    ? "bg-zinc-100 text-zinc-400 border border-zinc-200"
                    : s.estado === "ultimos"
                    ? "bg-rose-50 text-rose-600 border border-rose-200"
                    : "bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-200"

                const borderClass = isSelected
                  ? s.estado === "agotada"
                    ? "border-zinc-300"
                    : s.estado === "ultimos"
                    ? "border-rose-300 ring-1 ring-rose-200 shadow-sm"
                    : "border-fuchsia-300 ring-1 ring-fuchsia-100 shadow-sm"
                  : "border-[#e8dde5]"

                const accentBar =
                  s.estado === "ultimos"
                    ? "bg-rose-400"
                    : s.estado === "nueva"
                    ? "bg-gradient-to-b from-fuchsia-400 to-rose-400"
                    : "bg-zinc-300"

                const urgencyText =
                  s.estado === "ultimos"
                    ? `¡Solo ${s.disponibles} lugares!`
                    : s.estado === "nueva"
                    ? "¡Lugares disponibles!"
                    : null

                const urgencyColor =
                  s.estado === "ultimos" ? "text-rose-500" : "text-fuchsia-500"

                return (
                  <button
                    key={s.id}
                    onClick={() => !isAgotada && setSelected(s.id)}
                    disabled={isAgotada}
                    className={[
                      "relative flex-1 rounded-2xl border bg-white px-4 py-4 text-left transition-all duration-200 overflow-hidden",
                      isAgotada ? "cursor-not-allowed" : "cursor-pointer hover:shadow-md",
                      borderClass,
                    ].join(" ")}
                  >
                    {isSelected && !isAgotada && (
                      <div className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full ${accentBar}`} />
                    )}

                    <span className={`inline-flex rounded-full px-2.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-[0.18em] mb-2 ${badgeClass}`}>
                      {s.estadoLabel}
                    </span>

                    <p
                      className={[
                        "font-sans text-sm font-bold tracking-tight leading-tight",
                        isAgotada ? "text-zinc-400" : "text-[#1a0f16]",
                      ].join(" ")}
                      style={{ fontFamily: "var(--font-display, 'Clash Display', sans-serif)" }}
                    >
                      {s.fechasCortas}
                    </p>

                    <p className={`font-sans text-[11px] mt-0.5 ${isAgotada ? "text-zinc-300" : "text-[#5c3d52]/60"}`}>
                      {s.fechas}
                    </p>

                    {urgencyText && (
                      <p className={`font-sans text-[10px] font-bold mt-1.5 ${urgencyColor}`}>
                        {urgencyText}
                      </p>
                    )}
                  </button>
                )
              })}
            </div>

            {/* ── Panel de detalle ── */}
            <div
              key={selected}
              className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
            >
              {salida.estado === "agotada" ? (
                <p className="font-sans text-sm text-zinc-400 italic">
                  Esta salida ya está agotada. Selecciona otra fecha disponible.
                </p>
              ) : (
                <>
                  {/* Fechas */}
                  <div className="mb-5">
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#5c3d52]/50 mb-1">
                      Fechas
                    </p>
                    <p
                      className="text-[#1a0f16] leading-tight"
                      style={{
                        fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                        fontWeight: 600,
                        fontSize: "1.35rem",
                      }}
                    >
                      {salida.fechas}
                    </p>
                    {salida.fechasAlt && (
                      <p className="font-sans text-sm text-[#5c3d52]/60 mt-1 flex items-center gap-2 flex-wrap">
                        <span>o {salida.fechasAlt}</span>
                        <span className="inline-flex rounded-full bg-fuchsia-50 border border-fuchsia-200 px-2.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-[0.16em] text-fuchsia-600">
                          sin visa americana
                        </span>
                      </p>
                    )}
                  </div>

                  {/* Precios */}
                  <div className="flex gap-8 mb-5 pb-5 border-b border-rose-50">
                    <div>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#5c3d52]/40 mb-1">
                        Precio
                      </p>
                      <p
                        className="text-[#1a0f16] leading-none tracking-[-0.03em]"
                        style={{
                          fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                          fontWeight: 700,
                          fontSize: "2rem",
                        }}
                      >
                        {salida.precio}
                      </p>
                      <p className="font-sans text-xs text-[#5c3d52]/50 mt-0.5">MXN / persona</p>
                    </div>
                    <div className="w-px bg-rose-100" aria-hidden />
                    <div>
                      <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#5c3d52]/40 mb-1">
                        Apartado
                      </p>
                      <p
                        className="text-rose-500 leading-none tracking-[-0.03em]"
                        style={{
                          fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                          fontWeight: 700,
                          fontSize: "2rem",
                        }}
                      >
                        {salida.apartado}
                      </p>
                      <p className="font-sans text-xs text-[#5c3d52]/50 mt-0.5">MXN · asegura tu lugar</p>
                    </div>
                  </div>

                  {/* Nota */}
                  {salida.nota && (
                    <div className="flex gap-2 items-start mb-5">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-rose-300 shrink-0" aria-hidden />
                      <p className="font-sans text-sm leading-6 text-[#5c3d52]/70">{salida.nota}</p>
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      as={Link}
                      href={salida.whatsapp!}
                      target="_blank"
                      radius="full"
                      className="bg-[#1a0f16] text-white font-sans font-bold text-sm px-7 hover:bg-[#2d1a28] transition-colors"
                    >
                      Pedir informes
                    </Button>
                    <Button
                      as={Link}
                      href={brochureUrl}
                      target="_blank"
                      radius="full"
                      variant="bordered"
                      className="border-rose-200 text-[#1a0f16] font-sans font-semibold text-sm px-6 bg-white hover:border-rose-400"
                    >
                      Descargar brochure
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ── Columna derecha — imagen sticky + highlights ── */}
          <div className="space-y-5 lg:sticky lg:top-10">

            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-xl shadow-rose-950/10">
              <Image
                src="/images/women/islandia.jpg"
                alt="Islandia para Mujeres"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f16]/60 via-transparent to-transparent" />

              {/* Pill urgencia flotante */}
              {selected === "noviembre" && (
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/90 backdrop-blur-sm px-4 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden />
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                      ¡Solo 3 lugares!
                    </span>
                  </div>
                </div>
              )}
              {selected === "febrero" && (
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-600/90 backdrop-blur-sm px-4 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden />
                    <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                      Nueva · Feb 2027
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Highlights */}
            <div className="rounded-2xl bg-white border border-rose-100 p-6">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-rose-400 mb-4">
                Lo principal
              </p>
              <ul className="space-y-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm text-[#5c3d52]">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-300 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
