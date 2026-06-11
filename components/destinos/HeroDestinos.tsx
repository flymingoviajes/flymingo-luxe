import Image from "next/image";
import TrackLink from "@/components/TrackLink";

const WA_LINK = "https://wa.me/5218716887385";

export default function HeroDestinos() {
  return (
    <section className="section-hero relative overflow-hidden" style={{ minHeight: "85svh" }}>
      <div className="absolute inset-0">
        <Image
          src="/images/destinos/hero.jpg"
          alt="Destinos Flymingo Viajes"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-12">
        <div className="flex flex-col justify-end pb-20 md:pb-28" style={{ minHeight: "85svh" }}>

          <span className="badge badge-white self-start mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60 mr-1" />
            Destinos seleccionados · Itinerarios a tu medida
          </span>

          <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 7.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
            <span style={{ display: "block", fontWeight: 200, color: "white", opacity: 0.55 }}>Destinos que</span>
            <span style={{ display: "block", fontWeight: 800, color: "white" }}>se sienten</span>
            <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>hechos para ti.</span>
          </div>

          <p className="mt-8 max-w-lg text-white/55 font-light leading-loose text-base">
            Una selección de los destinos que más amamos — diseñados como itinerarios únicos, a tu estilo y tu ritmo. Y si no ves el tuyo, lo construimos desde cero.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#catalogo" className="btn btn-accent">
              Ver destinos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <TrackLink href={WA_LINK} className="btn-ghost-white" label="Destinos Hero — Disenar por WhatsApp">
              Diseñar por WhatsApp
            </TrackLink>
          </div>

        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
