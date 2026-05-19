import WomenHero from "./womenhero"
import WomenManifesto from "./WomenManifiesto"
import WomenIcelandSection from "./WomenIcelandSection"
import WomenNYSection from "./WomenNYSection"
import WomenCTA from "./WomenCTA"

export default function WomenPage() {
  return (
    <main id="top" className="min-h-screen bg-white">
      <WomenHero />
      <WomenManifesto />
      <WomenIcelandSection />
      <WomenNYSection />
      <WomenCTA />
    </main>
  )
}