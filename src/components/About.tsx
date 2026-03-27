"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import { about } from "@/lib/data";

const FACTS = [
  { value: "8+", label: "Years in AI/ML" },
  { value: "3",  label: "SaaS products live" },
  { value: "6",  label: "Companies shipped at" },
  { value: "60%", label: "Claims time cut" },
];

const FOCUS = ["LangGraph", "RAG", "LangChain", "DSPy", "LlamaIndex", "OpenAI", "Azure", "Kubernetes"];

export default function About() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28">
      <div ref={ref}>
        {/* Section header */}
        <div className="section-rule" data-num="01">
          <div>
            <span className="section-label">About</span>
            <h2 className="section-title">
              Who I am<br />
              <span className="dim">and what I build</span>
            </h2>
          </div>
        </div>

        {/* ── Top row: photo + statement ── */}
        <div className="flex gap-6 sm:gap-10 items-start mb-10 sm:mb-12">
          {/* Photo — small, precise, unapologetic */}
          <div className="shrink-0">
            <img
              src="/avatar.jpg"
              alt="Prem Kumar"
              width={80}
              height={80}
              style={{
                width: "clamp(64px, 12vw, 88px)",
                height: "clamp(64px, 12vw, 88px)",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "grayscale(15%) contrast(1.05)",
                border: "1px solid var(--border)",
              }}
            />
          </div>

          {/* Opening line — confident, not corporate */}
          <div className="pt-1">
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "clamp(1.15rem, 3.5vw, 1.6rem)",
                color: "var(--text-1)",
                lineHeight: 1.2,
                letterSpacing: "-0.025em",
              }}
            >
              AI Engineer building things<br />
              that actually work in production.
            </p>
            <p className="mt-2 text-sm" style={{ color: "var(--text-3)" }}>
              Ancileo · Singapore (Remote)
            </p>
          </div>
        </div>

        {/* ── Stat strip ── */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 mb-10 sm:mb-12"
          style={{ borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}
        >
          {FACTS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`py-5 px-4 sm:px-6 ${
                /* mobile: no border on right col (i=1,3); desktop: no border on last (i=3) */
                i === 1 ? "sm:border-r" :
                i === 3 ? "" :
                "border-r"
              }`}
              style={{ borderColor: "var(--border-light)" }}
            >
              <span
                className="block"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontStyle: "italic",
                  fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                  color: "var(--text-1)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span
                className="block mt-1 text-xs leading-snug"
                style={{ color: "var(--text-4)", fontFamily: "var(--font-mono)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Two-col: bio + skills ── */}
        <div className="grid sm:grid-cols-[1fr_auto] gap-10 sm:gap-16">
          {/* Bio — liner notes style */}
          <div>
            <div className="space-y-4 mb-7">
              {about.bio.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: i === 0 ? "var(--text-1)" : "var(--text-2)",
                    lineHeight: 1.75,
                    fontSize: i === 0 ? "1rem" : "0.925rem",
                    fontWeight: i === 0 ? 500 : 400,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Focus areas — inline typeset, not a grid */}
            <div>
              <span
                className="uppercase"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.25em",
                  color: "var(--text-4)",
                }}
              >
                Current focus
              </span>
              <p className="mt-2 leading-loose" style={{ color: "var(--text-2)" }}>
                {FOCUS.map((tag, i) => (
                  <span key={tag}>
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-1)",
                        borderBottom: "1px solid var(--border)",
                        paddingBottom: "1px",
                      }}
                    >
                      {tag}
                    </span>
                    {i < FOCUS.length - 1 && (
                      <span style={{ color: "var(--text-4)", margin: "0 0.4rem", fontSize: "0.7rem" }}>·</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Side column — links + availability */}
          <div className="sm:w-44 shrink-0 flex flex-col gap-6">
            <div>
              <span
                className="block uppercase mb-3"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.625rem", letterSpacing: "0.25em", color: "var(--text-4)" }}
              >
                Reach me
              </span>
              <div className="space-y-2.5">
                {[
                  { label: "Email", href: "mailto:premkumar@premstroke.com" },
                  { label: "LinkedIn", href: "https://linkedin.com/in/prem-kumar" },
                  { label: "GitHub", href: "https://github.com/Prem95" },
                  { label: "Twitter / X", href: "https://twitter.com/premstroke95" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                    style={{ color: "var(--text-2)" }}
                  >
                    <span className="text-sm link-grow">{label}</span>
                    <span
                      className="text-xs ml-2 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: "var(--text-4)" }}
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="pt-5"
              style={{ borderTop: "1px solid var(--border-light)" }}
            >
              <span
                className="flex items-center gap-2 text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)", letterSpacing: "0.05em" }}
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full opacity-60"
                    style={{ background: "var(--accent)", borderRadius: "50%" }}
                  />
                  <span
                    className="relative inline-flex h-1.5 w-1.5"
                    style={{ background: "var(--accent)", borderRadius: "50%" }}
                  />
                </span>
                Open to consulting
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
