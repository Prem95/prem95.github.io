"use client";

import { useState } from "react";
import { useFadeUp } from "@/hooks/useFadeUp";
import { experience } from "@/lib/data";

const yearsXp = new Date().getFullYear() - 2017;

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(0);
  const ref = useFadeUp<HTMLDivElement>(0.04);

  return (
    <section id="experience" className="py-8 sm:py-12 lg:py-14">
      <div ref={ref}>
        {/* Section header */}
        <div className="section-rule" data-num="02">
          <div>
            <span className="section-label">Experience</span>
            <h2 className="section-title">
              Where I&apos;ve worked<br />
              <span className="dim">and what I shipped</span>
            </h2>
          </div>
        </div>

        {/* Summary bar */}
        <div
          className="flex items-center gap-5 sm:gap-6 mb-4 sm:mb-6 pb-4 sm:pb-5"
          style={{ borderBottom: "1px solid var(--border-light)" }}
        >
          <div>
            <span
              className="block"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                
                fontSize: "clamp(2rem, 6vw, 2.5rem)",
                color: "var(--text-1)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {yearsXp}+
            </span>
            <span className="text-xs" style={{ color: "var(--text-3)" }}>
              years experience
            </span>
          </div>
          <div className="w-px h-8 sm:h-10" style={{ background: "var(--border)" }} />
          <div>
            <span
              className="block"
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                
                fontSize: "clamp(2rem, 6vw, 2.5rem)",
                color: "var(--text-1)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              6
            </span>
            <span className="text-xs" style={{ color: "var(--text-3)" }}>
              roles · AI, ML &amp; software
            </span>
          </div>
        </div>

        {/* Accordion timeline */}
        <div className="relative">
          {/* Vertical spine — desktop only */}
          <div
            className="absolute top-0 bottom-0 w-px hidden sm:block"
            style={{ left: "5.5rem", background: "var(--border-light)" }}
          />

          {experience.map((job, i) => {
            const isOpen = openIdx === i;

            return (
              <div key={`${job.company}-${i}`} className="relative">
                {/* Timeline node */}
                <div
                  className="absolute hidden sm:block w-3.5 h-3.5 border-2 transition-all duration-300"
                  style={{
                    left: "5.5rem",
                    top: "1.2rem",
                    transform: "translateX(-50%)",
                    zIndex: 1,
                    background: isOpen ? "var(--accent)" : "var(--bg)",
                    borderColor: isOpen ? "var(--accent)" : "var(--border-light)",
                    boxShadow: isOpen ? "0 0 0 4px var(--bg), 0 0 8px 0 rgba(0, 0, 0, 0.1)" : "none",
                  }}
                />

                {/* Row */}
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full text-left flex items-start gap-0 py-4 sm:py-5 pr-1 group transition-colors duration-200"
                  style={{
                    background: isOpen ? "var(--bg)" : "transparent",
                  }}
                  aria-expanded={isOpen}
                >
                  {/* Year column — desktop */}
                  <div className="shrink-0 w-24 hidden sm:block pt-0.5 text-right pr-6">
                    <span
                      className="block text-xs leading-snug tabular-nums"
                      style={{ color: isOpen ? "var(--accent)" : "var(--text-3)", fontFamily: "var(--font-mono)" }}
                    >
                      {job.start}
                    </span>
                    <span
                      className="block text-xs leading-snug tabular-nums"
                      style={{ color: isOpen ? "var(--accent-mid)" : "var(--text-4)", fontFamily: "var(--font-mono)" }}
                    >
                      {job.end ?? "now"}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 sm:pl-10">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        {/* Mobile: date on same line as role */}
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <h3
                            className="font-bold text-sm transition-colors duration-150"
                            style={{ color: isOpen ? "var(--accent)" : "var(--text-1)" }}
                          >
                            {job.role}
                          </h3>
                          <span style={{ color: "var(--text-3)", fontSize: "0.8rem" }}>@</span>
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-sm font-medium link-grow"
                            style={{ color: "var(--accent)" }}
                          >
                            {job.company}
                          </a>
                          {job.end === null && (
                            <span
                              className="text-xs px-2 py-1 rounded-sm font-semibold leading-4"
                              style={{
                                color: "#ffffff",
                                background: "oklch(28% 0.08 142)",
                              }}
                            >
                              Now
                            </span>
                          )}
                        </div>
                        {/* Mobile range — tighter */}
                        <p className="sm:hidden text-xs mt-0.5" style={{ color: "var(--text-4)", fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}>
                          {job.range}
                        </p>
                        {/* Desktop location */}
                        <p className="hidden sm:block text-xs mt-0.5" style={{ color: "var(--text-3)" }}>
                          {job.location}
                        </p>
                      </div>

                      {/* Chevron */}
                      <svg
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-3.5 h-3.5 shrink-0 mt-1 transition-transform duration-300"
                        style={{
                          color: "var(--text-4)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                        aria-hidden="true"
                      >
                        <path d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Accordion panel */}
                <div className={`accordion-body ${isOpen ? "open" : ""} ml-0 sm:ml-24`}>
                  <div>
                    <div
                      className="pb-5 sm:pb-6 pl-3.5 sm:pl-10 pr-1 sm:pr-2 pt-1 border-l-2"
                      style={{ borderColor: "var(--accent)", marginLeft: "1px" }}
                    >
                      <ul className="arrow-list space-y-1.5 mb-3">
                        {job.description.map((pt, pi) => (
                          <li key={pi} style={{ fontWeight: pi === 0 ? 600 : 400 }}>
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-1.5 py-0.5 rounded transition-colors duration-150 group/tech hover:bg-accent-tint hover:text-text-1"
                            style={{
                              fontFamily: "var(--font-mono)",
                              background: "var(--surface)",
                              border: "1px solid var(--border-light)",
                              color: "var(--text-2)",
                              fontSize: "0.65rem",
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.background = "var(--accent-tint)";
                              el.style.color = "var(--text-1)";
                              el.style.borderColor = "var(--border)";
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.background = "var(--surface)";
                              el.style.color = "var(--text-2)";
                              el.style.borderColor = "var(--border-light)";
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {i < experience.length - 1 && (
                  <div style={{ height: "1px", background: "var(--border-light)" }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
