import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinos",
  description:
    "Explora destinos únicos con Flymingo Viajes — Islandia, Japón, Europa, Maldivas y más. Itinerarios personalizados desde Torreón, México. Precios desde $84,890 MXN.",
  keywords: [
    "destinos de viaje México",
    "viaje a Islandia desde México",
    "viaje a Japón desde México",
    "viaje a Europa personalizado",
    "luna de miel Islandia",
    "itinerario personalizado Torreón",
    "agencia de viajes Torreón destinos",
    "viajes a medida México",
  ],
  openGraph: {
    title: "Destinos | Flymingo Viajes",
    description: "Islandia, Japón, Europa y más — diseñados a tu medida desde Torreón, México.",
  },
};

import HeroDestinos from "@/components/destinos/HeroDestinos";
import DestinosCatalogo from "@/components/destinos/DestinosCatalogo";
import DestinosPersonalizados from "@/components/destinos/DestinosPersonalizados";
import { destinations } from "@/components/destinos/data";
import PagePixelEvents from "@/components/PagePixelEvents";

export default function DestinosPage() {
  return (
    <main>
      <PagePixelEvents contentName="Destinos Flymingo" contentCategory="Destinos" />
      <HeroDestinos />
      <DestinosCatalogo items={destinations} />
      <DestinosPersonalizados />
    </main>
  );
}