import Image from "next/image";

type StoryFrame = {
  k: string;
  title: string;
  desc: string;
};

const FRAMES: StoryFrame[] = [
  {
    k: "ruta",
    title: "No es un paquete. Es tu ruta.",
    desc: "Partimos de tus fechas, gustos, presupuesto y estilo. No al revés.",
  },
  {
    k: "intencion",
    title: "Cada día tiene intención.",
    desc: "Lo icónico, lo local y el descanso correcto para disfrutar de verdad.",
  },
  {
    k: "ritmo",
    title: "Se adapta a tu ritmo.",
    desc: "Viaje tranqui, intenso o balanceado. Aquí manda tu energía.",
  },
  {
    k: "listo",
    title: "Cero estrés: lo dejamos listo.",
    desc: "Conexiones, zonas, traslados, recomendaciones y opciones claras.",
  },
  {
    k: "acompanamiento",
    title: "Te acompañamos en el camino.",
    desc: "Atención real para que siempre te sientas en control.",
  },
];

// 📸 Cambia por una imagen editorial (o una foto hero de tu video)
// Colócala en: public/images/home/scrollstory.jpg
const STICKY_IMAGE = {
  src: "/images/home/scrollstory.jpg",
  alt: "Flymingo Viajes — diseño de itinerarios a medida",
};

export default function HomeScrollStory() {
  return (
    <section className="bg-content2/30">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Sticky panel */}
          <div className="md:sticky md:top-24 md:self-start">
            <div className="overflow-hidden rounded-3xl border border-divider/70 bg-content1 shadow-sm">
              {/* Image */}
              <div className="relative h-72 w-full">
                <Image
                  src={STICKY_IMAGE.src}
                  alt={STICKY_IMAGE.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
                {/* Luxe overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_45%)] opacity-70" />

                {/* Top label */}
                <div className="absolute left-5 top-5">
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                    Flymingo, en una frase
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-2xl font-semibold leading-snug">
                  Un itinerario que se siente hecho para ti.
                </p>

                <p className="mt-3 text-sm text-foreground/70">
                  Diseño inteligente, flexible y con estilo. Para que viajes con calma, claridad y emoción.
                </p>

                {/* Micro pills */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <TinyPill text="Intención" />
                  <TinyPill text="Ritmo" />
                  <TinyPill text="Detalles" />
                </div>

                {/* Progress (subtle, Apple-ish) */}
                <div className="mt-7 flex items-center justify-between">
                  <p className="text-xs text-foreground/60">Nuestra forma de trabajar</p>
                  <p className="text-xs text-foreground/60">{FRAMES.length} pasos</p>
                </div>

                <div className="mt-3 flex gap-2">
                  {FRAMES.map((f, idx) => (
                    <span
                      key={f.k}
                      className="h-1.5 flex-1 rounded-full bg-foreground/10"
                      aria-hidden="true"
                      style={{
                        opacity: 0.35 + idx * 0.08, // leve “gradiente” visual sin colores raros
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Frames */}
          <div className="space-y-4">
            {FRAMES.map((f, idx) => (
              <Frame key={f.k} index={idx + 1} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- UI bits -------------------------------- */

function TinyPill({ text }: { text: string }) {
  return (
    <div className="rounded-full border border-divider/70 bg-content2/40 px-3 py-2 text-center text-xs text-foreground/70">
      {text}
    </div>
  );
}

function Frame({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-divider/70 bg-content1 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-divider/70 bg-content2/40 text-xs font-semibold text-foreground/70">
          {index}
        </div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className="mt-2 text-sm text-foreground/70">{desc}</p>
        </div>
      </div>
    </div>
  );
}