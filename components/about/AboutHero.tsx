"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "80vh",
        paddingTop: "76px",
      }}
      className="about-hero-section"
    >
      {/* Left */}
      <div
        style={{
          backgroundColor: "var(--c-bg)",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "32px",
        }}
        className="px-6 py-16 md:px-12 lg:px-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0, 0, 0.2, 1], delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
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
            Our Story
          </span>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 1.1,
              color: "var(--c-dark)",
            }}
          >
            Skincare Born From{" "}
            <em style={{ color: "var(--c-rose)", fontStyle: "italic" }}>
              Our Own Skin
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--c-muted)",
              maxWidth: "400px",
            }}
          >
            Dazzlean was founded in Lahore with a simple belief: Pakistani skin
            deserves products made specifically for it — not reformulated
            Western imports.
          </p>
          <Link
            href="#story"
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--c-bg)",
              backgroundColor: "var(--c-dark)",
              textDecoration: "none",
              padding: "14px 32px",
              display: "inline-block",
              width: "fit-content",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--c-rose)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--c-dark)")
            }
          >
            Read the Full Story
          </Link>
        </motion.div>
      </div>

      {/* Right — Split visual */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          backgroundColor: "var(--c-dark)",
        }}
      >
        {/* Top half — warm visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background:
              "linear-gradient(160deg, #E8D4C0 0%, #C49070 40%, #9A6040 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative ring */}
          <div
            style={{
              position: "absolute",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          />
          {/* Bottle */}
          <div
            style={{
              width: "90px",
              height: "180px",
              borderRadius: "45px 45px 28px 28px",
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 100%)",
              boxShadow: "0 24px 48px rgba(0,0,0,0.2)",
              zIndex: 1,
            }}
          />
        </motion.div>

        {/* Bottom half — dark visual with text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            background:
              "linear-gradient(160deg, #1A2030 0%, #0D1520 100%)",
            display: "flex",
            alignItems: "flex-end",
            padding: "40px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "18px",
              fontWeight: 300,
              color: "rgba(250,248,244,0.4)",
              letterSpacing: "1px",
            }}
          >
            Lahore, Pakistan · Est. 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
}
