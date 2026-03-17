"use client";

import { config } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      style={{ borderTop: "1px solid var(--border-light)" }}
    >
      <p className="text-xs" style={{ color: "var(--text-3)" }}>
        Designed & built by{" "}
        <a
          href={config.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-grow"
          style={{ color: "var(--text-2)" }}
        >
          {config.name}
        </a>
      </p>
      <div className="flex items-center gap-5">
        {[
          { label: "GitHub", href: config.github },
          { label: "Twitter", href: config.twitter },
          { label: "LinkedIn", href: config.linkedin },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs link-grow transition-colors"
            style={{ color: "var(--text-3)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-3)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
