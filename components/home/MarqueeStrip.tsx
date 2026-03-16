const items = [
  "Dermatologist Tested",
  "Cruelty Free",
  "Made for Pakistani Skin",
  "No Harmful Chemicals",
  "Visible Results in 14 Days",
  "PA++++ Protection",
  "Clean Beauty",
];

export default function MarqueeStrip() {
  const content = items.flatMap((item, i) => [
    <span
      key={`item-${i}`}
      style={{ flexShrink: 0, whiteSpace: "nowrap" }}
    >
      {item}
    </span>,
    <span
      key={`sep-${i}`}
      style={{ color: "var(--c-rose)", margin: "0 16px", flexShrink: 0 }}
      aria-hidden="true"
    >
      ✦
    </span>,
  ]);

  return (
    <div
      style={{
        backgroundColor: "var(--c-dark)",
        padding: "16px 0",
        overflow: "hidden",
        width: "100%",
      }}
      aria-label="Brand claims"
    >
      <div
        className="animate-marquee"
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          fontFamily: "var(--font-jost)",
          fontSize: "10px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "rgba(250,248,244,0.4)",
          gap: 0,
        }}
      >
        {content}
        {content}
      </div>
    </div>
  );
}
