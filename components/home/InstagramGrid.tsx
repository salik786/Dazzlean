"use client";

import { motion } from "framer-motion";

const gridCells = [
  "linear-gradient(135deg, #E8D4C0 0%, #C49070 100%)",
  "linear-gradient(135deg, #B8D0B8 0%, #789478 100%)",
  "linear-gradient(135deg, #D8C8A0 0%, #A89068 100%)",
  "linear-gradient(135deg, #B0C0D8 0%, #6880A8 100%)",
  "linear-gradient(135deg, #E0C8B0 0%, #B09070 100%)",
  "linear-gradient(135deg, #C8B8D8 0%, #907890 100%)",
];

export default function InstagramGrid() {
  return (
    <section style={{ backgroundColor: "var(--c-bg)" }}>
      {/* Header */}
      <div
        style={{
          paddingTop: "80px",
          paddingBottom: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1440px",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "16px",
        }}
        className="px-6 pt-16 pb-8 md:px-12 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
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
            Follow Along
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 300,
              color: "var(--c-dark)",
            }}
          >
            @dazzlean.pk
          </h2>
        </motion.div>
        <a
          href="https://instagram.com/dazzlean.pk"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--c-dark)",
            textDecoration: "none",
            border: "1px solid var(--c-dark)",
            padding: "12px 24px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "var(--c-dark)";
            el.style.color = "var(--c-bg)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "var(--c-dark)";
          }}
        >
          View Instagram →
        </a>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "3px",
        }}
        className="instagram-grid"
      >
        {gridCells.map((gradient, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ scale: 1.06 }}
            style={{
              aspectRatio: "1 / 1",
              background: gradient,
              cursor: "pointer",
              overflow: "hidden",
              transition: "transform 0.5s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
