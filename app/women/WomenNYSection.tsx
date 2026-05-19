import { Button } from "@heroui/button"
import Link from "next/link"
import Image from "next/image"

const incluye = [
  { emoji: "✈️", label: "Vuelo redondo directo", sub: "MEX–JFK · Aeroméxico / Delta" },
  { emoji: "🏨", label: "Holiday Inn NYC", sub: "Lower East Side · desayuno incluido" },
  { emoji: "🗽", label: "New York CityPASS", sub: "Empire State + 4 atracciones" },
  { emoji: "🧭", label: "Asesoría Flymingo", sub: "Acompañamiento experto" },
]

const itinerario = [
  { dia: "Día 1", titulo: "Llegada a Nueva York", desc: "Vuelo MEX–JFK. Tarde libre para comenzar a respirar la ciudad." },
  { dia: "Día 2", titulo: "Primer encuentro con Manhattan", desc: "Times Square, Quinta Avenida y CityPASS activo." },
  { dia: "Día 3", titulo: "Miradores y museos", desc: "Empire State Building, Historia Natural y Central Park." },
  { dia: "Día 4", titulo: "Estatua de la Libertad o Top of the Rock", desc: "Tu elección de atracciones adicionales del CityPASS." },
  { dia: "Día 5", titulo: "Compras y experiencias urbanas", desc: "Día libre — SoHo, Brooklyn, High Line o lo que más te llame." },
  { dia: "Día 6", titulo: "Regreso a México", desc: "Vuelo JFK–MEX. Salida 08:40 · Llegada 13:00." },
]

const pagos = ["Transferencia bancaria", "Tarjeta de crédito o débito", "6 MSI con cualquier tarjeta"]

export default function WomenNYCSection() {
  const whatsapp =
    "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20m%C3%A1s%20info%20del%20viaje%20Nueva%20York%20entre%20Amigas."
  const brochureUrl = "/docs/NUEVA-YORK-ENTRE-AMIGAS.pdf"

  return (
    <section id="nueva-york" className="relative bg-white overflow-hidden">

      {/* Separador visual top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-100 to-transparent" />

      {/* Número decorativo fondo */}
      <div
        className="absolute -top-4 -right-4 select-none pointer-events-none leading-none font-black text-[18rem] text-slate-50"
        style={{ fontFamily: "var(--font-display, 'Clash Display', sans-serif)" }}
        aria-hidden
      >
        NY
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#4a3f6b]" />
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#4a3f6b]">
            Flymingo Women · Nueva York
          </span>
        </div>

        {/* Layout principal: info izquierda, imagen + itinerario derecha */}
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ── Columna izquierda ── */}
          <div>

            {/* Título */}
            <h2
              className="text-[#0d0a1a] leading-[0.95] tracking-[-0.035em] mb-4"
              style={{
                fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                fontWeight: 700,
                fontSize: "clamp(2.75rem, 6vw, 5.5rem)",
              }}
            >
              Nueva York<br />
              <span className="text-[#6d5acd]">entre Amigas</span>
            </h2>

            {/* Fecha */}
            <p className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-[#4a3f6b]/50 mb-8">
              03 — 08 nov 2026
            </p>

            {/* Descripción */}
            <p className="font-sans text-base leading-8 text-[#4a3f6b] max-w-lg mb-8 font-normal">
              Vive la magia de la Gran Manzana en compañía — vuelo directo desde
              Ciudad de México, hotél céntrico, CityPASS incluido y toda la
              energía de Nueva York para disfrutar con amigas.
            </p>

            {/* Grid qué incluye */}
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#4a3f6b]/40 mb-3">
              Tu viaje incluye
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {incluye.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-100 bg-[#f9f8ff] px-4 py-3"
                >
                  <span className="text-lg mb-1 block">{item.emoji}</span>
                  <p className="font-sans text-[13px] font-bold text-[#0d0a1a] leading-tight">
                    {item.label}
                  </p>
                  <p className="font-sans text-[11px] text-[#4a3f6b]/55 mt-0.5 leading-4">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Precio */}
            <div className="flex gap-8 mb-6 pb-6 border-b border-slate-100">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#4a3f6b]/40 mb-1">
                  Precio
                </p>
                <p
                  className="text-[#0d0a1a] leading-none tracking-[-0.04em]"
                  style={{
                    fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  $49,890
                </p>
                <p className="font-sans text-xs text-[#4a3f6b]/50 mt-0.5">MXN / persona doble</p>
              </div>

              <div className="w-px bg-slate-100" aria-hidden />

              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#4a3f6b]/40 mb-1">
                  Apartado
                </p>
                <p
                  className="text-[#6d5acd] leading-none tracking-[-0.04em]"
                  style={{
                    fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  $5,000
                </p>
                <p className="font-sans text-xs text-[#4a3f6b]/50 mt-0.5">MXN · asegura tu lugar</p>
              </div>
            </div>

            {/* Formas de pago */}
            <div className="flex flex-wrap gap-2 mb-8">
              {pagos.map((p) => (
                <span
                  key={p}
                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-sans text-[11px] font-semibold text-[#4a3f6b]/70"
                >
                  {p}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                as={Link}
                href={whatsapp}
                target="_blank"
                radius="full"
                className="bg-[#0d0a1a] text-white font-sans font-bold text-sm px-7 hover:bg-[#1a1530] transition-colors"
              >
                Pedir informes
              </Button>
              <Button
                as={Link}
                href={brochureUrl}
                target="_blank"
                radius="full"
                variant="bordered"
                className="border-slate-200 text-[#0d0a1a] font-sans font-semibold text-sm px-6 bg-white hover:border-[#6d5acd]/40"
              >
                Descargar brochure
              </Button>
            </div>

          </div>

          {/* ── Columna derecha — imagen + itinerario ── */}
          <div className="space-y-5 lg:sticky lg:top-10">

            {/* Imagen */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-xl shadow-slate-200/80">
              <Image
                src="/images/nyc/hero.jpg"
                alt="Nueva York entre Amigas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1a]/65 via-transparent to-transparent" />
              {/* Pill vuelo directo */}
              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#6d5acd]/90 backdrop-blur-sm px-4 py-2">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                    ✈ Vuelo directo MEX–JFK
                  </span>
                </div>
              </div>
            </div>

            {/* Itinerario compacto */}
            <div className="rounded-2xl bg-[#f9f8ff] border border-slate-100 p-5">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#6d5acd] mb-4">
                Itinerario de 6 días
              </p>
              <div className="space-y-3">
                {itinerario.map((item, i) => (
                  <div key={item.dia} className="flex gap-3">
                    {/* Línea lateral */}
                    <div className="flex flex-col items-center gap-1 pt-0.5">
                      <div className="h-4 w-4 rounded-full border-2 border-[#6d5acd]/30 bg-[#6d5acd]/10 shrink-0 flex items-center justify-center">
                        <span className="font-sans text-[8px] font-black text-[#6d5acd]/70">
                          {i + 1}
                        </span>
                      </div>
                      {i < itinerario.length - 1 && (
                        <div className="w-px flex-1 bg-[#6d5acd]/15 min-h-[12px]" aria-hidden />
                      )}
                    </div>
                    <div className="pb-1">
                      <p className="font-sans text-[12px] font-bold text-[#0d0a1a] leading-tight">
                        {item.titulo}
                      </p>
                      <p className="font-sans text-[11px] text-[#4a3f6b]/55 mt-0.5 leading-4">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-sans text-[10px] text-[#4a3f6b]/35 mt-4 leading-4">
                Itinerario sugerido · sujeto a ajustes por operación o disponibilidad.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
