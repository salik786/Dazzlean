"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: scrolled ? "64px" : "76px",
          backgroundColor: scrolled
            ? "rgba(250,248,244,0.98)"
            : "rgba(250,248,244,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(184,124,90,0.15)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="px-5 md:px-12 lg:px-20"
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "26px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "var(--c-dark)",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            Dazzl<span style={{ color: "var(--c-rose)" }}>ean</span>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex"
            style={{ gap: "40px", alignItems: "center" }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "11px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    fontWeight: 300,
                    color: isActive ? "var(--c-rose)" : "var(--c-dark)",
                    textDecoration: "none",
                    position: "relative",
                    paddingBottom: "4px",
                  }}
                  className="nav-link group"
                >
                  {link.label}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "1px",
                      backgroundColor: "var(--c-rose)",
                      width: isActive ? "100%" : "0%",
                      transition: "width 0.3s ease",
                    }}
                    className="group-hover:!w-full"
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div
            className="hidden md:flex"
            style={{ gap: "24px", alignItems: "center" }}
          >
            <button
              aria-label="Search"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--c-dark)",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Account"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--c-dark)",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                fontFamily: "var(--font-jost)",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 300,
                gap: "6px",
              }}
            >
              <User size={16} strokeWidth={1.5} />
              Account
            </button>
            <Link
              href="/shop"
              style={{
                fontFamily: "var(--font-jost)",
                fontSize: "11px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 400,
                color: "var(--c-bg)",
                backgroundColor: "var(--c-dark)",
                textDecoration: "none",
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "background-color 0.3s ease",
                flexShrink: 0,
              }}
              className="hover:bg-c-rose"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Cart (0)
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--c-dark)",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--c-bg)",
            zIndex: 49,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
            paddingTop: "76px",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "36px",
                  fontWeight: 300,
                  color: isActive ? "var(--c-rose)" : "var(--c-dark)",
                  textDecoration: "none",
                  letterSpacing: "2px",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/shop"
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: 400,
              color: "var(--c-bg)",
              backgroundColor: "var(--c-dark)",
              textDecoration: "none",
              padding: "14px 32px",
              marginTop: "16px",
            }}
          >
            Cart (0)
          </Link>
        </div>
      )}
    </>
  );
}
