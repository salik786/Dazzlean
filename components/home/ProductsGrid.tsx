"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/products";

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
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
        backgroundColor: hovered ? "var(--c-dark)" : "var(--c-ivory)",
        transition: "background-color 0.5s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image Area */}
      <div
        style={{
          height: "340px",
          background: product.gradientBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Badge */}
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              backgroundColor: "var(--c-rose)",
              color: "white",
              fontFamily: "var(--font-jost)",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "5px 10px",
              zIndex: 1,
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Bottle */}
        <motion.div
          animate={hovered ? { y: -16, scale: 1.03 } : { y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            width: "80px",
            height: "160px",
            borderRadius: "40px 40px 24px 24px",
            background: product.bottleGradient,
            boxShadow: "0 24px 48px rgba(0,0,0,0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "10px",
              width: "16px",
              height: "40px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.2)",
              filter: "blur(4px)",
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "10px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: hovered ? "rgba(250,248,244,0.4)" : "var(--c-subtle)",
            transition: "color 0.5s ease",
          }}
        >
          {product.type}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "20px",
            fontWeight: 300,
            color: hovered ? "var(--c-bg)" : "var(--c-dark)",
            transition: "color 0.5s ease",
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "12px",
            fontWeight: 300,
            color: hovered
              ? "rgba(250,248,244,0.35)"
              : "var(--c-subtle)",
            transition: "color 0.5s ease",
            lineHeight: 1.6,
          }}
        >
          {product.ingredients.join(" · ")}
        </p>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
            paddingTop: "16px",
            borderTop: `1px solid ${hovered ? "rgba(250,248,244,0.1)" : "var(--c-ivory2)"}`,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "20px",
              fontWeight: 300,
              color: hovered ? "var(--c-bg)" : "var(--c-dark)",
              transition: "color 0.5s ease",
            }}
          >
            PKR {product.price.toLocaleString()}
          </span>
          <button
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: hovered ? "var(--c-rose)" : "var(--c-dark)",
              backgroundColor: "transparent",
              border: `1px solid ${hovered ? "var(--c-rose)" : "var(--c-dark)"}`,
              padding: "8px 16px",
              cursor: "pointer",
              transition: "all 0.5s ease",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsGrid() {
  return (
    <section
      style={{
        backgroundColor: "var(--c-bg)",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
      className="padded-section px-6 md:px-12 lg:px-20"
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "48px",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
              The Collection
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
              Your Skin&apos;s New Ritual
            </h2>
          </div>
          <Link
            href="/shop"
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
              flexShrink: 0,
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
            View All Products →
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
          className="products-home-grid"
        >
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
