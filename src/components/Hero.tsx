"use client";

import { useEffect, useRef } from "react";
import { config } from "@/lib/data";
import Chat from "@/components/Chat";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll<HTMLElement>(".h-item");
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(28px)";
      child.style.transition = `opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)`;
      child.style.transitionDelay = `${i * 120}ms`;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          child.style.opacity = "1";
          child.style.transform = "none";
        })
      );
    });
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col justify-center"
      style={{ minHeight: "calc(100svh - 0px)", paddingTop: "2rem", paddingBottom: "4rem" }}
    >
      <div ref={ref}>
        {/* Status */}
        <div className="h-item flex items-center gap-3 mb-12">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span
              className="animate-ping absolute inline-flex h-full w-full opacity-75"
              style={{ background: "var(--accent)" }}
            />
            <span
              className="relative inline-flex h-1.5 w-1.5"
              style={{ background: "var(--accent)" }}
            />
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            {config.availability}
          </span>
        </div>

        {/* Name — the unavoidable moment */}
        <h1
          className="h-item leading-none mb-4"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(3rem, 12vw, 9.5rem)",
            fontWeight: 800,
            fontStyle: "italic",
            color: "var(--text-1)",
            letterSpacing: "-0.04em",
          }}
        >
          Prem Kumar.
        </h1>

        {/* Role — dramatic weight contrast */}
        <h2
          className="h-item mb-8"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
            fontWeight: 300,
            color: "var(--text-2)",
            letterSpacing: "-0.01em",
            lineHeight: 1.3,
          }}
        >
          AI Engineer &amp; Builder — agentic systems,&nbsp;
          <span style={{ color: "var(--text-3)" }}>insurance tech &amp; SaaS.</span>
        </h2>

        {/* Tagline */}
        <p
          className="h-item leading-relaxed mb-10 max-w-[420px]"
          style={{ color: "var(--text-3)", fontSize: "0.9rem" }}
        >
          {config.tagline}
        </p>

        {/* Chat */}
        <div className="h-item mb-10 max-w-[520px]">
          <Chat />
        </div>

        {/* CTAs */}
        <div className="h-item flex flex-col sm:flex-row flex-wrap gap-3 mb-14">
          <a
            href="#products"
            className="inline-flex items-center justify-center text-xs font-semibold transition-all duration-200"
            style={{
              padding: "0.875rem 1.5rem",
              background: "var(--accent)",
              color: "var(--bg)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent-mid)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
            }}
          >
            View my work
          </a>
          <a
            href={config.resume}
            download
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold transition-all duration-200"
            style={{
              padding: "0.875rem 1.5rem",
              border: "1px solid var(--border)",
              color: "var(--text-2)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--text-1)";
              el.style.color = "var(--text-1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--text-2)";
            }}
          >
            Resume ↓
          </a>
        </div>

        {/* Quick nav — hidden on mobile (MobileNav covers it) */}
        <div className="h-item hidden sm:flex flex-wrap items-center gap-6">
          {[
            { label: "Experience", href: "#experience" },
            { label: "Products", href: "#products" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-xs uppercase tracking-widest link-grow transition-colors duration-150"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-4)",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-1)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-4)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
