import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import ProductsGrid from "@/components/home/ProductsGrid";
import PhilosophySection from "@/components/home/PhilosophySection";
import Testimonials from "@/components/home/Testimonials";
import InstagramGrid from "@/components/home/InstagramGrid";
import Newsletter from "@/components/home/Newsletter";

export const metadata: Metadata = {
  title: "Dazzlean — Premium Skincare for Pakistani Skin",
  description:
    "Reveal your natural radiance with science-backed skincare crafted for South Asian skin. Shop Dazzlean's hero collection.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ProductsGrid />
      <PhilosophySection />
      <Testimonials />
      <InstagramGrid />
      <Newsletter />
    </>
  );
}
