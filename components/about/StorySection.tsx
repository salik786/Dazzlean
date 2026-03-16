"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section
      id="story"
      style={{ padding: "120px 80px", backgroundColor: "var(--c-bg)" }}
      className="px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28"
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "96px",
          alignItems: "center",
        }}
        className="story-grid"
      >
        {/* Left — Visual composition */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          style={{ position: "relative", height: "600px" }}
        >
          {/* Background block */}
          <div
            style={{
              position: "absolute",
              right: "60px",
              bottom: "60px",
              left: 0,
              top: 0,
              backgroundColor: "var(--c-ivory2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Bottle in center */}
            <div
              style={{
                width: "110px",
                height: "220px",
                borderRadius: "55px 55px 36px 36px",
                background:
                  "linear-gradient(160deg, #E8D4C0 0%, #C49070 40%, #9A6040 100%)",
                boxShadow: "0 32px 64px rgba(154,96,64,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "14px",
                  width: "20px",
                  height: "60px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.2)",
                  filter: "blur(8px)",
                }}
              />
            </div>
          </div>

          {/* Overlapping dark stat box */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "200px",
              height: "240px",
              backgroundColor: "var(--c-dark)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 300,
                fontSize: "52px",
                color: "white",
                lineHeight: 1,
              }}
            >
              2,400+
            </span>
            <span
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "10px",
                fontWeight: 300,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(250,248,244,0.45)",
                textAlign: "center",
              }}
            >
              Happy Customers
            </span>
          </div>
        </motion.div>

        {/* Right — Story text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
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
            The Beginning
          </span>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 300,
              color: "var(--c-dark)",
              lineHeight: 1.2,
            }}
          >
            Why We Started
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "var(--c-muted)",
            }}
          >
            Growing up in Lahore, our founder Fatima struggled with hyperpigmentation
            and uneven skin tone. She tried product after product — all imported,
            all formulated for European skin, none truly understanding the unique
            needs of South Asian complexions. After years of trial and error, she
            decided to create the brand she always wished existed.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "var(--c-muted)",
            }}
          >
            In 2024, Dazzlean launched with four hero products, each meticulously
            developed in partnership with board-certified dermatologists who
            specialise in South Asian skin. Within months, the results spoke for
            themselves — 2,400+ customers and a 4.9-star rating built entirely on
            word-of-mouth.
          </p>

          {/* Pull Quote */}
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "24px",
              fontWeight: 300,
              color: "var(--c-rose)",
              borderLeft: "2px solid var(--c-rose)",
              paddingLeft: "24px",
              margin: "8px 0",
              lineHeight: 1.5,
            }}
          >
            "Pakistani skin is beautiful — it just needed products that truly
            understood it."
          </blockquote>

          {/* Founder Signature */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "32px",
                fontWeight: 400,
                color: "var(--c-dark)",
              }}
            >
              Fatima Zahra
            </span>
            <span
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--c-rose)",
              }}
            >
              Founder & CEO, Dazzlean
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
