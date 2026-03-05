"use client";

import * as React from "react";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

type VisitedPlace = {
  name: string;
  country?: string;
  x: number;
  y: number;
  size?: "sm" | "md" | "lg";
};

const places: VisitedPlace[] = [
  { name: "París", country: "Francia", x: 56, y: 34, size: "md" },
  { name: "Roma", country: "Italia", x: 58, y: 38, size: "md" },
  { name: "Londres", country: "Reino Unido", x: 54, y: 30, size: "sm" },
  { name: "Madrid", country: "España", x: 52, y: 39, size: "sm" },
  { name: "Reikiavik", country: "Islandia", x: 48, y: 22, size: "lg" },
  { name: "Tokio", country: "Japón", x: 78, y: 40, size: "lg" },
  { name: "Bangkok", country: "Tailandia", x: 72, y: 52, size: "md" },
  { name: "Cancún", country: "México", x: 30, y: 54, size: "md" },
  { name: "Nueva York", country: "EE.UU.", x: 26, y: 40, size: "sm" },
  { name: "Buenos Aires", country: "Argentina", x: 38, y: 80, size: "md" },
];

const WA_LINK = "https://wa.me/5218716887385";

// ✅ Tu textura aquí:
const GLOBE_TEXTURE = {
  src: "/images/destinos/globe-texture.jpg",
  alt: "Mapa del mundo - textura",
};

export default function VisitedGlobeSection() {
  const [active, setActive] = React.useState<VisitedPlace | null>(null);

  return (
    <section className="bg-content2/30">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Destinos que ya hemos diseñado
            </h2>
            <p className="mt-3 text-foreground/70">
              Una muestra de rutas reales con clientes. Y sí: también diseñamos{" "}
              <span className="font-medium text-foreground">cualquier destino del mundo</span>.
            </p>
          </div>

          <p className="mt-4 text-xs text-foreground/60 md:mt-0">
            {places.length}+ destinos • itinerarios personalizados
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          {/* Globe */}
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              {/* Planet */}
              <div
                className={clsx(
                  "absolute inset-0 overflow-hidden rounded-full border border-divider/70 bg-content1 shadow-sm"
                )}
              >
                {/* ✅ Texture image */}
                <div className="absolute inset-0 opacity-[0.92] dark:opacity-[0.75]">
                  <Image
                    src={GLOBE_TEXTURE.src}
                    alt={GLOBE_TEXTURE.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 92vw, 520px"
                    priority={false}
                  />
                </div>

                {/* Luxe overlays (readability + depth) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.22),transparent_45%)] opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_62%,rgba(0,0,0,0.12),transparent_45%)] dark:bg-[radial-gradient(circle_at_70%_62%,rgba(0,0,0,0.35),transparent_45%)]" />

                {/* Soft vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_55%,rgba(0,0,0,0.18))] dark:bg-[radial-gradient(circle_at_50%_45%,transparent_55%,rgba(0,0,0,0.62))]" />
              </div>

              {/* Pins */}
              <div className="absolute inset-0">
                {places.map((p) => (
                  <Pin
                    key={`${p.name}-${p.x}-${p.y}`}
                    place={p}
                    active={active?.name === p.name}
                    onEnter={() => setActive(p)}
                    onLeave={() => setActive(null)}
                    onClick={() =>
                      setActive((prev) => (prev?.name === p.name ? null : p))
                    }
                  />
                ))}
              </div>

              {/* Tooltip */}
              <div className="absolute left-1/2 top-full mt-5 w-full -translate-x-1/2 px-4">
                <div className="rounded-2xl border border-divider/70 bg-content1/70 p-4 text-center text-sm text-foreground/80 shadow-sm backdrop-blur">
                  {active ? (
                    <span>
                      <span className="font-medium text-foreground">
                        {active.name}
                      </span>
                      {active.country ? (
                        <span className="text-foreground/70">
                          {" "}
                          · {active.country}
                        </span>
                      ) : null}
                    </span>
                  ) : (
                    <span>Pasa el mouse o toca un pin para ver destinos</span>
                  )}
                </div>
              </div>
            </div>

            <p className="mt-16 text-center text-xs text-foreground/50">
              Globo editorial (ligero). Si un día quieres versión 3D real, lo hacemos.
            </p>
          </div>

          {/* Right copy */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-divider/70 bg-content1 p-7 shadow-sm">
              <p className="text-sm font-semibold">Lo importante</p>
              <p className="mt-2 text-sm text-foreground/70">
                No estamos limitados a un catálogo. Estos son destinos reales que ya hemos hecho,
                pero diseñamos{" "}
                <span className="font-medium text-foreground">cualquier lugar</span>{" "}
                según tu estilo: Europa, Asia, playas, roadtrips, lunas de miel, amigas, Disney y más.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <MiniPill>Rutas con lógica</MiniPill>
                <MiniPill>Ritmo humano</MiniPill>
                <MiniPill>Estilo luxe</MiniPill>
                <MiniPill>Ajustes reales</MiniPill>
              </div>
            </div>

            <div className="rounded-3xl border border-divider/70 bg-content1 p-7 shadow-sm">
              <p className="text-sm font-semibold">¿Quieres que aparezca tu destino?</p>
              <p className="mt-2 text-sm text-foreground/70">
                Mándanos tu idea y lo convertimos en una ruta perfecta.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  as={Link}
                  href={WA_LINK}
                  isExternal
                  color="primary"
                  radius="full"
                  className="font-medium"
                >
                  Pedir propuesta por WhatsApp →
                </Button>

                <Button
                  as={Link}
                  href="#catalogo"
                  variant="bordered"
                  radius="full"
                  className="border-divider/70"
                >
                  Ver catálogo
                </Button>
              </div>

              <p className="mt-4 text-xs text-foreground/60">
                Tip: envíanos fechas aproximadas + número de personas y avanzamos más rápido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-divider/70 bg-content2/40 px-3 py-2 text-center text-xs text-foreground/70">
      {children}
    </div>
  );
}

function Pin({
  place,
  active,
  onEnter,
  onLeave,
  onClick,
}: {
  place: VisitedPlace;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClick: () => void;
}) {
  const size =
    place.size === "lg"
      ? "h-3.5 w-3.5"
      : place.size === "md"
      ? "h-3 w-3"
      : "h-2.5 w-2.5";

  return (
    <button
      type="button"
      className={clsx(
        "absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition",
        active ? "scale-110" : "scale-100"
      )}
      style={{ left: `${place.x}%`, top: `${place.y}%` }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      aria-label={`${place.name}${place.country ? `, ${place.country}` : ""}`}
    >
      <span
        className={clsx(
          "absolute inset-0 -z-10 rounded-full blur-md opacity-0 transition",
          active ? "opacity-70" : "opacity-0",
          "bg-foreground/35"
        )}
      />
      <span
        className={clsx(
          "block rounded-full border",
          size,
          active
            ? "border-foreground bg-foreground"
            : "border-foreground/25 bg-foreground/15"
        )}
      />
    </button>
  );
}