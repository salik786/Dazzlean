"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I've tried so many serums that promise to brighten my skin, but Dazzlean's Brightening Serum actually delivered. Within two weeks, my colleagues started asking what I was doing differently. My skin has never looked this radiant.",
    author: "Aisha Malik",
    city: "Lahore",
    stars: 5,
    featured: true,
  },
  {
    quote:
      "Finally, a Pakistani brand that truly understands our skin. The Gentle Face Wash leaves my skin clean without that tight feeling I hate.",
    author: "Zara Ahmed",
    city: "Karachi",
    stars: 5,
    featured: false,
  },
  {
    quote:
      "The SPF 50 Sunscreen is a game-changer. No white cast, no greasy feeling — just perfect protection that blends beautifully into my skin.",
    author: "Sana Iqbal",
    city: "Islamabad",
    stars: 5,
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section
      style={{ backgroundColor: "var(--c-ivory)", paddingTop: "100px", paddingBottom: "100px" }}
      className="padded-section px-6 md:px-12 lg:px-20"
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "48px", display: "flex", flexDirection: "column", gap: "12px" }}
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
            What They Say
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
            Loved Across Pakistan
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "2px",
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={t.featured ? "testimonial-card testimonial-card--featured" : "testimonial-card"}
              style={{
                backgroundColor: t.featured ? "var(--c-dark)" : "var(--c-bg)",
                padding: t.featured ? "56px" : "40px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Quote mark */}
              <span
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "72px",
                  lineHeight: 0.8,
                  color: t.featured
                    ? "rgba(184,124,90,0.25)"
                    : "rgba(184,124,90,0.15)",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px" }}>
                {"★★★★★".split("").map((star, si) => (
                  <span
                    key={si}
                    style={{ color: "var(--c-gold)", fontSize: "16px" }}
                  >
                    {star}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: t.featured ? "18px" : "16px",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: t.featured
                    ? "rgba(250,248,244,0.65)"
                    : "var(--c-dark)",
                  flex: 1,
                }}
              >
                {t.quote}
              </blockquote>

              {/* Author */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: t.featured ? "var(--c-bg)" : "var(--c-dark)",
                    marginBottom: "2px",
                  }}
                >
                  {t.author}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "11px",
                    fontWeight: 300,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: t.featured
                      ? "rgba(250,248,244,0.35)"
                      : "var(--c-subtle)",
                  }}
                >
                  {t.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
