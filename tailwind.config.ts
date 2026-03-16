import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-bg": "var(--c-bg)",
        "c-ivory": "var(--c-ivory)",
        "c-ivory2": "var(--c-ivory2)",
        "c-ivory3": "var(--c-ivory3)",
        "c-dark": "var(--c-dark)",
        "c-dark2": "var(--c-dark2)",
        "c-muted": "var(--c-muted)",
        "c-subtle": "var(--c-subtle)",
        "c-rose": "var(--c-rose)",
        "c-rose-lt": "var(--c-rose-lt)",
        "c-gold": "var(--c-gold)",
        "c-gold-lt": "var(--c-gold-lt)",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        jost: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
