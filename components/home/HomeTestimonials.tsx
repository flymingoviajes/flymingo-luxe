import { getGoogleReviews, initials } from "@/lib/google-reviews";

type Testimonial = {
  text: string;
  name: string;
  detail: string;
  initials: string;
  rating?: number;
};

const FALLBACK: Testimonial[] = [
  {
    text: "Nos armó una ruta perfecta para Japón. Disfrutamos cada día sin correr, los hoteles estaban en zonas increíbles. Cero estrés y 100% a nuestro ritmo.",
    name: "Daniela R.",
    detail: "Luna de miel · Japón",
    initials: "DR",
    rating: 5,
  },
  {
    text: "Todo se sentía premium pero sin complicarnos nada. El itinerario de Islandia estuvo perfecto — vimos las auroras y el roadtrip fluyó solo.",
    name: "Carlos y Fernanda",
    detail: "Pareja · Islandia",
    initials: "CF",
    rating: 5,
  },
  {
    text: "Viajamos 4 amigas a Europa y fue el mejor viaje de nuestras vidas. La ruta tenía lógica, no regresamos a ningún lugar. Todo pensado al detalle.",
    name: "Sofía M.",
    detail: "Grupo de amigas · Europa",
    initials: "SM",
    rating: 5,
  },
];

export default async function HomeTestimonials() {
  const googleReviews = await getGoogleReviews();

  const testimonials: Testimonial[] =
    googleReviews.length >= 2
      ? googleReviews.slice(0, 5).map((r) => ({
          text: r.text,
          name: r.author_name,
          detail: "Google Reviews",
          initials: initials(r.author_name),
          rating: r.rating,
        }))
      : FALLBACK;

  const avgRating =
    testimonials.reduce((s, t) => s + (t.rating ?? 5), 0) / testimonials.length;

  return (
    <section style={{ background: "var(--color-brand-surface)" }}>
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-12 lg:pt-44 lg:pb-36">

        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <p className="text-eyebrow-accent mb-10">Lo que dicen</p>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              <span style={{ display: "block", fontWeight: 800, color: "var(--color-brand-ink)" }}>Historias reales.</span>
              <span style={{ display: "block", fontWeight: 200, fontStyle: "italic", color: "var(--color-brand-ink)", opacity: 0.28 }}>Viajes irrepetibles.</span>
            </div>
          </div>
          <div className="flex items-center gap-3 pb-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-3.5 w-3.5 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-caption">
              {avgRating.toFixed(1)} en Google Reviews
              {googleReviews.length > 0 && (
                <span style={{ marginLeft: "0.4rem", color: "var(--color-brand-accent)" }}>· {googleReviews.length} reseñas</span>
              )}
            </span>
          </div>
        </div>

        {/* Pull quotes */}
        <div className="scroll-clip -mx-6 md:mx-0">
          <div className="scroll-row gap-6 px-6 pb-6 md:grid md:grid-cols-3 md:gap-0 md:overflow-visible md:px-0 md:pb-0 md:divide-x md:divide-brand-border">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name + t.text.slice(0, 20)} className="flex-none snap-start w-[84vw] md:w-auto md:max-w-none">
                <PullQuote {...t} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function PullQuote({ text, name, detail, initials: ini, rating }: Testimonial) {
  return (
    <div className="flex flex-col py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 h-full">

      {/* Stars */}
      {rating && (
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="h-3 w-3 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Decorative quote mark */}
      <span
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "5rem",
          lineHeight: 1,
          color: "var(--color-brand-accent)",
          opacity: 0.15,
          display: "block",
          marginBottom: "-0.75rem",
        }}
      >
        &ldquo;
      </span>

      <p
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
          letterSpacing: "-0.015em",
          color: "var(--color-brand-ink)",
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {text}
      </p>

      {/* Attribution */}
      <div className="mt-10 flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
          style={{
            background: "var(--color-brand-accent-soft)",
            color: "var(--color-brand-accent)",
            border: "1px solid rgba(244,120,152,0.2)",
            fontFamily: "var(--font-display)",
          }}
        >
          {ini}
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "-0.015em", color: "var(--color-brand-ink)" }}>
            {name}
          </p>
          <p className="text-caption">{detail}</p>
        </div>
      </div>
    </div>
  );
}
