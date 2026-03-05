"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

const WA_LINK = "https://wa.me/5218716887385";

export default function HomeMiniWizard() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl border border-divider/70 bg-content1 p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Diseña tu viaje en 30 segundos</h2>
            <p className="mt-3 text-foreground/70">
              Elige una idea base. Te armamos una propuesta realista, flexible y con estilo.
            </p>

            <div className="mt-7 space-y-5">
              <Row label="Tipo de viaje" items={["Pareja", "Amigas", "Familia", "Solo"]} />
              <Row label="Estilo" items={["Luxe", "Relax", "Aventura", "Foodie"]} />
              <Row label="Duración" items={["5–7 días", "8–12 días", "13+ días"]} />
              <Row label="Mes aproximado" items={["Próximo mes", "3–6 meses", "6–12 meses", "A futuro"]} />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} href={WA_LINK} isExternal color="primary" radius="full" className="font-medium">
                Recibir propuesta por WhatsApp →
              </Button>
              <Button as={Link} href="/destinos" variant="bordered" radius="full" className="border-divider/70">
                Ver destinos
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-content2/40 p-6">
            <p className="text-sm font-semibold">Lo que incluye tu propuesta</p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>• Ruta por ciudades (con lógica)</li>
              <li>• Recomendación de zonas para hospedaje</li>
              <li>• Traslados sugeridos (tren/vuelo/auto)</li>
              <li>• Experiencias clave + opcionales</li>
              <li>• Recomendaciones y tips prácticos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-medium text-foreground/60">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((t) => (
          <button
            key={t}
            type="button"
            className="rounded-full border border-divider/70 bg-background px-4 py-2 text-sm text-foreground/80 transition hover:bg-content2/30 active:scale-[0.98]"
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}