"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--c-bg)",
        overflow: "hidden",
      }}
    >
      {/* Image Area */}
      <div
        style={{
          height: "460px",
          background: product.gradientBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.5s ease",
        }}
      >
        {/* Badge */}
        {product.badge && (
          <div
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              backgroundColor: "var(--c-rose)",
              color: "white",
              fontFamily: "var(--font-jost)",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "6px 12px",
              zIndex: 1,
            }}
          >
            {product.badge === "New" ? "New Launch" : product.badge}
          </div>
        )}

        {/* Bottle */}
        <motion.div
          animate={hovered ? { y: -16 } : { y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            width: "100px",
            height: "200px",
            borderRadius: "50px 50px 30px 30px",
            background: product.bottleGradient,
            boxShadow: "0 32px 64px rgba(0,0,0,0.15)",
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
              height: "50px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.2)",
              filter: "blur(6px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "10px",
              fontFamily: "var(--font-jost)",
              fontSize: "8px",
              fontWeight: 400,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              writingMode: "vertical-rl",
              userSelect: "none",
            }}
          >
            DAZZLEAN
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          flex: 1,
        }}
      >
        {/* Type */}
        <span
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "9px",
            fontWeight: 400,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--c-rose)",
          }}
        >
          {product.type}
        </span>

        {/* Name */}
        <h3
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "24px",
            fontWeight: 300,
            color: "var(--c-dark)",
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "13px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--c-muted)",
          }}
        >
          {product.description}
        </p>

        {/* Ingredient Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
          {product.ingredients.map((ing) => (
            <span
              key={ing}
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "9px",
                fontWeight: 400,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "var(--c-muted)",
                backgroundColor: "var(--c-ivory)",
                border: "1px solid var(--c-ivory2)",
                padding: "4px 10px",
                borderRadius: "100px",
              }}
            >
              {ing}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: "20px",
            borderTop: "1px solid var(--c-ivory2)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "24px",
                fontWeight: 300,
                color: "var(--c-dark)",
                lineHeight: 1,
              }}
            >
              PKR {product.price.toLocaleString()}
            </p>
            <p
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "11px",
                fontWeight: 300,
                color: "var(--c-subtle)",
                marginTop: "2px",
              }}
            >
              {product.size}
            </p>
          </div>
          <button
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--c-bg)",
              backgroundColor: hovered ? "var(--c-rose)" : "var(--c-dark)",
              border: "none",
              padding: "12px 24px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.article>
  );
}
