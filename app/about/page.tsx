import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import ValuesGrid from "@/components/about/ValuesGrid";
import StatsBar from "@/components/about/StatsBar";

export const metadata: Metadata = {
  title: "Our Story — Dazzlean",
  description:
    "Learn how Dazzlean was born from a personal need to create skincare truly made for Pakistani skin. Meet our founder and discover our values.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesGrid />
      <StatsBar />
    </>
  );
}
