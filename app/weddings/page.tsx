import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flymingo Weddings — Bodas Destino",
  description:
    "Planea tu boda destino perfecta con Flymingo Weddings. Xcaret, AVA, Hard Rock, Nobu, Le Blanc y más. Coordinación completa desde Torreón, México.",
  keywords: [
    "boda destino México",
    "wedding planner Torreón",
    "bodas en Xcaret",
    "boda Hard Rock Riviera Maya",
    "boda todo incluido México",
    "wedding planner Coahuila",
    "boda destino Cancún",
    "Flymingo Weddings",
  ],
  openGraph: {
    title: "Flymingo Weddings — Tu boda destino perfecta",
    description: "Xcaret · AVA · Hard Rock · Nobu · Le Blanc. Coordinación completa de tu boda destino.",
  },
};

import WeddingsHero from "@/components/weddings/WeddingsHero";
import WeddingsWhy from "@/components/weddings/WeddingsWhy";
import WeddingsCollections from "@/components/weddings/WeddingsCollections";
import WeddingsCoupleVsGuests from "@/components/weddings/WeddingsCoupleVsGuests";
import WeddingsFaq from "@/components/weddings/WeddingsFAQ";
import WeddingsCTA from "@/components/weddings/WeddingsCTA";
import PagePixelEvents from "@/components/PagePixelEvents";

export default function WeddingsPage() {
  return (
    <main className="min-h-screen" style={{ background: "white" }}>
      <PagePixelEvents contentName="Flymingo Weddings" contentCategory="Bodas Destino" />
      <WeddingsHero />
      <WeddingsWhy />
      <WeddingsCollections />
      <WeddingsCoupleVsGuests />
      <WeddingsFaq />
      <WeddingsCTA />
    </main>
  );
}