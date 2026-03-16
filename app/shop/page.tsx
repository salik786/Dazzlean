"use client";

import { useState } from "react";
import ShopHero from "@/components/shop/ShopHero";
import FilterBar from "@/components/shop/FilterBar";
import ProductCard from "@/components/shop/ProductCard";
import { products, getProductsByType } from "@/lib/products";

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All Products");

  const typeMap: Record<string, string> = {
    Serums: "Treatment",
    Cleansers: "Cleanser",
    SPF: "Sun Protection",
    Moisturisers: "Moisturiser",
  };

  const filtered =
    activeFilter === "All Products"
      ? products
      : products.filter(
          (p) =>
            p.type === typeMap[activeFilter] ||
            p.type.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <>
      <ShopHero />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div
        style={{
          backgroundColor: "var(--c-bg)",
          padding: "72px 80px",
        }}
        className="px-6 py-12 md:px-12 lg:px-20 lg:py-16"
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "center",
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
                No products found
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jost)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--c-muted)",
                }}
              >
                Try a different filter
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "48px",
              }}
              className="shop-grid"
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
