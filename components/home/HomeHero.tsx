import Link from "next/link";
import TrackLink from "@/components/TrackLink";

const WA_LINK = "https://wa.me/5218716887385";
const HERO_VIDEO_SRC = "/videos/flymingo-hero.mp4";
const HERO_POSTER = "/images/hero-poster.jpg";

const TRUST = [
  { value: "200+", label: "Itinerarios diseñados" },
  { value: "4.9 ★", label: "Google Reviews" },
  { value: "6 MSI", label: "Sin intereses" },
  { value: "1 a 1", label: "Atención personal" },
];

export default function HomeHero() {
  return (
    <section className="section-hero relative overflow-hidden">
      {/* Video */}
      <div className="absolute inset-0">
        <video
          autoPlay muted loop playsInline preload="metadata"
          poster={HERO_POSTER}
          className="h-full w-full object-cover"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-12">
        <div className="flex flex-col justify-end min-h-[100svh] pb-16 md:pb-24 max-w-3xl">

          <span className="badge badge-white self-start animate-fade-up">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60 mr-1" />
            Agencia de viajes personalizados · Torreón, México
          </span>

          <h1
            className="text-display text-white mt-6 animate-fade-up stagger"
            style={{ "--delay": "0.1s" } as React.CSSProperties}
          >
            El viaje que<br />
            <span className="opacity-65 font-light">siempre</span>{" "}
            quisiste.
          </h1>

          <p
            className="mt-7 max-w-lg text-white/60 font-light leading-loose text-base animate-fade-up stagger"
            style={{ "--delay": "0.2s" } as React.CSSProperties}
          >
            No vendemos paquetes rígidos. Diseñamos itinerarios a tu medida
            — con lógica, ritmo y cada detalle listo para que solo disfrutes.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up stagger"
            style={{ "--delay": "0.3s" } as React.CSSProperties}
          >
            <TrackLink href={WA_LINK} className="btn btn-accent" label="Hero — Disenar mi viaje">
              Diseñar mi viaje
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </TrackLink>
            <Link href="/destinos" className="btn-ghost-white">Ver destinos</Link>
          </div>

          <div
            className="mt-14 grid grid-cols-2 gap-x-10 gap-y-5 md:flex md:gap-12 animate-fade-up stagger"
            style={{ "--delay": "0.45s" } as React.CSSProperties}
          >
            {TRUST.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-white font-semibold text-xl leading-none" style={{ fontFamily: "var(--font-display)" }}>
                  {item.value}
                </span>
                <span className="text-white/40 text-xs uppercase tracking-widest font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
