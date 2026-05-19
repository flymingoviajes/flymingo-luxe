import { Button } from "@heroui/button"
import Link from "next/link"
import Image from "next/image"

export default function WomenJapanSection() {
  const whatsappLink =
    "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20m%C3%A1s%20info%20del%20viaje%20Jap%C3%B3n%20para%20Mujeres."
  const brochureUrl = "/docs/JAPON-PARA-MUJERES.pdf"

  const highlights = [
    "Tokio, Osaka y Nara",
    "Cultura, modernidad y tradición",
    "Tren bala y experiencias icónicas",
    "Viaje entre mujeres",
    "Acompañamiento Flymingo",
  ]

  return (
    <section id="japon" className="relative bg-[#0e0a0d] overflow-hidden">

      {/* Orb decorativo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-fuchsia-950/40 blur-[140px] pointer-events-none" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">

        {/* Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-8 bg-fuchsia-400/60" />
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-fuchsia-300/70">
            Flymingo Women · Nueva experiencia
          </span>
          <span className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-600 to-rose-500 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white">
            Nuevo
          </span>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Columna izquierda — imagen + highlights */}
          <div className="space-y-5 order-2 lg:order-1">

            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-black/50">
              <Image
                src="/images/women/japon.jpg"
                alt="Japón para Mujeres"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a0d]/70 via-transparent to-transparent" />
            </div>

            {/* Highlights dark */}
            <div className="rounded-2xl bg-white/5 border border-white/8 p-6">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-fuchsia-300/70 mb-4">
                Lo principal
              </p>
              <ul className="space-y-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-sans text-sm text-white/55">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/60 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal para */}
            <div className="rounded-2xl bg-white/5 border border-white/8 px-5 py-4">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-fuchsia-300/70 mb-2">
                Ideal para
              </p>
              <p className="font-sans text-sm leading-6 text-white/55">
                Mujeres que sueñan con Japón y quieren vivirlo de una forma
                bonita y memorable, acompañadas por otras mujeres con la misma
                ilusión de descubrir Asia.
              </p>
            </div>

          </div>

          {/* Columna derecha — contenido */}
          <div className="order-1 lg:order-2">

            <h2
              className="text-white leading-[0.95] tracking-[-0.035em] mb-6"
              style={{
                fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                fontWeight: 700,
                fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
              }}
            >
              Japón<br />
              <span className="text-fuchsia-400">para Mujeres</span>
            </h2>

            <p className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-white/35 mb-8">
              24 oct — 04 nov 2026
            </p>

            <p className="font-sans text-base leading-8 text-white/55 md:text-[1.05rem] max-w-lg mb-8 font-light">
              Una nueva experiencia de Flymingo Women para vivir Japón entre
              mujeres. Tradición, modernidad y una energía única en uno de los
              destinos más soñados del mundo.
            </p>

            {/* Alert lugares limitados */}
            <div className="relative rounded-2xl border border-fuchsia-800/40 bg-fuchsia-950/30 px-5 py-4 mb-10 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-fuchsia-500/60 rounded-l-2xl" />
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-fuchsia-300/80 mb-1">
                Lugares limitados
              </p>
              <p className="font-sans text-sm leading-6 text-white/55">
                Este viaje es <strong className="text-white/80">nuevo</strong> y ya solo quedan{" "}
                <strong className="text-fuchsia-300">10 lugares disponibles</strong>.
                Si te interesa Japón, este es el momento.
              </p>
            </div>

            {/* Precios */}
            <div className="flex gap-8 mb-10">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">
                  Precio
                </p>
                <p
                  className="text-white leading-none tracking-[-0.04em]"
                  style={{
                    fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)"
                  }}
                >
                  $89,385
                </p>
                <p className="font-sans text-xs text-white/30 mt-1 font-medium">MXN / persona</p>
              </div>

              <div className="w-px bg-white/10" aria-hidden />

              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">
                  Apartado
                </p>
                <p
                  className="text-fuchsia-400 leading-none tracking-[-0.04em]"
                  style={{
                    fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)"
                  }}
                >
                  $10,000
                </p>
                <p className="font-sans text-xs text-white/30 mt-1 font-medium">MXN · asegura tu lugar</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                as={Link}
                href={whatsappLink}
                target="_blank"
                radius="full"
                className="bg-white text-[#0e0a0d] font-sans font-bold text-sm px-7 hover:bg-white/90 transition-colors"
              >
                Pedir informes
              </Button>
              <Button
                as={Link}
                href={brochureUrl}
                target="_blank"
                radius="full"
                variant="bordered"
                className="border-white/15 text-white/70 font-sans font-semibold text-sm px-6 hover:border-white/35 hover:text-white"
              >
                Descargar brochure
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
