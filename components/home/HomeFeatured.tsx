import Image from "next/image";
import Link from "next/link";

// ─── Product Lines ────────────────────────────────────────────────────────────

const LINES = [
  {
    key: "destinos",
    label: "Destinos",
    eyebrow: "Itinerarios personalizados",
    title: "El mundo,\na tu ritmo.",
    price: "desde $84,890 MXN",
    cta: "Explorar",
    href: "/destinos",
    image: "/images/featured/islandia.jpg",
    neon: false,
  },
  {
    key: "women",
    label: "Women",
    eyebrow: "Flymingo Women",
    title: "Viaja con\ntu tribu.",
    price: "Islandia · Nov 2026 · $79,890",
    cta: "Ver viaje",
    href: "/women",
    image: "/images/featured/women.jpg",
    neon: true,
  },
  {
    key: "weddings",
    label: "Weddings",
    eyebrow: "Flymingo Weddings",
    title: "Tu boda,\nun sueño.",
    price: "Xcaret · AVA · Hard Rock · Nobu",
    cta: "Cotizar",
    href: "/weddings",
    image: "/images/featured/weddings.jpg",
    neon: false,
  },
];

// ─── Destination tiles ────────────────────────────────────────────────────────

const DESTINATIONS = [
  {
    key: "japon",
    title: "Japón",
    region: "Asia",
    tag: "Nuevo",
    price: "desde $90,890",
    image: "/images/featured/japon.jpg",
    href: "/destinos/japon",
  },
  {
    key: "europa",
    title: "Europa a tu ritmo",
    region: "Europa",
    image: "/images/featured/europa.jpg",
    href: "/destinos",
  },
  {
    key: "honeymoon",
    title: "Honeymoon Luxe",
    region: "Mundo",
    tag: "Luxe",
    image: "/images/featured/honeymoon.jpg",
    href: "/destinos",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomeFeatured() {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-12 lg:pt-44 lg:pb-28">

        {/* Header — editorial, bigger type */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-eyebrow-accent mb-10">Experiencias Flymingo</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Tres formas de vivir</span>
              <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.25 }}>el viaje perfecto.</span>
            </h2>
          </div>
          <Link
            href="/destinos"
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-50"
            style={{ color: "var(--color-brand-ink)" }}
          >
            Ver todo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Product line grid — cinematic, minimal chrome */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {LINES.map((line, i) => (
            <LineCard key={line.key} line={line} tall={i === 0} />
          ))}
        </div>

        {/* Destination tiles */}
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <DestCard key={d.key} dest={d} />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 flex items-center gap-5">
          <span className="divider-accent" />
          <p className="text-caption">
            Diseñamos viajes a cualquier destino del mundo. Si no ves el tuyo, escríbenos.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Line Card ────────────────────────────────────────────────────────────────

function LineCard({ line, tall }: { line: (typeof LINES)[number]; tall: boolean }) {
  return (
    <Link
      href={line.href}
      className="group relative block overflow-hidden"
      style={{
        borderRadius: "20px",
        height: tall ? "clamp(380px, 55vw, 620px)" : "clamp(340px, 48vw, 540px)",
      }}
    >
      {/* Image */}
      <Image
        src={line.image}
        alt={line.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Deep cinematic gradient — no cheap overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(10,5,8,0.9) 0%, rgba(10,5,8,0.3) 45%, transparent 75%)",
        }}
      />

      {/* Top label — ultra minimal */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          {line.eyebrow}
        </span>
        {line.neon && (
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "0.55rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#FF2D78",
              background: "rgba(255,45,120,0.12)",
              border: "1px solid rgba(255,45,120,0.25)",
              padding: "0.25rem 0.7rem",
              borderRadius: "100px",
            }}
          >
            Próximo viaje
          </span>
        )}
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-7">
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "0.7rem",
          }}
        >
          {line.price}
        </p>

        <p
          className="text-white whitespace-pre-line"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            letterSpacing: "-0.035em",
            lineHeight: 0.9,
          }}
        >
          {line.title}
        </p>

        {/* CTA — fade in on hover */}
        <span className="mt-5 inline-flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {line.cta}
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

// ─── Destination Card ─────────────────────────────────────────────────────────

function DestCard({ dest }: { dest: (typeof DESTINATIONS)[number] }) {
  return (
    <Link
      href={dest.href}
      className="group relative block overflow-hidden h-56 md:h-64"
      style={{ borderRadius: "16px" }}
    >
      <Image
        src={dest.image}
        alt={dest.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(10,5,8,0.8) 0%, transparent 60%)",
        }}
      />

      {"tag" in dest && dest.tag && (
        <div className="absolute top-4 left-4 z-10">
          <span className="badge badge-white">{dest.tag}</span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 300,
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "0.4rem",
          }}
        >
          {dest.region}
          {"price" in dest && dest.price ? ` · ${dest.price}` : ""}
        </p>
        <p
          className="text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          {dest.title}
        </p>
      </div>
    </Link>
  );
}
