"use client";

import { categories } from "@/lib/products";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterBar({
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div
      style={{
        position: "sticky",
        top: "76px",
        backgroundColor: "var(--c-bg)",
        borderBottom: "1px solid var(--c-ivory2)",
        zIndex: 40,
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "20px 80px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
        className="px-6 md:px-12 lg:px-20"
      >
        <span
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "10px",
            fontWeight: 400,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--c-muted)",
            marginRight: "16px",
            flexShrink: 0,
          }}
        >
          Filter by
        </span>
        {categories.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => onFilterChange(cat)}
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: isActive ? "var(--c-dark)" : "var(--c-muted)",
                backgroundColor: isActive ? "var(--c-ivory)" : "transparent",
                border: `1px solid ${isActive ? "var(--c-dark)" : "var(--c-ivory2)"}`,
                padding: "8px 20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius: "100px",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c-dark)";
                  el.style.color = "var(--c-dark)";
                  el.style.backgroundColor = "var(--c-ivory)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--c-ivory2)";
                  el.style.color = "var(--c-muted)";
                  el.style.backgroundColor = "transparent";
                }
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
