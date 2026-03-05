import Image from "next/image";

type CardImage = {
  src: string;
  alt: string;
};

export default function HomeValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <h2 className="text-2xl font-semibold md:text-3xl">
            No vendemos destinos.
            <span className="block text-foreground/70">Diseñamos experiencias.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-foreground/70">
            Lo que cambia todo: tu viaje no “viene armado”. Se construye contigo, con lógica,
            ritmo y detalles listos para disfrutar.
          </p>
        </div>

        <div className="md:col-span-5 md:justify-self-end">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-divider/70 bg-content1/60 px-3 py-2 text-xs text-foreground/70 backdrop-blur">
            <Pill>Itinerario a medida</Pill>
            <Pill>Rutas con lógica</Pill>
            <Pill>Estilo luxe</Pill>
            <Pill>Cero estrés</Pill>
          </div>
        </div>
      </div>

      {/* Layout editorial */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
        {/* Big feature card */}
        <div className="md:col-span-7">
          <BigCard
            image={{
              src: "/images/home/value-itinerary.jpg",
              alt: "Itinerarios personalizados Flymingo Viajes",
            }}
          />
        </div>

        {/* Two stacked cards */}
        <div className="grid gap-4 md:col-span-5">
          <SmallCard
            eyebrow="A tu estilo"
            title="Una ruta que se siente tuya"
            desc="Luxe relajado, aventura, wellness, foodie, romance, amigas o familia. Nosotros adaptamos el viaje a tu vibe."
            chips={["Luxe", "Foodie", "Romance", "Amigas", "Familia"]}
            image={{
              src: "/images/home/value-style.jpg",
              alt: "Viajes a tu estilo Flymingo Viajes",
            }}
          />

          <SmallCard
            eyebrow="Flexibles de verdad"
            title="Ajustes reales, sin drama"
            desc="Cambiamos ciudad, noches, hotel, tours o ritmo. Tú decides. Nosotros lo resolvemos y lo dejamos claro."
            chips={["Cambios", "Alternativas", "Opciones", "Soporte"]}
            image={{
              src: "/images/home/value-flex.jpg",
              alt: "Viajes flexibles Flymingo Viajes",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Cards -------------------------------- */

function BigCard({ image }: { image: CardImage }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-divider/70 bg-content1 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Image */}
      <CardImageBlock image={image} ratio="wide" />

      {/* Content */}
      <div className="relative p-7">
        <p className="text-xs font-medium text-foreground/60">Itinerarios únicos</p>
        <h3 className="mt-2 text-xl font-semibold md:text-2xl">
          Cada día con intención.
          <span className="block text-foreground/70">Sin cansancio innecesario.</span>
        </h3>

        <p className="mt-3 max-w-xl text-sm text-foreground/70">
          Diseñamos un viaje que fluye: zonas correctas, traslados con lógica, tiempos humanos y
          momentos que se sienten premium.
        </p>

        {/* “System line” Apple-ish */}
        <div className="mt-6 rounded-2xl border border-divider/70 bg-content2/40 p-4">
          <p className="text-xs text-foreground/60">Se siente como:</p>
          <p className="mt-1 text-sm font-medium">
            “Ok, esto está perfectamente pensado.”
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <MiniStat label="Ritmo" value="Balanceado" />
            <MiniStat label="Ruta" value="Con lógica" />
            <MiniStat label="Detalles" value="Listos" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SmallCard({
  eyebrow,
  title,
  desc,
  chips,
  image,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  chips: string[];
  image: CardImage;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-divider/70 bg-content1 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CardImageBlock image={image} ratio="tall" />

      <div className="p-6">
        <p className="text-xs font-medium text-foreground/60">{eyebrow}</p>
        <p className="mt-2 text-lg font-semibold">{title}</p>
        <p className="mt-2 text-sm text-foreground/70">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-divider/70 bg-content2/40 px-3 py-1 text-xs text-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Image Block ------------------------------ */

function CardImageBlock({
  image,
  ratio,
}: {
  image: CardImage;
  ratio: "wide" | "tall";
}) {
  const hClass = ratio === "wide" ? "h-56 md:h-64" : "h-44 md:h-48";

  return (
    <div className={`relative ${hClass} w-full`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={false}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Luxe overlay for readability + vibe */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

      {/* Subtle highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_45%)] opacity-70" />
    </div>
  );
}

/* ------------------------------ Small UI bits ---------------------------- */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-divider/70 bg-content2/40 px-3 py-1">
      {children}
    </span>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-divider/70 bg-content1 p-3">
      <p className="text-[11px] text-foreground/60">{label}</p>
      <p className="mt-0.5 text-xs font-medium text-foreground">{value}</p>
    </div>
  );
}