import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const WA_LINK = "https://wa.me/5218716887385";

export default function HomeFinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-divider/70 bg-content1 p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">¿Lista para tu próximo gran viaje?</h2>
            <p className="mt-3 text-foreground/70">
              Cuéntanos tu idea y te ayudamos a diseñar un itinerario único, con opciones reales
              y atención personalizada.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} href={WA_LINK} isExternal color="primary" radius="full" className="font-medium">
                WhatsApp 8716887385
              </Button>

              <Button
                as={Link}
                href="https://flymingoviajes.com"
                variant="bordered"
                radius="full"
                className="border-divider/70"
              >
                flymingoviajes.com
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-content2/40 p-6">
            <p className="text-sm font-semibold">Rápido para empezar</p>
            <ul className="mt-3 space-y-2 text-sm text-foreground/70">
              <li>• Fechas aproximadas</li>
              <li>• Tipo de viaje</li>
              <li>• Presupuesto estimado</li>
              <li>• Estilo y ritmo</li>
              <li>• Imperdibles y “no gracias”</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}