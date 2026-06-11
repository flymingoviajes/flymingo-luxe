import Image from "next/image";

const STEPS = [
  {
    num: "01",
    title: "No es un paquete. Es tu ruta.",
    desc: "Partimos de tus fechas, gustos, presupuesto y estilo. No al revés.",
  },
  {
    num: "02",
    title: "Cada día tiene intención.",
    desc: "Lo icónico, lo local y el descanso correcto para disfrutar de verdad.",
  },
  {
    num: "03",
    title: "Se adapta a tu ritmo.",
    desc: "Tranqui, intenso o balanceado. Aquí manda tu energía.",
  },
  {
    num: "04",
    title: "Cero estrés: lo dejamos listo.",
    desc: "Conexiones, zonas, traslados, recomendaciones y opciones claras.",
  },
  {
    num: "05",
    title: "Te acompañamos en el camino.",
    desc: "Atención real para que siempre te sientas en control.",
  },
];

export default function HomeScrollStory() {
  return (
    <section className="bg-brand-surface/40 dark:bg-content1/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* Sticky visual */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/home/scrollstory.jpg"
                alt="Flymingo Viajes - diseño de itinerarios a medida"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            <div className="mt-6">
              <span className="divider-accent" />
              <p className="mt-4 text-xs tracking-widest uppercase text-foreground/40 font-medium">
                Nuestra forma de trabajar
              </p>
              <p
                className="mt-1 text-foreground"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                Un itinerario que se siente hecho para ti.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col">
            {STEPS.map((step, idx) => (
              <Step key={step.num} {...step} isLast={idx === STEPS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  num,
  title,
  desc,
  isLast,
}: {
  num: string;
  title: string;
  desc: string;
  isLast: boolean;
}) {
  return (
    <div className="flex gap-6 group">
      <div className="flex flex-col items-center">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-divider text-xs font-semibold text-foreground/50 transition-colors group-hover:border-brand-accent group-hover:text-brand-accent">
          {num}
        </span>
        {!isLast && (
          <div className="mt-2 w-px flex-1 mb-2 bg-foreground/10" />
        )}
      </div>

      <div className="pb-10 pt-1">
        <p
          className="text-foreground font-semibold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          {title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/55 font-light">{desc}</p>
      </div>
    </div>
  );
}
