import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flymingo Women — Viajes para Mujeres",
  description:
    "Viajes en grupo diseñados para mujeres. Seguros, increíbles y con las personas correctas. Próximo destino: Islandia Nov 2026 desde $84,890 MXN.",
  keywords: [
    "viajes para mujeres México",
    "viaje en grupo mujeres",
    "viaje de amigas México",
    "Flymingo Women",
    "viaje grupal femenino",
    "viaje a Islandia mujeres",
    "viaje seguro para mujeres México",
    "grupo de viaje mujeres Torreón",
  ],
  alternates: { canonical: "https://flymingoviajes.com/women" },
  openGraph: {
    title: "Flymingo Women — Viajes diseñados para mujeres",
    description: "Grupos femeninos, destinos increíbles. Próximo viaje: Islandia Nov 2026.",
  },
};

import WomenHero from "./womenhero"
import WomenManifesto from "./WomenManifiesto"
import WomenIcelandSection from "./WomenIcelandSection"
import WomenNYSection from "./WomenNYSection"
import WomenCTA from "./WomenCTA"
import PagePixelEvents from "@/components/PagePixelEvents"

export default function WomenPage() {
  return (
    <main id="top" className="min-h-screen bg-white">
      <PagePixelEvents contentName="Flymingo Women" contentCategory="Viajes Mujeres" value={84890} />
      <WomenHero />
      <WomenManifesto />
      <WomenIcelandSection />
      <WomenNYSection />
      <WomenCTA />
    </main>
  )
}