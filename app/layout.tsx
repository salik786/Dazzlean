import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dazzlean — Premium Skincare for Pakistani Skin",
  description:
    "Science-backed skincare formulated for South Asian skin tones. Clean ingredients, visible results — your skin's new ritual.",
  keywords: [
    "skincare Pakistan",
    "Pakistani skincare brand",
    "brightening serum Pakistan",
    "SPF Pakistan",
    "clean beauty",
    "South Asian skincare",
    "Dazzlean",
  ],
  openGraph: {
    title: "Dazzlean — Premium Skincare for Pakistani Skin",
    description:
      "Science-backed skincare formulated for South Asian skin tones. Clean ingredients, visible results — your skin's new ritual.",
    url: "https://dazzlean.com",
    siteName: "Dazzlean",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dazzlean — Premium Skincare for Pakistani Skin",
    description:
      "Science-backed skincare formulated for South Asian skin tones.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
