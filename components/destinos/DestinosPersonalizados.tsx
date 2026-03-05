import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const WA_LINK = "https://wa.me/5218716887385";

export default function DestinosPersonalizados() {
  return (
    <section id="personalizado" className="mx-auto max-w-6xl px-4 pb-16">
      <div className="relative overflow-hidden rounded-3xl border border-divider/70 bg-content1 p-8 shadow-sm">
        {/* subtle texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.06),transparent_45%)]" />
        </div>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          {/* Left copy */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-divider/70 bg-content2/40 px-3 py-1 text-xs text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
              Destinos a la medida
            </p>

            <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
              ¿No está tu destino aquí?
              <span className="block text-foreground/70">Perfecto.</span>
            </h3>

            <p className="mt-4 text-foreground/70">
              Flymingo no se limita a un catálogo. Diseñamos{" "}
              <span className="font-medium text-foreground">cualquier destino del mundo</span>{" "}
              a tu medida: ruta, hoteles, actividades, ritmo y estilo. Tú sueñas, nosotros lo aterrizamos.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-foreground/70">
              <li>• Te escuchamos (fechas, presupuesto, vibe)</li>
              <li>• Diseñamos la ruta con lógica y zonas ideales</li>
              <li>• Ajustamos hasta que se sienta “perfecto”</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                href="/nosotros"
                variant="bordered"
                radius="full"
                className="border-divider/70 text-foreground"
              >
                Conocer Flymingo
              </Button>
            </div>

            <p className="mt-4 text-xs text-foreground/60">
              Tip: si ya tienes fechas aproximadas, avanzamos mucho más rápido.
            </p>
          </div>

          {/* Right: mini wizard / examples */}
          <div className="rounded-3xl border border-divider/70 bg-content2/40 p-6">
            <p className="text-xs font-medium text-foreground/60">
              Así lo personalizamos contigo
            </p>

            <div className="mt-5 space-y-3">
              <ExampleLine title="Ritmo" desc="tranqui / intenso / balanceado" />
              <ExampleLine title="Estilo" desc="luxe, foodie, aventura, romance" />
              <ExampleLine title="Ruta" desc="ciudades con lógica (sin regresos)" />
              <ExampleLine title="Detalles" desc="zonas top, traslados, recomendaciones" />
            </div>

            <div className="mt-6 rounded-2xl border border-divider/70 bg-content1 p-4">
              <p className="text-xs text-foreground/60">Envíanos esto por WhatsApp:</p>
              <ul className="mt-2 space-y-1 text-sm text-foreground/75">
                <li>• Destino(s) o idea</li>
                <li>• Fechas aproximadas</li>
                <li>• Número de personas</li>
                <li>• Presupuesto estimado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExampleLine({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl border border-divider/70 bg-content1 p-4 shadow-sm">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs text-foreground/70">{desc}</p>
      </div>
      <span className="text-foreground/50">→</span>
    </div>
  );
}