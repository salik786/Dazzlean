export interface Product {
  id: string;
  name: string;
  type: string;
  tagline: string;
  description: string;
  ingredients: string[];
  price: number;
  size: string;
  badge?: "Bestseller" | "New";
  gradientBg: string;
  bottleGradient: string;
}

export const products: Product[] = [
  {
    id: "brightening-serum",
    name: "Brightening Serum",
    type: "Treatment",
    tagline: "Visible brightness in 14 days",
    description:
      "A lightweight, fast-absorbing serum formulated with triple-action brightening complex. Targets uneven skin tone, dark spots, and dullness common in South Asian skin — revealing a naturally luminous complexion.",
    ingredients: ["Vitamin C", "Niacinamide", "Kojic Acid"],
    price: 2499,
    size: "30ml",
    badge: "Bestseller",
    gradientBg: "linear-gradient(160deg, #E0C8A8 0%, #B08050 100%)",
    bottleGradient:
      "linear-gradient(160deg, #E8D4C0 0%, #C49070 40%, #9A6040 100%)",
  },
  {
    id: "gentle-face-wash",
    name: "Gentle Face Wash",
    type: "Cleanser",
    tagline: "Clean skin, never stripped",
    description:
      "A pH-balanced, creamy cleanser that removes impurities, sunscreen, and makeup without disrupting your skin barrier. Enriched with soothing botanicals for a clean, calm finish every time.",
    ingredients: ["Aloe Vera", "Ceramides", "Green Tea"],
    price: 1299,
    size: "150ml",
    gradientBg: "linear-gradient(160deg, #B8D0B8 0%, #789478 100%)",
    bottleGradient:
      "linear-gradient(160deg, #C8DCC8 0%, #90A890 40%, #5A7A5A 100%)",
  },
  {
    id: "spf-50-sunscreen",
    name: "SPF 50 Sunscreen",
    type: "Sun Protection",
    tagline: "Invisible protection, every day",
    description:
      "A revolutionary hybrid sunscreen with zero white cast, formulated specifically for deeper South Asian skin tones. Broad-spectrum PA++++ protection in a featherlight, matte finish.",
    ingredients: ["No White Cast", "PA++++", "Hyaluronic Acid"],
    price: 1799,
    size: "50ml",
    badge: "New",
    gradientBg: "linear-gradient(160deg, #B0C0D8 0%, #6880A8 100%)",
    bottleGradient:
      "linear-gradient(160deg, #C0D0E8 0%, #8098C0 40%, #4860A0 100%)",
  },
  {
    id: "hydrating-cream",
    name: "Hydrating Cream",
    type: "Moisturiser",
    tagline: "Deep hydration that lasts 24 hours",
    description:
      "An intensely moisturising cream that locks in hydration for up to 24 hours. The triple-molecular weight hyaluronic acid complex penetrates every layer of the skin, while squalane seals in moisture without clogging pores.",
    ingredients: ["Hyaluronic Acid", "Squalane", "Peptides"],
    price: 1999,
    size: "50ml",
    gradientBg: "linear-gradient(160deg, #D8C8A0 0%, #A89068 100%)",
    bottleGradient:
      "linear-gradient(160deg, #E8D8B0 0%, #C0A878 40%, #907848 100%)",
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const getProductsByType = (type: string): Product[] =>
  type === "All Products"
    ? products
    : products.filter((p) => p.type === type);

export const categories = [
  "All Products",
  "Serums",
  "Cleansers",
  "SPF",
  "Moisturisers",
];
