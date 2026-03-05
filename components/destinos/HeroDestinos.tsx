import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const WA_LINK = "https://wa.me/5218716887385";

const HERO_IMAGE = {
  src: "/images/destinos/hero.jpg",
  alt: "Destinos Flymingo Viajes — viajes a la medida",
};

export default function HeroDestinos() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlays premium */}
        <div className="absolute inset-0 bg-black/35 dark:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.18),transparent_45%)] opacity-80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            Destinos seleccionados • Estilo luxe • Itinerarios flexibles
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
            Destinos que se sienten
            <span className="block text-white/75">hechos para ti.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Aquí verás algunos de nuestros destinos favoritos. Pero lo más importante:
            <span className="font-medium text-white"> diseñamos cualquier destino del mundo</span>,
            con el ritmo, estilo y detalles que tú quieres.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Primary (filled) */}
            <Button
              as={Link}
              href="#catalogo"
              radius="full"
              className="bg-white text-neutral-900 hover:bg-white/90 font-medium"
            >
              Ver destinos
            </Button>

            {/* Secondary (glass) */}
            <Button
              as={Link}
              href={WA_LINK}
              isExternal
              radius="full"
              className="border border-white/25 bg-white/10 text-white hover:bg-white/15 backdrop-blur"
            >
              Diseñar por WhatsApp
            </Button>

            {/* Tertiary (small glass) */}
            <Button
              as={Link}
              href="#personalizado"
              size="sm"
              radius="full"
              className="border border-white/15 bg-white/10 text-white/90 hover:bg-white/15 backdrop-blur sm:ml-2"
            >
              Ver cómo funciona
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/65">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              Rutas con lógica
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              Ajustes reales
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
              Atención 1:1
            </span>
          </div>

          {/* Scroll indicator */}
          <div className="mt-10 inline-flex items-center gap-2 text-xs text-white/70">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur">
              ↓
            </span>
            <span>Scroll</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}