import WeddingsHero from "@/components/weddings/WeddingsHero";
import WeddingsWhy from "@/components/weddings/WeddingsWhy";
import WeddingsCollections from "@/components/weddings/WeddingsCollections";
import WeddingsCoupleVsGuests from "@/components/weddings/WeddingsCoupleVsGuests";
import WeddingsFaq from "@/components/weddings/WeddingsFAQ";
import WeddingsCTA from "@/components/weddings/WeddingsCTA";

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-[#fcf8f2] text-[#4d433b]">
      <WeddingsHero />
      <WeddingsWhy />
      <WeddingsCollections />
      <WeddingsCoupleVsGuests />
      <WeddingsFaq />
      <WeddingsCTA />
    </main>
  );
}