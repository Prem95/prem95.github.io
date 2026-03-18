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
      child.style.transform = "translateY(32px)";
      child.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)`;
      child.style.transitionDelay = `${i * 140}ms`;
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
        {/* Status — tight, understated */}
        <div className="h-item flex items-center gap-3 mb-16">
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
          className="h-item leading-none mb-6"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(3.2rem, 13vw, 10rem)",
            fontWeight: 800,
            fontStyle: "italic",
            color: "var(--text-1)",
            letterSpacing: "-0.045em",
          }}
        >
          Prem<br />Kumar.
        </h1>

        {/* Role — extreme weight contrast against the name */}
        <h2
          className="h-item mb-16"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.1rem, 2.8vw, 1.5rem)",
            fontWeight: 300,
            color: "var(--text-3)",
            letterSpacing: "0.01em",
            lineHeight: 1.5,
            maxWidth: "480px",
          }}
        >
          AI Engineer building agentic systems at{" "}
          <a
            href="https://ancileo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-grow"
            style={{ color: "var(--text-1)", fontWeight: 500 }}
          >
            Ancileo
          </a>
          {" "}and shipping SaaS products that make work simpler.
        </h2>

        {/* Chat — the hero interaction */}
        <div className="h-item mb-12" style={{ maxWidth: "520px" }}>
          <Chat />
        </div>

        {/* Minimal CTAs — text links, not buttons */}
        <div className="h-item flex items-center gap-8">
          <a
            href="#products"
            className="text-xs uppercase tracking-widest link-grow transition-colors duration-150"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-1)",
              fontWeight: 500,
            }}
          >
            Work
          </a>
          <a
            href="#experience"
            className="text-xs uppercase tracking-widest link-grow transition-colors duration-150"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-3)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
          >
            Experience
          </a>
          <a
            href={config.resume}
            download
            className="text-xs uppercase tracking-widest link-grow transition-colors duration-150"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-3)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
          >
            Resume
          </a>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest link-grow transition-colors duration-150"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-3)",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-1)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
