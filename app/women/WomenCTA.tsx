import { Button } from "@heroui/button"
import Link from "next/link"
import Image from "next/image"

export default function WomenCTA() {
  const whatsappLink =
    "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20m%C3%A1s%20info%20de%20Flymingo%20Women."

  return (
    <section className="relative overflow-hidden bg-[#1a0f16] min-h-[70vh] flex items-center">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/women/cta-bg.jpg"
          alt="Flymingo Women"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f16] via-[#1a0f16]/60 to-[#1a0f16]/40" />
      </div>

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-rose-900/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-fuchsia-950/30 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-5xl w-full px-6 py-24 md:px-10 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-8 bg-rose-400/50" />
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-rose-300/70">
            Flymingo Women
          </span>
          <div className="h-px w-8 bg-rose-400/50" />
        </div>

        {/* Título grande */}
        <h2
          className="text-white mx-auto max-w-3xl leading-[0.95] tracking-[-0.03em] mb-8"
          style={{
            fontFamily: "var(--font-display, 'Clash Display', sans-serif)",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 5rem)"
          }}
        >
          Viajes que se viven distinto cuando los compartes con{" "}
          <span className="text-rose-400">mujeres increíbles</span>
        </h2>

        {/* Subtítulo */}
        <p className="font-sans text-base leading-8 text-white/50 max-w-xl mx-auto mb-10 font-light md:text-lg">
          Descubre nuestras experiencias, pregunta por salidas activas o únete
          a la lista de espera para enterarte primero.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
          <Button
            as={Link}
            href={whatsappLink}
            target="_blank"
            radius="full"
            className="bg-white text-[#1a0f16] font-sans font-bold text-sm px-8 hover:bg-white/90 transition-colors"
          >
            Quiero informes
          </Button>
          <Button
            as={Link}
            href="#top"
            radius="full"
            variant="bordered"
            className="border-white/15 text-white/60 font-sans font-semibold text-sm px-6 hover:border-white/30 hover:text-white/80"
          >
            Volver al inicio
          </Button>
        </div>

        {/* Nota */}
        <p className="font-sans text-sm text-white/30 font-light">
          Islandia y Japón son solo el comienzo. Muy pronto, nuevas experiencias.
        </p>

      </div>
    </section>
  )
}
