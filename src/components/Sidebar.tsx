"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { config } from "@/lib/data";

const navItems = [
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "products",   label: "Products" },
  { id: "contact",    label: "Contact" },
];

const GH = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const TW = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LI = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socials = [
  { label: "GitHub",   href: config.github,   Icon: GH },
  { label: "Twitter",  href: config.twitter,  Icon: TW },
  { label: "LinkedIn", href: config.linkedin, Icon: LI },
];

export default function Sidebar() {
  const activeId = useScrollSpy(navItems.map((n) => n.id), 120);

  return (
    <aside
      className="hidden lg:flex flex-col sticky top-0 h-screen shrink-0 w-72 xl:w-80"
      style={{ background: "var(--sb-bg)", borderRight: "1px solid var(--sb-border)" }}
    >
      <div className="flex flex-col h-full py-14 px-10 justify-between">
        {/* Identity */}
        <div>
          <div className="mb-10">
            <a
              href="#hero"
              aria-label="Home"
              className="inline-flex items-center justify-center mb-8 w-9 h-9 border text-sm font-bold transition-all duration-150"
              style={{ borderColor: "var(--sb-lo)", color: "var(--sb-hi)", fontFamily: "var(--font-sans)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--sb-hi)";
                el.style.background = "oklch(100% 0 0 / 0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--sb-lo)";
                el.style.background = "transparent";
              }}
            >
              P
            </a>

            <h1
              className="leading-tight mb-1 font-bold"
              style={{ fontSize: "1.3rem", color: "var(--sb-hi)", letterSpacing: "-0.02em" }}
            >
              {config.name}
            </h1>
            <p className="text-sm font-medium mb-3" style={{ color: "var(--sb-lo)" }}>
              {config.role}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--sb-lo)", opacity: 0.7, maxWidth: "200px" }}>
              {config.tagline}
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Page sections">
            <ul className="space-y-0.5">
              {navItems.map((item) => {
                const active = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center gap-3.5 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-200 group"
                      style={{ color: active ? "var(--sb-hi)" : "var(--sb-lo)" }}
                    >
                      <span
                        className="block h-px transition-all duration-300"
                        style={{
                          width: active ? 40 : 18,
                          background: active ? "var(--sb-hi)" : "oklch(28% 0.01 255)",
                        }}
                      />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-10">
            <a
              href={config.resume}
              download
              className="inline-flex items-center gap-2 text-xs border transition-all duration-150"
              style={{
                padding: "0.45rem 1rem",
                borderColor: "var(--sb-lo)",
                color: "var(--sb-lo)",
                fontFamily: "var(--font-mono)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--sb-hi)";
                el.style.color = "var(--sb-hi)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--sb-lo)";
                el.style.color = "var(--sb-lo)";
              }}
            >
              Resume ↓
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors duration-150"
              style={{ color: "var(--sb-lo)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--sb-hi)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--sb-lo)")}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
