"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import { about } from "@/lib/data";

export default function About() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-14">
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

        {/* Statement */}
        <div className="mb-8 sm:mb-10">
        </div>

        {/* Bio + links */}
        <div className="grid sm:grid-cols-[1fr_auto] gap-6 sm:gap-12">
          <div>
            <div className="space-y-3 mb-0">
              {about.bio.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--text-2)",
                    lineHeight: 1.75,
                    fontSize: "0.9rem",
                    fontWeight: i === 0 ? 600 : 400,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

          </div>

          {/* Side column — links + availability */}
          <div className="sm:w-44 shrink-0 flex flex-col gap-4">
            <div>
              <span
                className="block uppercase mb-2"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "var(--text-4)" }}
              >
                Reach me
              </span>
              <div className="space-y-1.5">
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
                    className="flex items-center justify-between group py-0.5 transition-colors duration-150"
                    style={{ color: "var(--text-2)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                    }}
                  >
                    <span className="text-sm link-grow font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="pt-3"
              style={{ borderTop: "1px solid var(--border-light)" }}
            >
              <span
                className="flex items-center gap-2 text-xs font-medium"
                style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.05em" }}
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full opacity-75"
                    style={{ background: "var(--accent)", borderRadius: "50%" }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2"
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
