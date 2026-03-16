"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      style={{
        backgroundColor: "var(--c-ivory2)",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      className="padded-section px-6 md:px-12 lg:px-20"
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="newsletter-grid"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
            Stay Connected
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
            Skincare Tips &amp; Exclusive Offers
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--c-muted)",
              maxWidth: "380px",
            }}
          >
            Join our community of 2,400+ skincare enthusiasts. Get expert tips,
            early access to new launches, and exclusive subscriber discounts
            delivered to your inbox.
          </p>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {submitted ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "40px",
                backgroundColor: "var(--c-ivory)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  fontWeight: 300,
                  color: "var(--c-dark)",
                }}
              >
                Welcome to Dazzlean
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "var(--c-muted)",
                }}
              >
                Thank you, {name}! Check your inbox for a welcome gift.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--c-dark)",
                  backgroundColor: "var(--c-bg)",
                  border: "1px solid var(--c-ivory3)",
                  padding: "18px",
                  outline: "none",
                  width: "100%",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--c-rose)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "var(--c-ivory3)")
                }
              />
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--c-dark)",
                  backgroundColor: "var(--c-bg)",
                  border: "1px solid var(--c-ivory3)",
                  padding: "18px",
                  outline: "none",
                  width: "100%",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--c-rose)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "var(--c-ivory3)")
                }
              />
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "var(--c-bg)",
                  backgroundColor: "var(--c-rose)",
                  border: "none",
                  padding: "18px",
                  cursor: "pointer",
                  width: "100%",
                  transition: "background-color 0.3s ease",
                  marginTop: "4px",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--c-dark)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--c-rose)")
                }
              >
                Subscribe Now
              </button>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: "var(--c-subtle)",
                  textAlign: "center",
                  marginTop: "4px",
                }}
              >
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
