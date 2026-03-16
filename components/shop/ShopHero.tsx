"use client";

import { motion } from "framer-motion";

export default function ShopHero() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "50vh",
        paddingTop: "76px",
      }}
      className="shop-hero-section"
    >
      {/* Left */}
      <div
        style={{
          backgroundColor: "var(--c-dark)",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        className="px-6 py-16 md:px-12 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1], delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--c-rose)",
            }}
          >
            The Full Collection
          </span>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(44px, 5.5vw, 80px)",
              lineHeight: 1.05,
              color: "var(--c-bg)",
            }}
          >
            Shop{" "}
            <em style={{ color: "var(--c-rose)", fontStyle: "italic" }}>All</em>{" "}
            Products
          </h1>
        </motion.div>
      </div>

      {/* Right */}
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.03)",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
        className="px-6 py-16 md:px-12 lg:px-20 bg-c-dark"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1], delay: 0.25 }}
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(250,248,244,0.45)",
            maxWidth: "380px",
          }}
        >
          Every product in our collection is carefully formulated for South
          Asian skin. Clean ingredients, clinically tested, and designed to
          deliver visible results — because your skin deserves nothing less.
        </motion.p>
      </div>
    </section>
  );
}
