"use client";

import { useFadeUp } from "@/hooks/useFadeUp";
import { products, otherProjects } from "@/lib/data";

function ExtIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width={size} height={size}>
      <path d="M6.22 8.72a.75.75 0 001.06 1.06l5.22-5.22v1.69a.75.75 0 001.5 0v-3.5a.75.75 0 00-.75-.75h-3.5a.75.75 0 000 1.5h1.69L6.22 8.72z" />
      <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 007 4H4.75A2.75 2.75 0 002 6.75v4.5A2.75 2.75 0 004.75 14h4.5A2.75 2.75 0 0012 11.25V9a.75.75 0 00-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5z" />
    </svg>
  );
}
function GHIcon({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width={size} height={size}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Products() {
  const headerRef = useFadeUp<HTMLDivElement>();
  const featuredRef = useFadeUp<HTMLDivElement>(0.04);
  const otherRef = useFadeUp<HTMLDivElement>(0.04, true);

  const [featured, ...rest] = products;

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-28">
      <div>
        {/* Section header */}
        <div ref={headerRef}>
          <div className="section-rule" data-num="03">
            <div>
              <span className="section-label">Products</span>
              <h2 className="section-title">
                Things I&apos;ve built<br />
                <span className="dim">and shipped to real users</span>
              </h2>
            </div>
          </div>
        </div>

        {/* ── Featured product — full width strip ── */}
        <div ref={featuredRef}>
          {/* Featured — full black inversion */}
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift group flex flex-col sm:flex-row gap-5 sm:gap-10 p-5 sm:p-8 mb-5"
            style={{
              background: "var(--accent)",
              border: "1px solid var(--accent)",
            }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs border px-2 py-0.5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "oklch(90% 0.004 255)",
                    borderColor: "oklch(30% 0.01 255)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {featured.status}
                </span>
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "oklch(48% 0.008 255)", fontFamily: "var(--font-mono)" }}
                >
                  Featured
                </span>
              </div>
              <h3
                className="mb-3 font-bold"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                  color: "oklch(95% 0.002 255)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                {featured.name}
              </h3>
              <p
                className="text-sm leading-relaxed max-w-sm"
                style={{ color: "oklch(58% 0.008 255)" }}
              >
                {featured.description}
              </p>
            </div>

            <div className="sm:w-44 shrink-0 flex flex-col justify-between gap-5">
              <div className="flex flex-wrap gap-1.5">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5"
                    style={{
                      fontFamily: "var(--font-mono)",
                      background: "oklch(14% 0.01 255)",
                      border: "1px solid oklch(22% 0.01 255)",
                      color: "oklch(55% 0.008 255)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200"
                style={{ color: "oklch(90% 0.004 255)" }}
              >
                Visit site
                <span className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ExtIcon size={13} />
                </span>
              </span>
            </div>
          </a>

          {/* Two smaller products side by side */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-14">
            {rest.map((product) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group flex flex-col p-5 sm:p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-xs border px-1.5 py-0 leading-5"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent)",
                      borderColor: "var(--accent)",
                      background: "var(--accent-tint)",
                    }}
                  >
                    {product.status}
                  </span>
                  <span
                    className="text-[var(--text-3)] group-hover:text-[var(--accent)] transition-colors duration-150"
                  >
                    <ExtIcon size={14} />
                  </span>
                </div>

                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--text-1)" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-4"
                  style={{ color: "var(--text-2)" }}
                >
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-1.5 py-0"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-3)",
                        background: "var(--bg)",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Other projects — compact rows, no cards */}
        <div ref={otherRef}>
          <p
            className="text-xs uppercase tracking-widest mb-5"
            style={{ color: "var(--text-3)", fontFamily: "var(--font-mono)" }}
          >
            Other noteworthy projects
          </p>

          <div className="space-y-0">
            {otherProjects.map((proj, i) => (
              <div key={proj.name}>
                <div className="flex items-start justify-between gap-4 py-4 group">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                      <h4
                        className="font-medium text-sm"
                        style={{ color: "var(--text-1)" }}
                      >
                        {proj.name}
                      </h4>
                      <span className="flex flex-wrap gap-2">
                        {proj.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-xs"
                            style={{ fontFamily: "var(--font-mono)", color: "var(--text-3)" }}
                          >
                            {t}
                          </span>
                        ))}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-3)" }}>
                      {proj.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 pt-0.5">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-colors duration-150"
                        style={{ color: "var(--text-3)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
                      >
                        <GHIcon size={16} />
                      </a>
                    )}
                    {proj.external && (
                      <a
                        href={proj.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="External"
                        className="transition-colors duration-150"
                        style={{ color: "var(--text-3)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
                      >
                        <ExtIcon size={15} />
                      </a>
                    )}
                  </div>
                </div>
                {i < otherProjects.length - 1 && (
                  <div style={{ height: "1px", background: "var(--border-light)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
