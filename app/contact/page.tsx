"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const faqItems = [
  {
    q: "How long does shipping take?",
    a: "We ship across Pakistan within 2-4 business days. Lahore, Karachi, and Islamabad orders typically arrive in 1-2 days.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, contact us and we'll make it right.",
  },
  {
    q: "Are your products suitable for sensitive skin?",
    a: "Yes. All our products are dermatologist tested, fragrance-free, and formulated to be gentle on sensitive South Asian skin.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes, we offer COD across Pakistan. You can also pay via bank transfer, EasyPaisa, or JazzCash.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--c-bg)" }}>
      {/* Hero */}
      <div
        style={{
          paddingTop: "76px",
          backgroundColor: "var(--c-dark)",
          padding: "120px 80px 80px",
        }}
        className="px-6 pt-28 pb-16 md:px-12 lg:px-20"
      >
        <div
          style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}
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
            Get in Touch
          </span>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 300,
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 1.1,
              color: "var(--c-bg)",
            }}
          >
            We&apos;d Love to{" "}
            <em style={{ color: "var(--c-rose)", fontStyle: "italic" }}>
              Hear from You
            </em>
          </h1>
        </div>
      </div>

      {/* Contact Grid */}
      <div
        style={{ padding: "80px", maxWidth: "1440px", margin: "0 auto" }}
        className="px-6 py-12 md:px-12 lg:px-20"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "var(--c-dark)",
                }}
              >
                Contact Details
              </h2>
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@dazzlean.com",
                  href: "mailto:hello@dazzlean.com",
                },
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: "+92 300 1234567",
                  href: "https://wa.me/923001234567",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Lahore, Pakistan",
                  href: null,
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: "Mon–Sat, 10am–6pm PKT",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid var(--c-ivory2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--c-rose)",
                    }}
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "10px",
                        fontWeight: 400,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color: "var(--c-subtle)",
                        marginBottom: "4px",
                      }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "15px",
                          fontWeight: 300,
                          color: "var(--c-dark)",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--c-rose)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--c-dark)")
                        }
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontFamily: "var(--font-jost)",
                          fontSize: "15px",
                          fontWeight: 300,
                          color: "var(--c-dark)",
                        }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div
              id="faq"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "36px",
                  fontWeight: 300,
                  color: "var(--c-dark)",
                }}
              >
                FAQs
              </h2>
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid var(--c-ivory2)",
                    paddingBottom: "16px",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      fontFamily: "var(--font-jost)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "var(--c-dark)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                      padding: "0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    {item.q}
                    <span
                      style={{
                        flexShrink: 0,
                        fontFamily: "var(--font-jost)",
                        fontSize: "18px",
                        color: "var(--c-rose)",
                        lineHeight: 1,
                      }}
                    >
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "13px",
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: "var(--c-muted)",
                        marginTop: "12px",
                      }}
                    >
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  backgroundColor: "var(--c-ivory)",
                  padding: "64px 48px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "40px", color: "var(--c-rose)" }}>
                  ✦
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: "var(--c-dark)",
                  }}
                >
                  Message Received
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "var(--c-muted)",
                    maxWidth: "300px",
                  }}
                >
                  We&apos;ll get back to you within 24 hours. Thank you for
                  reaching out!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "36px",
                    fontWeight: 300,
                    color: "var(--c-dark)",
                    marginBottom: "8px",
                  }}
                >
                  Send a Message
                </h2>
                {[
                  { name: "name", placeholder: "Your Name", type: "text" },
                  { name: "email", placeholder: "Email Address", type: "email" },
                  { name: "phone", placeholder: "Phone (optional)", type: "tel" },
                ].map((field) => (
                  <input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.name !== "phone"}
                    style={{
                      fontFamily: "var(--font-jost)",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "var(--c-dark)",
                      backgroundColor: "var(--c-ivory)",
                      border: "1px solid var(--c-ivory2)",
                      padding: "16px 20px",
                      outline: "none",
                      width: "100%",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--c-rose)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--c-ivory2)")
                    }
                  />
                ))}
                <textarea
                  placeholder="Your message..."
                  rows={6}
                  required
                  style={{
                    fontFamily: "var(--font-jost)",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "var(--c-dark)",
                    backgroundColor: "var(--c-ivory)",
                    border: "1px solid var(--c-ivory2)",
                    padding: "16px 20px",
                    outline: "none",
                    width: "100%",
                    resize: "vertical",
                    transition: "border-color 0.3s ease",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--c-rose)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--c-ivory2)")
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
                    backgroundColor: "var(--c-dark)",
                    border: "none",
                    padding: "18px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    marginTop: "8px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--c-rose)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--c-dark)")
                  }
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
