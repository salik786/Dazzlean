"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0, 0, 0.2, 1], delay },
});

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingTop: "76px",
      }}
      className="hero-section flex-col md:grid"
    >
      {/* Left Content */}
      <div
        style={{
          backgroundColor: "var(--c-ivory)",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "32px",
        }}
        className="hero-left px-6 py-16 md:px-12 lg:px-20"
      >
        {/* Eyebrow */}
        <motion.div
          {...fadeUp(0.1)}
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
        >
          <span
            style={{
              display: "block",
              width: "32px",
              height: "1px",
              backgroundColor: "var(--c-rose)",
              flexShrink: 0,
            }}
          />
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
            Crafted for Pakistani Skin
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 {...fadeUp(0.25)}>
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(44px, 5.5vw, 80px)",
              lineHeight: 1.05,
              color: "var(--c-dark)",
              display: "block",
            }}
          >
            Reveal Your Natural{" "}
            <em style={{ color: "var(--c-rose)", fontStyle: "italic" }}>
              Radiance
            </em>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.4)}
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--c-muted)",
            maxWidth: "360px",
          }}
        >
          Science-backed skincare formulated for South Asian skin tones. Clean
          ingredients, dermatologist tested, visible results in 14 days.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.55)}
          style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
        >
          <Link
            href="/shop"
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
              transition: "background-color 0.3s ease",
              display: "inline-block",
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
            Explore Collection
          </Link>
          <Link
            href="/about"
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--c-dark)",
              backgroundColor: "transparent",
              textDecoration: "none",
              padding: "14px 32px",
              border: "1px solid var(--c-dark)",
              transition: "all 0.3s ease",
              display: "inline-block",
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
            Our Story
          </Link>
        </motion.div>

        {/* Stat Block */}
        <motion.div
          {...fadeUp(0.65)}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            marginTop: "16px",
            paddingTop: "32px",
            borderTop: "1px solid var(--c-ivory2)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "42px",
              color: "var(--c-dark)",
              lineHeight: 1,
            }}
          >
            4.9★
          </span>
          <span
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "13px",
              fontWeight: 300,
              color: "var(--c-muted)",
              lineHeight: 1.5,
            }}
          >
            Rated by 2,400+
            <br />
            customers
          </span>
        </motion.div>
      </div>

      {/* Right Visual */}
      <div
        style={{
          backgroundColor: "var(--c-ivory2)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          minHeight: "50vh",
        }}
        className="hero-right"
      >
        {/* Decorative rings */}
        <div
          className="hero-ring"
          style={{
            position: "absolute",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            border: "1px solid rgba(192,120,80,0.14)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="hero-ring"
          style={{
            position: "absolute",
            width: "680px",
            height: "680px",
            borderRadius: "50%",
            border: "1px solid rgba(192,120,80,0.07)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        {/* Central bottle + tag */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Bottle */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "130px",
              height: "260px",
              borderRadius: "65px 65px 40px 40px",
              background:
                "linear-gradient(160deg, #E8D4C0 0%, #C49070 40%, #9A6040 100%)",
              boxShadow: "0 48px 96px rgba(154,96,64,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Highlight */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "30px",
                height: "80px",
                borderRadius: "15px",
                background: "rgba(255,255,255,0.15)",
                filter: "blur(8px)",
              }}
            />
            <span
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                fontFamily: "var(--font-jost)",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                userSelect: "none",
              }}
            >
              DAZZLEAN
            </span>
          </motion.div>

          {/* Product Tag */}
          <div
            style={{
              backgroundColor: "white",
              borderLeft: "3px solid var(--c-rose)",
              padding: "16px 24px",
              boxShadow: "0 8px 32px rgba(24,22,15,0.1)",
              minWidth: "200px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "18px",
                fontWeight: 400,
                color: "var(--c-dark)",
                marginBottom: "4px",
              }}
            >
              Brightening Serum
            </p>
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "11px",
                fontWeight: 300,
                color: "var(--c-muted)",
                letterSpacing: "1px",
              }}
            >
              Bestseller · PKR 2,499
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
