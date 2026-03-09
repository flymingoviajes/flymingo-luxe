import WomenHero from "./womenhero"
import WomenManifesto from "./WomenManifiesto"
import WomenIcelandSection from "./WomenIcelandSection"
import WomenJapanSection from "./WomenJapanSection"
import WomenCTA from "./WomenCTA"

export default function WomenPage() {
  return (
    <main id="top" className="min-h-screen bg-white">
      <WomenHero />
      <WomenManifesto />
      <WomenIcelandSection />
      <WomenJapanSection />
      <WomenCTA />
    </main>
  )
}