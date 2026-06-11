import Image from "next/image";
import Link from "next/link";
import type { DestinationCard } from "./types";

export default function DestinosCatalogo({ items }: { items: DestinationCard[] }) {
  const [featured, second, ...rest] = items;

  return (
    <section id="catalogo" style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-36">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-eyebrow-accent mb-8">Destinos seleccionados</p>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Los que más amamos.</span>
              <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.3 }}>Y el tuyo también.</span>
            </div>
          </div>
          <p className="hidden md:block text-caption max-w-xs text-right">
            Diseñamos cualquier destino del mundo. Si no lo ves aquí, escríbenos.
          </p>
        </div>

        {/* Row 1: featured (2/3) + second (1/3) */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {featured && <DestCard dest={featured} className="md:col-span-2" height="h-80 md:h-[500px]" />}
          {second && <DestCard dest={second} height="h-72 md:h-[500px]" />}
        </div>

        {/* Row 2: rest equally split */}
        {rest.length > 0 && (
          <div className={`mt-3 grid grid-cols-1 gap-3 md:grid-cols-${Math.min(rest.length, 3)}`}>
            {rest.map((d) => (
              <DestCard key={d.slug} dest={d} height="h-64 md:h-72" />
            ))}
          </div>
        )}

        {/* Footer nudge */}
        <div className="mt-12 flex items-center gap-5">
          <span className="divider-accent" />
          <p className="text-caption">
            ¿No ves tu destino? Lo diseñamos desde cero.{" "}
            <a href="https://wa.me/5218716887385" target="_blank" rel="noreferrer" className="font-semibold" style={{ color: "var(--color-brand-accent)" }}>
              Escríbenos →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function DestCard({
  dest,
  height,
  className = "",
}: {
  dest: DestinationCard;
  height: string;
  className?: string;
}) {
  return (
    <Link
      href={`/destinos/${dest.slug}`}
      className={`group relative block overflow-hidden ${height} ${className}`}
      style={{ borderRadius: "20px" }}
    >
      <Image
        src={dest.imageSrc}
        alt={dest.imageAlt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
      />

      {/* Deep cinematic gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(10,5,8,0.92) 0%, rgba(10,5,8,0.25) 50%, transparent 80%)" }}
      />

      {/* Tag */}
      {dest.tag && (
        <div className="absolute top-5 left-5 z-10">
          <span className="badge badge-white">{dest.tag}</span>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        {/* Region + highlight */}
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>
          {dest.region}{dest.highlight ? ` · ${dest.highlight}` : ""}
        </p>

        {/* Title */}
        <p
          className="text-white"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", letterSpacing: "-0.035em", lineHeight: 0.95 }}
        >
          {dest.title}
        </p>

        {/* Price */}
        {dest.priceFrom && (
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(0.9rem, 1.2vw, 1rem)", letterSpacing: "-0.01em", color: "var(--color-brand-accent)", marginTop: "0.5rem", lineHeight: 1 }}>
            {dest.priceFrom}
          </p>
        )}

        {/* CTA on hover */}
        <p className="mt-3 text-white text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2">
          Ver itinerario
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </p>
      </div>
    </Link>
  );
}
