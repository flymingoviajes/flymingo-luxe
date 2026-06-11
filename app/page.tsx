import HomeHero from "@/components/home/HomeHero";
import HomeMarquee from "@/components/home/HomeMarquee";
import HomeValueProps from "@/components/home/HomeValueProps";
import HomeFeatured from "@/components/home/HomeFeatured";
import HomeBeforeAfter from "@/components/home/HomeBeforeAfter";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFinalCta from "@/components/home/HomeFinalCTA";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeMarquee />
      <HomeValueProps />
      <HomeFeatured />
      <HomeBeforeAfter />
      <HomeTestimonials />
      <HomeFinalCta />
    </main>
  );
}
