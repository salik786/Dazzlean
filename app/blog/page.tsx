import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal — Dazzlean",
  description:
    "Expert skincare tips, ingredient deep-dives, and routines tailored for Pakistani skin. The Dazzlean Journal.",
};

const posts = [
  {
    id: "spf-everyday",
    category: "Sun Care",
    title: "Why Every Pakistani Needs SPF — Even in Winter",
    excerpt:
      "UV radiation doesn't take a season off. Here's why daily SPF is the single most impactful step for South Asian skin, regardless of the weather.",
    readTime: "5 min read",
    date: "March 10, 2024",
    gradient: "linear-gradient(135deg, #B0C0D8 0%, #6880A8 100%)",
  },
  {
    id: "vitamin-c-guide",
    category: "Ingredients",
    title: "The Complete Guide to Vitamin C for South Asian Skin",
    excerpt:
      "Vitamin C is the most studied brightening ingredient in skincare. But how do you choose the right form, concentration, and routine?",
    readTime: "8 min read",
    date: "February 28, 2024",
    gradient: "linear-gradient(135deg, #E0C8A8 0%, #B08050 100%)",
  },
  {
    id: "night-routine",
    category: "Routines",
    title: "The 3-Step Night Routine That Actually Works",
    excerpt:
      "You don't need 10 steps. Here's the minimal, effective nighttime routine our dermatologist recommends for busy Pakistani women.",
    readTime: "4 min read",
    date: "February 15, 2024",
    gradient: "linear-gradient(135deg, #D8C8A0 0%, #A89068 100%)",
  },
  {
    id: "hyperpigmentation",
    category: "Skin Concerns",
    title: "Understanding Hyperpigmentation in South Asian Skin",
    excerpt:
      "Dark spots, post-acne marks, and melasma are incredibly common in South Asian skin — and entirely treatable with the right approach.",
    readTime: "7 min read",
    date: "February 1, 2024",
    gradient: "linear-gradient(135deg, #B8D0B8 0%, #789478 100%)",
  },
  {
    id: "cleanser-myth",
    category: "Education",
    title: "The Biggest Myth About Cleansers (And What to Use Instead)",
    excerpt:
      "Squeaky clean skin isn't healthy skin. Here's why your cleanser might be sabotaging your entire routine — and how to fix it.",
    readTime: "5 min read",
    date: "January 20, 2024",
    gradient: "linear-gradient(135deg, #C8B8D8 0%, #907890 100%)",
  },
  {
    id: "ingredients-layering",
    category: "Tips",
    title: "How to Layer Skincare Ingredients Without Irritation",
    excerpt:
      "Niacinamide with Vitamin C? Retinol with AHAs? We break down the ingredient layering rules every Pakistani skincare lover should know.",
    readTime: "6 min read",
    date: "January 8, 2024",
    gradient: "linear-gradient(135deg, #E8D4C0 0%, #C49070 100%)",
  },
];

export default function BlogPage() {
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
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
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
            The Journal
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
            Skincare{" "}
            <em style={{ color: "var(--c-rose)", fontStyle: "italic" }}>
              Wisdom
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-jost)",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(250,248,244,0.45)",
              maxWidth: "480px",
            }}
          >
            Expert tips, ingredient deep-dives, and science-backed routines —
            all tailored for South Asian skin.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div
        style={{ padding: "80px", maxWidth: "1440px", margin: "0 auto" }}
        className="px-6 py-12 md:px-12 lg:px-20"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
          className="blog-grid"
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  backgroundColor: "var(--c-ivory)",
                  overflow: "hidden",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                {/* Visual */}
                <div
                  style={{
                    height: "200px",
                    background: post.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "48px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.3)",
                      fontStyle: "italic",
                    }}
                  >
                    {post.category.charAt(0)}
                  </span>
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
                  <span
                    style={{
                      fontFamily: "var(--font-jost)",
                      fontSize: "9px",
                      fontWeight: 400,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "var(--c-rose)",
                    }}
                  >
                    {post.category}
                  </span>
                  <h2
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "22px",
                      fontWeight: 300,
                      color: "var(--c-dark)",
                      lineHeight: 1.3,
                    }}
                  >
                    {post.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-jost)",
                      fontSize: "13px",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "var(--c-muted)",
                      flex: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingTop: "16px",
                      borderTop: "1px solid var(--c-ivory2)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "11px",
                        fontWeight: 300,
                        color: "var(--c-subtle)",
                      }}
                    >
                      {post.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jost)",
                        fontSize: "11px",
                        fontWeight: 300,
                        color: "var(--c-subtle)",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
