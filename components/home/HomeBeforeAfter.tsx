import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const WA_LINK = "https://wa.me/5218716887385";

export default function HomeBeforeAfter() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Dos formas de viajar.
            <span className="block text-foreground/70">Una se siente premium.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-foreground/70">
            Nuestro diferencial no es “vender un destino”. Es diseñar una ruta con lógica, ritmo y detalles
            para que el viaje fluya.
          </p>
        </div>

        <div className="md:col-span-4 md:justify-self-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-divider/70 bg-content1/60 px-3 py-2 text-xs text-foreground/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
            De “caos” a “claridad” en un diseño
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
        {/* Left: "Paquete" */}
        <div className="md:col-span-5">
          <ModeCard
            tone="muted"
            eyebrow="La forma común"
            title="Paquete rígido"
            desc="La ruta viene armada. Tú te adaptas."
            bullets={[
              "Se repite lo mismo para todos",
              "Ritmo cansado o sin lógica",
              "Zonas “ok” pero no ideales",
              "Cambios complicados",
            ]}
          />
        </div>

        {/* Center: Transformation line */}
        <div className="md:col-span-2">
          <TransformRail />
        </div>

        {/* Right: "Flymingo" */}
        <div className="md:col-span-5">
          <ModeCard
            tone="dark"
            eyebrow="Nuestro diferencial"
            title="Viaje diseñado Flymingo"
            desc="La ruta se construye contigo. Se siente tuya."
            bullets={[
              "Ruta con lógica (sin regresos innecesarios)",
              "Ritmo humano: disfrutas sin correr",
              "Zonas perfectas según tu estilo",
              "Ajustes reales + opciones claras",
            ]}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <CTABox />
      </div>
    </section>
  );
}

/* --------------------------------- Cards -------------------------------- */

function ModeCard({
  tone,
  eyebrow,
  title,
  desc,
  bullets,
}: {
  tone: "muted" | "dark";
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
}) {
  const dark = tone === "dark";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        dark
          ? "border-foreground/20 bg-foreground text-background"
          : "border-divider/70 bg-content1 text-foreground",
      ].join(" ")}
    >
      {/* Texture */}
      <div
        className={[
          "pointer-events-none absolute inset-0 opacity-[0.55]",
          dark
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]",
        ].join(" ")}
      />

      <div className="relative">
        <p
          className={[
            "text-xs font-medium",
            dark ? "text-background/70" : "text-foreground/60",
          ].join(" ")}
        >
          {eyebrow}
        </p>

        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xl font-semibold">{title}</p>
          <span
            className={[
              "rounded-full border px-3 py-1 text-xs",
              dark
                ? "border-background/20 bg-background/10 text-background/80"
                : "border-divider/70 bg-content2/40 text-foreground/70",
            ].join(" ")}
          >
            {dark ? "Diseñado" : "Rígido"}
          </span>
        </div>

        <p
          className={[
            "mt-2 text-sm",
            dark ? "text-background/80" : "text-foreground/70",
          ].join(" ")}
        >
          {desc}
        </p>

        <ul
          className={[
            "mt-6 space-y-3 text-sm",
            dark ? "text-background/80" : "text-foreground/70",
          ].join(" ")}
        >
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span
                className={[
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border",
                  dark
                    ? "border-background/25 bg-background/10"
                    : "border-divider/70 bg-content2/40",
                ].join(" ")}
                aria-hidden="true"
              >
                {dark ? <CheckIcon /> : <DotIcon />}
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div
          className={[
            "mt-7 h-px w-full",
            dark ? "bg-background/15" : "bg-divider/70",
          ].join(" ")}
        />

        <p
          className={[
            "mt-5 text-xs",
            dark ? "text-background/65" : "text-foreground/60",
          ].join(" ")}
        >
          {dark
            ? "Resultado: el viaje fluye. Tú solo disfrutas."
            : "Resultado: sientes fricción. Todo cuesta."}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------- Transform Rail ---------------------------- */

function TransformRail() {
  return (
    <div className="hidden h-full md:flex">
      <div className="relative mx-auto flex w-full flex-col items-center justify-center">
        <div className="h-full w-px bg-divider/70" />
        <div className="absolute top-10 rounded-full border border-divider/70 bg-content1 px-3 py-1 text-xs text-foreground/60">
          caos
        </div>
        <div className="absolute bottom-10 rounded-full border border-divider/70 bg-content1 px-3 py-1 text-xs text-foreground/60">
          claridad
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-10 w-10 rounded-full border border-divider/70 bg-content1 shadow-sm" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.10),transparent_55%)]" />
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

function CTABox() {
  return (
    <div className="rounded-3xl border border-divider/70 bg-content1 p-7 shadow-sm">
      <p className="text-sm font-semibold">¿Lo armamos contigo?</p>
      <p className="mt-2 text-sm text-foreground/70">
        Mándanos tu idea (fechas, estilo y presupuesto) y te proponemos una ruta inteligente.
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
          WhatsApp →
        </Button>
        <Button
          as={Link}
          href="/destinos"
          variant="bordered"
          radius="full"
          className="border-divider/70"
        >
          Ver destinos
        </Button>
      </div>

      <p className="mt-4 text-xs text-foreground/60">
        Tip: si ya tienes fechas exactas, avanzamos más rápido.
      </p>
    </div>
  );
}

/* ------------------------------ Minimal Icons ------------------------------ */

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}