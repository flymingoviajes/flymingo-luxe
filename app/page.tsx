import HomeHero from "@/components/home/HomeHero";
import HomeMarquee from "@/components/home/HomeMarquee";
import HomeValueProps from "@/components/home/HomeValueProps";
import HomeFeatured from "@/components/home/HomeFeatured";
import HomeBeforeAfter from "@/components/home/HomeBeforeAfter";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeFinalCta from "@/components/home/HomeFinalCTA";
import PagePixelEvents from "@/components/PagePixelEvents";

export default function HomePage() {
  return (
    <main>
      <PagePixelEvents contentName="Flymingo Viajes — Inicio" contentCategory="Home" />
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
