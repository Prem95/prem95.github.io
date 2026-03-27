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
      className="flex flex-col justify-end"
      style={{ minHeight: "auto", paddingTop: "1rem", paddingBottom: "1rem" }}
    >
      <div ref={ref}>
        {/* Status */}
        <div className="h-item flex items-center gap-2.5 mb-4 sm:mb-10">
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
            className="uppercase"
            style={{
              color: "var(--text-3)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
            }}
          >
            {config.availability}
          </span>
        </div>

        {/* Name */}
        <h1
          className="h-item mb-3 sm:mb-5"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2.8rem, 14vw, 10rem)",
            fontWeight: 800,
            
            color: "var(--text-1)",
            letterSpacing: "-0.045em",
            lineHeight: 0.92,
          }}
        >
          Prem<br />Kumar.
        </h1>

        {/* Role */}
        <h2
          className="h-item mb-6 sm:mb-10"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 2.8vw, 1.5rem)",
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

        {/* Chat */}
        <div className="h-item mb-5 sm:mb-8 w-full" style={{ maxWidth: "520px" }}>
          <Chat />
        </div>

        {/* CTAs — horizontal scroll on mobile for clean flow */}
        <div
          className="h-item flex items-center gap-x-6 sm:gap-x-8 gap-y-3 overflow-x-auto no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {[
            { href: "#products", label: "Work", primary: true },
            { href: "#experience", label: "Experience" },
            { href: config.resume, label: "Resume", download: true },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label, primary, download }) => (
            <a
              key={label}
              href={href}
              {...(download ? { download: true } : {})}
              className="text-xs uppercase tracking-widest link-grow transition-colors duration-150 whitespace-nowrap shrink-0"
              style={{
                fontFamily: "var(--font-mono)",
                color: primary ? "var(--text-1)" : "var(--text-3)",
                fontWeight: primary ? 500 : 400,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
