import { Button } from "@heroui/button"
import Link from "next/link"
import Image from "next/image"
import { womenHeroData } from "./women.data"

export default function WomenHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fff6fb_0%,#fff0f7_45%,#ffffff_100%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-[-8%] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute top-20 right-[-6%] h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-rose-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-600 shadow-sm backdrop-blur">
              {womenHeroData.badge}
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-[#4c1f3d] md:text-7xl">
              {womenHeroData.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#744c67] md:text-lg">
              {womenHeroData.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                as={Link}
                href={womenHeroData.primaryCta.href}
                radius="full"
                className="bg-pink-500 px-6 text-white shadow-lg shadow-pink-200"
              >
                {womenHeroData.primaryCta.label}
              </Button>

              <Button
                as={Link}
                href={womenHeroData.secondaryCta.href}
                radius="full"
                variant="bordered"
                className="border-pink-200 bg-white text-pink-700"
              >
                {womenHeroData.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-pink-100 bg-white p-4 shadow-[0_20px_80px_rgba(236,72,153,0.12)] sm:translate-y-8">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={womenHeroData.images.main}
                    alt="Flymingo Women hero"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[2rem] border border-pink-100 bg-white p-4 shadow-[0_20px_80px_rgba(236,72,153,0.12)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={womenHeroData.images.side}
                    alt="Viajes para mujeres Flymingo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 max-w-xs rounded-[1.5rem] border border-pink-100 bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-500">
                Flymingo Women
              </p>
              <p className="mt-2 text-sm leading-6 text-[#744c67]">
                Viajes entre mujeres con una vibra bonita, cuidada y profundamente memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}