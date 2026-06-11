import Image from "next/image";
import TrackLink from "@/components/TrackLink";

const WA_LINK = "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20informes%20de%20Flymingo%20Women.";

export default function WomenHero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "90svh" }}>
      <div className="absolute inset-0">
        <Image
          src="/images/women/hero-main.jpg"
          alt="Flymingo Women — Viajes para mujeres"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-12">
        <div className="flex flex-col justify-end pb-20 md:pb-32" style={{ minHeight: "90svh" }}>

          {/* Badge */}
          <span className="badge badge-white self-start mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full mr-1.5" style={{ background: "var(--color-brand-accent)" }} />
            Flymingo Women · Solo para mujeres
          </span>

          {/* Headline */}
          <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.2rem, 8.5vw, 8rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}>
            <span style={{ display: "block", fontWeight: 200, color: "white", opacity: 0.5 }}>Viajes que</span>
            <span style={{ display: "block", fontWeight: 800, color: "white" }}>se sienten</span>
            <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>diferentes.</span>
          </div>

          <p className="mt-8 max-w-lg text-white/55 font-light leading-loose text-base md:text-lg">
            Grupos de mujeres, destinos increibles y momentos que no se olvidan. Seguro, con vibra y con el acompanamiento de Flymingo en todo momento.
          </p>

          {/* Urgency pill */}
          <div className="mt-8 inline-flex items-center gap-2 self-start" style={{ background: "rgba(255,45,120,0.15)", border: "1px solid rgba(255,45,120,0.3)", borderRadius: "999px", padding: "0.4rem 1rem", backdropFilter: "blur(8px)" }}>
            <span className="animate-pulse h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-brand-neon)" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#FF6BA0" }}>
              Islandia Nov 2026 — Ultimo lugar disponible
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#islandia" className="btn btn-accent">
              Ver viaje a Islandia
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <TrackLink href={WA_LINK} className="btn-ghost-white" label="Women Hero — Quiero informes">
              Quiero informes
            </TrackLink>
          </div>

        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
