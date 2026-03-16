"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "2,400+", label: "Happy Customers" },
  { number: "4.9★", label: "Average Rating" },
  { number: "4", label: "Hero Products" },
  { number: "14 Days", label: "To Results" },
];

export default function StatsBar() {
  return (
    <section
      style={{
        backgroundColor: "var(--c-rose)",
        padding: "64px 80px",
      }}
      className="px-6 py-12 md:px-12 lg:px-20"
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "16px",
              position: "relative",
            }}
          >
            {/* Divider */}
            {i > 0 && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1px",
                  height: "40px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
              />
            )}

            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "52px",
                color: "white",
                lineHeight: 1,
                textAlign: "center",
              }}
            >
              {stat.number}
            </span>
            <span
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                textAlign: "center",
              }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
