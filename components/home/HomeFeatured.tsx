"use client";

import * as React from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

type FeaturedItem = {
  key: string;
  title: string;
  subtitle: string;
  tag?: string;
  videoSrc: string;
  poster?: string;
};

const ITEMS: FeaturedItem[] = [
  {
    key: "islandia",
    title: "Islandia",
    subtitle: "Auroras, roadtrip y paisajes fuera de este mundo",
    tag: "Top",
    videoSrc: "/videos/featured/islandia.mp4",
    poster: "/images/featured/islandia.jpg",
  },
  {
    key: "japon",
    title: "Japón",
    subtitle: "Tokio, Kioto y rutas con lógica (sin cansancio)",
    tag: "Nuevo",
    videoSrc: "/videos/featured/japon.mp4",
    poster: "/images/featured/japon.jpg",
  },
  {
    key: "europa",
    title: "Europa a tu ritmo",
    subtitle: "Ruta inteligente, sin regresos innecesarios",
    videoSrc: "/videos/featured/europa.mp4",
    poster: "/images/featured/europa.jpg",
  },
  {
    key: "honeymoon",
    title: "Honeymoon Luxe",
    subtitle: "Momentos especiales, sin complicaciones",
    tag: "Luxe",
    videoSrc: "/videos/featured/honeymoon.mp4",
    poster: "/images/featured/honeymoon.jpg",
  },
  {
    key: "amigas",
    title: "Viaje de amigas",
    subtitle: "Vibra top + experiencias que sí valen",
    videoSrc: "/videos/featured/amigas.mp4",
    poster: "/images/featured/amigas.jpg",
  },
];

const WA_LINK = "https://wa.me/5218716887385";

export default function HomeFeatured() {
  const [activeKey, setActiveKey] = React.useState(ITEMS[0]?.key ?? "");
  const active = React.useMemo(
    () => ITEMS.find((i) => i.key === activeKey) ?? ITEMS[0],
    [activeKey]
  );

  return (
    <section className="relative">
      {/* Full-bleed video background */}
      <div className="relative h-[680px] w-full overflow-hidden md:h-[720px]">
        <video
          key={active.videoSrc}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={active.poster}
        >
          <source src={active.videoSrc} type="video/mp4" />
        </video>

        {/* Overlays premium */}
        <div className="absolute inset-0 bg-black/45 dark:bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.16),transparent_45%)] opacity-80" />

        {/* Content container */}
        <div className="relative mx-auto flex h-full max-w-6xl flex-col px-4 py-14">
          {/* Header row */}
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Explora destinos como si fuera un trailer.
              </h2>
              <p className="mt-3 text-white/80">
                Selecciona un destino y el ambiente cambia. Todo es personalizable.
              </p>
            </div>

            <Link
              href="/destinos"
              className="text-sm font-medium text-white/90 hover:text-white"
            >
              Ver destinos →
            </Link>
          </div>

          {/* Main layout: left info + right overlay cards */}
<div className="mt-10 grid flex-1 grid-cols-1 gap-6 md:grid-cols-12 md:items-stretch">
  {/* Left “Now playing” */}
  <div className="md:col-span-7">
    <div className="flex h-full flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur md:min-h-[420px] shadow-[0_20px_90px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
      <div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            Seleccionado
          </span>
          {active.tag ? (
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85">
              {active.tag}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl">
          {active.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
          {active.subtitle}
        </p>
      </div>

      <div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            as={Link}
            href="/destinos"
            radius="full"
            className="bg-white text-neutral-900 hover:bg-white/90 font-medium"
          >
            Ver este destino
          </Button>

          <Button
            as={Link}
            href={WA_LINK}
            isExternal
            variant="bordered"
            radius="full"
            className="border-white/25 text-white hover:bg-white/10"
          >
            Diseñar por WhatsApp
          </Button>
        </div>

        <p className="mt-5 text-xs text-white/65">
          Itinerario flexible • Ajustes reales • Estilo luxe
        </p>
      </div>
    </div>
  </div>

  {/* Right overlay catalog */}
  <div className="md:col-span-5 md:justify-self-end">
    {/* Desktop stack */}
    <div className="hidden w-full max-w-[420px] flex-col gap-3 md:flex">
      {ITEMS.map((item) => (
        <OverlayCard
          key={item.key}
          item={item}
          active={item.key === activeKey}
          onClick={() => setActiveKey(item.key)}
        />
      ))}
    </div>

    {/* Mobile horizontal */}
    <div className="md:hidden">
      <p className="text-xs font-medium text-white/75">Más destinos</p>
      <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ITEMS.map((item) => (
          <OverlayCardMobile
            key={item.key}
            item={item}
            active={item.key === activeKey}
            onClick={() => setActiveKey(item.key)}
          />
        ))}
      </div>
    </div>
  </div>
</div>

          {/* Bottom note (optional) */}
          <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-6 text-white/85 backdrop-blur">
            <p className="text-sm font-semibold">¿No ves tu destino aquí?</p>
            <p className="mt-2 text-sm text-white/75">
              Esto es solo una selección. Diseñamos viajes a cualquier destino del mundo, con el ritmo y
              el estilo que tú quieres.
            </p>
          </div>
        </div>

        {/* Bottom fade to next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </div>
    </section>
  );
}

/* ------------------------- Overlay Cards ------------------------- */

function OverlayCard({
  item,
  active,
  onClick,
}: {
  item: FeaturedItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full rounded-3xl border p-5 text-left backdrop-blur transition",
        "hover:-translate-y-0.5 hover:shadow-md",
        active
          ? "border-white/30 bg-white/18 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          : "border-white/15 bg-white/10",
      ].join(" ")}
      aria-label={`Seleccionar ${item.title}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">{item.title}</p>
          <p className="mt-1 text-sm text-white/75 line-clamp-2">{item.subtitle}</p>
        </div>
        {item.tag ? (
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85">
            {item.tag}
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-white/65">{active ? "Reproduciendo…" : "Seleccionar"}</p>
        <span className="text-sm font-medium text-white">{active ? "●" : "→"}</span>
      </div>
    </button>
  );
}

function OverlayCardMobile({
  item,
  active,
  onClick,
}: {
  item: FeaturedItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "min-w-[260px] rounded-3xl border p-5 text-left backdrop-blur transition",
        active ? "border-white/30 bg-white/18" : "border-white/15 bg-white/10",
      ].join(" ")}
      aria-label={`Seleccionar ${item.title}`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-semibold text-white">{item.title}</p>
        {item.tag ? (
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/85">
            {item.tag}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm text-white/75 line-clamp-2">{item.subtitle}</p>
      <p className="mt-4 text-xs text-white/65">{active ? "Reproduciendo…" : "Tocar para ver"}</p>
    </button>
  );
}