import Image from "next/image";
import TrackLink from "@/components/TrackLink";

const WA = "https://wa.me/5218716887385?text=Hola%20Flymingo,%20quiero%20informes%20de%20Flymingo%20Weddings.";

export default function WeddingsHero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "90svh" }}>
      <div className="absolute inset-0">
        <Image
          src="/images/weddings/hero.jpg"
          alt="Flymingo Weddings — Bodas destino"
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

          <span className="badge badge-white self-start mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full mr-1.5" style={{ background: "var(--color-brand-accent)" }} />
            Flymingo Weddings · Bodas destino
          </span>

          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.2rem, 8.5vw, 8rem)", letterSpacing: "-0.04em", lineHeight: 0.88 }}>
            <span style={{ display: "block", fontWeight: 200, color: "white", opacity: 0.5 }}>Tu boda.</span>
            <span style={{ display: "block", fontWeight: 800, color: "white" }}>Un sueño.</span>
            <span style={{ display: "block", fontWeight: 800, fontStyle: "italic", color: "var(--color-brand-accent)" }}>Hecho realidad.</span>
          </h1>

          <p className="mt-8 max-w-lg text-white/55 font-light leading-loose text-base md:text-lg">
            Bodas destino curadas con intención — desde Xcaret hasta AVA, Hard Rock y Palace. Coordinamos todo: el evento, los novios y el grupo de invitados.
          </p>

          {/* Venue chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Xcaret", "AVA Cancun", "Hard Rock", "Palace / Moon Palace"].map((v) => (
              <span key={v} className="badge badge-white" style={{ fontSize: "0.62rem" }}>{v}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#colecciones" className="btn btn-accent">
              Ver colecciones
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <TrackLink href={WA} className="btn-ghost-white" label="Weddings Hero — Cotizar">
              Cotizar por WhatsApp
            </TrackLink>
          </div>

        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
