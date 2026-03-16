"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "rose";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "solid",
  size = "md",
  fullWidth = false,
  type = "button",
  className = "",
}: ButtonProps) {
  const sizeStyles = {
    sm: { padding: "8px 20px", fontSize: "10px", letterSpacing: "3px" },
    md: { padding: "14px 32px", fontSize: "11px", letterSpacing: "3px" },
    lg: { padding: "18px 48px", fontSize: "12px", letterSpacing: "4px" },
  };

  const variantStyles = {
    solid: {
      backgroundColor: "var(--c-dark)",
      color: "var(--c-bg)",
      border: "1px solid var(--c-dark)",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "var(--c-dark)",
      border: "1px solid var(--c-dark)",
    },
    rose: {
      backgroundColor: "var(--c-rose)",
      color: "var(--c-bg)",
      border: "1px solid var(--c-rose)",
    },
  };

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-jost)",
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: sizeStyles[size].letterSpacing,
    fontSize: sizeStyles[size].fontSize,
    padding: sizeStyles[size].padding,
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    width: fullWidth ? "100%" : undefined,
    ...variantStyles[variant],
  };

  if (href) {
    return (
      <Link href={href} style={baseStyle} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={baseStyle}
      className={className}
    >
      {children}
    </button>
  );
}
