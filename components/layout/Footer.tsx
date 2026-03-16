"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const shopLinks = [
  { href: "/shop", label: "All Products" },
  { href: "/shop?cat=Serums", label: "Serums" },
  { href: "/shop?cat=Cleansers", label: "Cleansers" },
  { href: "/shop?cat=SPF", label: "SPF & Sun Care" },
  { href: "/shop?cat=Moisturisers", label: "Moisturisers" },
];

const companyLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/blog", label: "Journal" },
  { href: "/about#values", label: "Our Values" },
  { href: "/contact", label: "Press & Media" },
];

const supportLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/contact#faq", label: "FAQ" },
  { href: "/contact#shipping", label: "Shipping Info" },
  { href: "/contact#returns", label: "Returns Policy" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--c-dark)",
        color: "var(--c-bg)",
      }}
    >
      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingTop: "80px",
          paddingBottom: "64px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "64px",
        }}
        className="footer-grid px-6 md:px-12 lg:px-20"
      >
        {/* Brand Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "28px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "var(--c-bg)",
              textDecoration: "none",
            }}
          >
            Dazzl<span style={{ color: "var(--c-rose)" }}>ean</span>
          </Link>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "13px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(250,248,244,0.45)",
              maxWidth: "260px",
            }}
          >
            Premium skincare crafted for Pakistani skin. Science-backed
            formulas, clean ingredients, visible results.
          </p>
          {/* Social Links */}
          <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
            {[
              {
                icon: Instagram,
                href: "https://instagram.com/dazzlean.pk",
                label: "Instagram",
              },
              {
                icon: Facebook,
                href: "https://facebook.com/dazzlean",
                label: "Facebook",
              },
              {
                icon: Twitter,
                href: "https://twitter.com/dazzlean",
                label: "Twitter",
              },
              {
                icon: Youtube,
                href: "https://youtube.com/@dazzlean",
                label: "YouTube",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  color: "rgba(250,248,244,0.4)",
                  transition: "color 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                }}
                className="hover:text-c-rose"
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--c-rose)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(250,248,244,0.4)")
                }
              >
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop Column */}
        <FooterColumn title="Shop" links={shopLinks} />

        {/* Company Column */}
        <FooterColumn title="Company" links={companyLinks} />

        {/* Support Column */}
        <FooterColumn title="Support" links={supportLinks} />
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(250,248,244,0.08)",
          maxWidth: "1440px",
          margin: "0 auto",
          paddingTop: "24px",
          paddingBottom: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="footer-bottom px-6 md:px-12 lg:px-20"
      >
        <p
          style={{
            fontFamily: "var(--font-jost)",
            fontSize: "12px",
            fontWeight: 300,
            color: "rgba(250,248,244,0.3)",
            letterSpacing: "1px",
          }}
        >
          © 2024 Dazzlean. All rights reserved. Made with care in Pakistan.
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { href: "/privacy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms of Service" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "11px",
                fontWeight: 300,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(250,248,244,0.3)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--c-rose)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(250,248,244,0.3)")
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h4
        style={{
          fontFamily: "var(--font-jost)",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "var(--c-rose)",
        }}
      >
        {title}
      </h4>
      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {links.map(({ href, label }) => (
          <Link
            key={label}
            href={href}
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "13px",
              fontWeight: 300,
              color: "rgba(250,248,244,0.45)",
              textDecoration: "none",
              transition: "color 0.3s ease",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--c-rose)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "rgba(250,248,244,0.45)")
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
