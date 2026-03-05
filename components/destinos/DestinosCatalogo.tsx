import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@heroui/link";
import type { DestinationCard } from "./types";

export default function DestinosCatalogo({
  items,
}: {
  items: DestinationCard[];
}) {
  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Catálogo de destinos</h2>
          <p className="mt-3 text-foreground/70">
            Una selección pequeña (máximo 6). Lo hacemos intencional para mantenerlo premium.
          </p>
        </div>

        <Link
          as={NextLink}
          href="#personalizado"
          className="text-sm font-medium text-foreground"
        >
          ¿Y si quiero otro destino? →
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((d) => (
          <DestinationCardView key={d.slug} d={d} />
        ))}
      </div>
    </section>
  );
}

function DestinationCardView({ d }: { d: DestinationCard }) {
  return (
    <Link
      as={NextLink}
      href={`/destinos/${d.slug}`}
      className="group block overflow-hidden rounded-3xl border border-divider/70 bg-content1 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Image */}
      <div className="relative h-44 w-full">
        <Image
          src={d.imageSrc}
          alt={d.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />

        {/* Luxe overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.18),transparent_45%)] opacity-70" />

        {/* Tag */}
        {d.tag ? (
          <div className="absolute right-4 top-4">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
              {d.tag}
            </span>
          </div>
        ) : null}

        {/* Subtle shine on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute -left-1/4 top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm font-semibold">{d.title}</p>

        {d.subtitle ? (
          <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
            {d.subtitle}
          </p>
        ) : null}

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-foreground/60">
            Itinerario flexible • Diseño a medida
          </p>
          <span className="text-sm font-medium">
            Ver <span className="transition group-hover:translate-x-0.5 inline-block">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}