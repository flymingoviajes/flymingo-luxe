import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const WA_LINK = "https://wa.me/5218716887385";

// 🔥 Pon tu video aquí (ideal .mp4 optimizado)
// Ej: "/videos/flymingo-hero.mp4"
const HERO_VIDEO_SRC = "/videos/flymingo-hero.mp4";

// Opcional: poster para cuando el video aún no carga
const HERO_POSTER = "/images/hero-poster.jpg";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Overlays (premium) */}
        {/* Base darkening for readability */}
        <div className="absolute inset-0 bg-black/45 dark:bg-black/55" />

        {/* Subtle luxe gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-background/95 dark:to-background" />

        {/* Soft highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.16),transparent_45%)] dark:bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.10),transparent_45%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            Viajes personalizados • Atención 1:1 • 6 MSI
          </p>

          {/* Headline */}
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
            Viajes a tu medida.
            <span className="block text-white/75">Diseñados con estilo y precisión.</span>
          </h1>

          {/* Sub */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Creamos itinerarios únicos y flexibles. Nada de paquetes rígidos.
            Aquí el viaje se adapta a tu ritmo, tus gustos y tu forma de disfrutar.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              as={Link}
              href="/destinos"
              radius="full"
              className="bg-white text-neutral-900 hover:bg-white/90 font-medium"
            >
              Ver destinos
            </Button>

            <Button
              as={Link}
              href={WA_LINK}
              isExternal
              variant="bordered"
              radius="full"
              className="border-white/25 text-white hover:bg-white/10"
            >
              Diseñar por WhatsApp
            </Button>
          </div>

          {/* Stats (glass) */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <HeroStat label="Itinerarios" value="Únicos" />
            <HeroStat label="Ajustes" value="Reales" />
            <HeroStat label="Estilo" value="Luxe" />
          </div>

          {/* Micro trust line */}
          <p className="mt-6 text-xs text-white/65">
            Diseñamos viajes en todo el mundo • Rutas con lógica • Detalles listos • Cero estrés
          </p>
        </div>
      </div>

      {/* Bottom fade for seamless transition to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
      <p className="text-xs text-white/70">{label}</p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );
}