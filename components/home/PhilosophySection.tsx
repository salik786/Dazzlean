"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    title: "Formulated for You",
    description:
      "Every product is specifically designed for South Asian skin tones, addressing hyperpigmentation, uneven tone, and humidity-related concerns unique to Pakistan.",
  },
  {
    number: "02",
    title: "Clean Ingredients Only",
    description:
      "We never use parabens, sulfates, artificial fragrances, or any of the 1,300+ EU-banned chemicals. Our formulas are as clean as they are effective.",
  },
  {
    number: "03",
    title: "Dermatologist Tested",
    description:
      "Each product undergoes rigorous clinical testing by board-certified dermatologists before launch. No guesswork — only proven results.",
  },
  {
    number: "04",
    title: "Visible Results",
    description:
      "We guarantee visible improvement within 14 days or your money back. Our formulas work at the cellular level for lasting, meaningful change.",
  },
];

export default function PhilosophySection() {
  return (
    <section style={{ backgroundColor: "var(--c-dark)", paddingTop: "100px", paddingBottom: "100px" }} className="padded-section px-6 md:px-12 lg:px-20">
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
            Why Dazzlean
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              color: "var(--c-bg)",
              lineHeight: 1.1,
            }}
          >
            Beauty with Purpose
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            borderLeft: "1px solid rgba(250,248,244,0.06)",
          }}
          className="philosophy-grid"
        >
          {items.map((item, i) => (
            <PhilosophyCard key={item.number} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophyCard({
  item,
  index,
}: {
  item: (typeof items)[0];
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
      className="philosophy-card"
      style={{
        padding: "48px 40px",
        borderRight: "1px solid rgba(250,248,244,0.06)",
        borderTop: "1px solid rgba(250,248,244,0.06)",
        borderBottom: "1px solid rgba(250,248,244,0.06)",
        backgroundColor: hovered ? "#1E1C13" : "transparent",
        transition: "background-color 0.4s ease",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "52px",
          fontWeight: 300,
          color: hovered
            ? "rgba(184,124,90,0.45)"
            : "rgba(184,124,90,0.2)",
          lineHeight: 1,
          transition: "color 0.4s ease",
        }}
      >
        {item.number}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "22px",
          fontWeight: 400,
          color: "var(--c-bg)",
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-jost)",
          fontSize: "13px",
          fontWeight: 300,
          lineHeight: 1.8,
          color: "rgba(250,248,244,0.38)",
        }}
      >
        {item.description}
      </p>
    </motion.div>
  );
}
