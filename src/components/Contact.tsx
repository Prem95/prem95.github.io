"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import { config } from "@/lib/data";

export default function Contact() {
  const ref = useFadeUp<HTMLDivElement>(0.1);

  return (
    <section id="contact" className="py-24 lg:py-28">
      <div ref={ref} className="max-w-xl">
        <span className="section-label">04. What&apos;s Next?</span>

        <h2
          className="mb-5"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
            fontWeight: 800,
            fontStyle: "italic",
            color: "var(--text-1)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Get In Touch
        </h2>

        <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-2)" }}>
          I&apos;m open to consulting engagements and product partnerships. Whether
          you want to talk about AI systems, explore a collaboration, or just
          say hello — reach out.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${config.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-150"
            style={{
              padding: "0.8rem 2rem",
              background: "var(--accent)",
              color: "white",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-mid)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
            }}
          >
            Send an email
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M2.75 2h10.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0113.25 14H2.75A1.75 1.75 0 011 12.25v-8.5C1 2.784 1.784 2 2.75 2zm0 1.5a.25.25 0 00-.25.25V4.9l5.5 3.584 5.5-3.584V3.75a.25.25 0 00-.25-.25H2.75zm-.25 8.75c0 .138.112.25.25.25h10.5a.25.25 0 00.25-.25V6.604l-5.216 3.399a.75.75 0 01-.818 0L2.5 6.604v5.646z" />
            </svg>
          </a>
          <a
            href={config.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200"
            style={{
              padding: "0.8rem 2rem",
              border: "1px solid var(--border)",
              color: "var(--text-2)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--accent)";
              el.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-2)";
            }}
          >
            Twitter / X
          </a>
        </div>
      </div>
    </section>
  );
}
