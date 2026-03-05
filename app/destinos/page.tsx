import HeroDestinos from "@/components/destinos/HeroDestinos";
import DestinosCatalogo from "@/components/destinos/DestinosCatalogo";
import DestinosPersonalizados from "@/components/destinos/DestinosPersonalizados";
import { destinations } from "@/components/destinos/data";
import VisitedGlobeSection from "@/components/destinos/VisitedGlobeSection";

export default function DestinosPage() {
  return (
    <main>
      <HeroDestinos />
      <DestinosCatalogo items={destinations} />
      <DestinosPersonalizados />
      <VisitedGlobeSection />
    </main>
  );
}