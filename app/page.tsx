import HomeHero from "@/components/home/HomeHero";
import HomeValueProps from "@/components/home/HomeValueProps";
import HomeScrollStory from "@/components/home/HomeScrollStory";
import HomeBeforeAfter from "@/components/home/HomeBeforeAfter";
import HomeFeatured from "@/components/home/HomeFeatured";
import HomeMiniWizard from "@/components/home/HomeMiniWizard";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFinalCta from "@/components/home/HomeFinalCTA";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeValueProps />
      <HomeScrollStory />
      <HomeBeforeAfter />
      <HomeFeatured />
      <HomeTestimonials />
      <HomeFinalCta />
    </main>
  );
}