import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flymingo Weddings — Bodas Destino",
  description:
    "Cásate frente al mar en Cancún, Los Cabos, Puerto Vallarta o Mazatlán. Flymingo coordina todo — novios e invitados. Videollamada gratis con nuestra Wedding Planner.",
  keywords: [
    "boda destino México",
    "wedding planner Torreón",
    "bodas en Cancún",
    "boda todo incluido frente al mar",
    "boda destino Los Cabos",
    "boda Puerto Vallarta",
    "wedding planner Coahuila",
    "Flymingo Weddings",
  ],
  alternates: { canonical: "https://flymingoviajes.com/weddings" },
  openGraph: {
    title: "Flymingo Weddings — Cásate frente al mar",
    description:
      "Boda de destino en hotel todo incluido. Flymingo coordina a todos tus invitados. Videollamada gratis con nuestra Wedding Planner.",
  },
};

import PagePixelEvents from "@/components/PagePixelEvents";
import WeddingsHero from "@/components/weddings/WeddingsHero";
import WeddingsReveal from "@/components/weddings/WeddingsReveal";
import WeddingsScenes from "@/components/weddings/WeddingsScenes";
import WeddingsGuestCalculator from "@/components/weddings/WeddingsGuestCalculator";
import WeddingsVenues from "@/components/weddings/WeddingsVenues";
import WeddingsClose from "@/components/weddings/WeddingsClose";

export default function WeddingsPage() {
  return (
    <main className="min-h-screen" style={{ background: "white" }}>
      <PagePixelEvents contentName="Flymingo Weddings" contentCategory="Bodas Destino" />
      <WeddingsHero />
      <WeddingsReveal />
      <WeddingsScenes />
      <WeddingsGuestCalculator />
      <WeddingsVenues />
      <WeddingsClose />
    </main>
  );
}
