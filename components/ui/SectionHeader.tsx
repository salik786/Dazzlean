interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  eyebrowColor?: string;
  titleColor?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({
  eyebrow,
  title,
  eyebrowColor = "var(--c-rose)",
  titleColor = "var(--c-dark)",
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      style={{
        textAlign: align,
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jost)",
          fontSize: "10px",
          fontWeight: 400,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: eyebrowColor,
        }}
      >
        {eyebrow}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 300,
          color: titleColor,
          lineHeight: 1.1,
          letterSpacing: "-0.5px",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
