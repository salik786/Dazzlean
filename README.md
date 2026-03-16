# Dazzlean — Premium Pakistani Skincare

A production-ready Next.js 14 website for Dazzlean, a premium skincare brand for Pakistani skin.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Google Fonts** — Cormorant Garamond + Jost

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel deploy
```

Or connect your GitHub repository to [vercel.com](https://vercel.com) for automatic deployments.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout (nav + footer + WhatsApp)
│   ├── page.tsx            # Home page
│   ├── shop/page.tsx       # Shop page
│   ├── about/page.tsx      # About page
│   ├── blog/page.tsx       # Blog listing
│   ├── contact/page.tsx    # Contact page
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── layout/             # Navbar, Footer, WhatsAppButton
│   ├── home/               # Hero, Marquee, Products, Philosophy, etc.
│   ├── shop/               # ShopHero, FilterBar, ProductCard
│   ├── about/              # AboutHero, StorySection, ValuesGrid, StatsBar
│   └── ui/                 # Button, SectionHeader
├── lib/
│   └── products.ts         # Product data and types
└── public/                 # Static assets
```

## Customization

### Replacing Product Images

Currently, product visuals are CSS gradient shapes. To replace with real product photos:

1. Add your images to `public/products/` (e.g., `public/products/brightening-serum.jpg`)
2. In `components/home/ProductsGrid.tsx` and `components/shop/ProductCard.tsx`, replace the gradient `div` with `next/image`:

```tsx
import Image from 'next/image'

// Replace the gradient div with:
<Image
  src={`/products/${product.id}.jpg`}
  alt={product.name}
  fill
  style={{ objectFit: 'cover' }}
/>
```

3. Update `lib/products.ts` to add an `image` field to each product.

### Updating WhatsApp Number

In `components/layout/WhatsAppButton.tsx`, change the number in the href:

```tsx
href="https://wa.me/92XXXXXXXXXX"  // Replace with your number
```

Also update the contact number in `app/contact/page.tsx`.

### Changing Colors

All brand colors are CSS variables in `app/globals.css`:

```css
:root {
  --c-rose: #B87C5A;   /* Primary accent */
  --c-gold: #C8A060;   /* Secondary accent */
  --c-dark: #18160F;   /* Primary dark */
  /* ... */
}
```

### Adding Products

Edit `lib/products.ts` to add new products:

```ts
{
  id: "new-product",
  name: "Product Name",
  type: "Treatment",
  tagline: "Short tagline",
  description: "Full description...",
  ingredients: ["Ingredient 1", "Ingredient 2"],
  price: 1999,
  size: "30ml",
  badge: "New",           // optional: "Bestseller" | "New"
  gradientBg: "linear-gradient(160deg, #E0C8A8 0%, #B08050 100%)",
  bottleGradient: "linear-gradient(160deg, #E8D4C0 0%, #C49070 40%, #9A6040 100%)",
}
```

## Design System

| Variable | Value | Usage |
|----------|-------|-------|
| `--c-bg` | `#FAF8F4` | Page background |
| `--c-ivory` | `#F2EDE3` | Card backgrounds |
| `--c-dark` | `#18160F` | Primary text + dark sections |
| `--c-rose` | `#B87C5A` | Primary accent (CTA, highlights) |
| `--c-gold` | `#C8A060` | Secondary accent (stars) |
| `--c-muted` | `#7A7468` | Body text |

**Fonts:**
- Headings: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (300, 400, 500)
- UI/Body: [Jost](https://fonts.google.com/specimen/Jost) (200, 300, 400, 500)

## License

© 2024 Dazzlean. All rights reserved.
