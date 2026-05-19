import { Button } from "@heroui/button"
import Link from "next/link"
import Image from "next/image"
import { womenHeroData } from "./women.data"

export default function WomenHero() {
  return (
    <section className="relative overflow-hidden bg-[#0e0a0d] min-h-screen flex items-center">

      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <Image
          src={womenHeroData.images.main}
          alt="Flymingo Women hero"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0a0d] via-[#0e0a0d]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a0d] via-transparent to-transparent" />
      </div>

      {/* Orbs decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[30%] h-[500px] w-[500px] rounded-full bg-rose-900/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-fuchsia-950/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-6 py-28 md:px-10 md:py-36">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-rose-400/60" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.28em] text-rose-300/80">
              {womenHeroData.badge}
            </span>
          </div>

          {/* Título con Clash Display via font-display */}
          <h1
            className="text-white leading-[0.92] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-display, 'Clash Display', sans-serif)", fontWeight: 700 }}
          >
            {womenHeroData.title}
          </h1>

          {/* Subtítulo */}
          <p className="mt-8 max-w-xl text-base leading-8 text-white/55 md:text-lg font-sans font-light">
            {womenHeroData.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              as={Link}
              href={womenHeroData.primaryCta.href}
              radius="full"
              className="bg-white text-[#0e0a0d] font-bold font-sans text-sm px-8 shadow-none hover:bg-white/90 transition-all"
            >
              {womenHeroData.primaryCta.label}
            </Button>
            <Button
              as={Link}
              href={womenHeroData.secondaryCta.href}
              radius="full"
              variant="bordered"
              className="border-white/20 text-white/80 font-sans font-semibold text-sm px-6 hover:border-white/40 hover:text-white"
            >
              {womenHeroData.secondaryCta.label}
            </Button>
          </div>

          {/* Imagen side flotante — visible en md+ */}
          <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-[340px]">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl">
              <Image
                src={womenHeroData.images.side}
                alt="Flymingo Women viaje"
                fill
                className="object-cover"
              />
              {/* Pill flotante */}
              <div className="absolute bottom-5 left-4 right-4">
                <div className="rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 px-4 py-3">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-rose-300/80 mb-1">
                    Flymingo Women
                  </p>
                  <p className="font-sans text-[13px] text-white/80 leading-5 font-light">
                    Viajes entre mujeres con una vibra bonita y memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
