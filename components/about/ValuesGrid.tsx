"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    icon: "✦",
    title: "Radical Transparency",
    description:
      "Every ingredient in every product is listed clearly, with scientific explanations of what it does. We believe you have the right to know exactly what you put on your skin.",
  },
  {
    number: "02",
    icon: "◈",
    title: "Inclusivity First",
    description:
      "We develop for all Pakistani skin tones from the start — never as an afterthought. Our shade range, formulations, and marketing reflect the full spectrum of South Asian beauty.",
  },
  {
    number: "03",
    icon: "◎",
    title: "Sustainability Matters",
    description:
      "Our packaging is recyclable, our supply chain is local, and our formulas are biodegradable. Looking good shouldn't cost the planet.",
  },
];

export default function ValuesGrid() {
  return (
    <section
      id="values"
      style={{ backgroundColor: "var(--c-ivory)", padding: "100px 80px" }}
      className="px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24"
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px", display: "flex", flexDirection: "column", gap: "12px" }}
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
            What We Stand For
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              color: "var(--c-dark)",
              lineHeight: 1.1,
            }}
          >
            Our Core Values
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
          className="values-grid"
        >
          {values.map((value, i) => (
            <ValueCard key={value.number} value={value} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "var(--c-dark)" : "var(--c-bg)",
        padding: "56px 48px",
        position: "relative",
        overflow: "hidden",
        transition: "background-color 0.5s ease",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* Background number */}
      <span
        style={{
          position: "absolute",
          top: "16px",
          right: "24px",
          fontFamily: "var(--font-cormorant)",
          fontSize: "120px",
          fontWeight: 300,
          color: hovered ? "rgba(184,124,90,0.12)" : "rgba(184,124,90,0.07)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          transition: "color 0.5s ease",
        }}
      >
        {value.number}
      </span>

      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          border: `1px solid ${hovered ? "rgba(250,248,244,0.2)" : "var(--c-ivory2)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: hovered ? "var(--c-rose)" : "var(--c-rose)",
          transition: "border-color 0.5s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {value.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "24px",
          fontWeight: 400,
          color: hovered ? "var(--c-bg)" : "var(--c-dark)",
          lineHeight: 1.2,
          transition: "color 0.5s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {value.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-jost)",
          fontSize: "13px",
          fontWeight: 300,
          lineHeight: 1.8,
          color: hovered ? "rgba(250,248,244,0.5)" : "var(--c-muted)",
          transition: "color 0.5s ease",
          position: "relative",
          zIndex: 1,
        }}
      >
        {value.description}
      </p>
    </motion.div>
  );
}
