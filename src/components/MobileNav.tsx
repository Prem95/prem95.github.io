"use client";

import { useState } from "react";
import { config } from "@/lib/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "products",   label: "Products" },
  { id: "contact",    label: "Contact" },
];

const SIDEBAR_BG = "oklch(7%  0.01  255)";
const ACCENT     = "oklch(90% 0.004 255)";
const TEXT_HI    = "oklch(90% 0.004 255)";
const TEXT_LO    = "oklch(48% 0.008 255)";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((n) => n.id), 100);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="lg:hidden sticky top-0 z-50"
      style={{
        background: open ? SIDEBAR_BG : "oklch(7% 0.01 255 / 0.97)",
        backdropFilter: open ? "none" : "blur(12px)",
        borderBottom: `1px solid oklch(16% 0.01 255)`,
      }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 700,
            color: ACCENT,
            fontSize: "1.1rem",
            letterSpacing: "-0.01em",
          }}
        >
          PK.
        </a>

        {/* Section indicator */}
        {!open && activeId && (
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: TEXT_LO, fontFamily: "var(--font-mono)" }}
          >
            {navItems.find((n) => n.id === activeId)?.label}
          </span>
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex flex-col gap-1.5 p-3 -mr-1"
        >
          {[0, 1, 2].map((idx) => (
            <span
              key={idx}
              className="block h-px w-5 transition-all duration-200 origin-center"
              style={{
                background: TEXT_HI,
                opacity: idx === 1 && open ? 0 : 1,
                transform:
                  idx === 0 && open ? "rotate(45deg) translateY(5px)"
                  : idx === 2 && open ? "rotate(-45deg) translateY(-5px)"
                  : "none",
              }}
            />
          ))}
        </button>
      </div>

      {open && (
        <nav
          className="px-6 py-6 flex flex-col items-center gap-2"
          style={{ background: SIDEBAR_BG }}
        >
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="flex flex-col items-center gap-0.5 transition-colors w-full py-3 min-h-[48px] justify-center"
              style={{ color: activeId === item.id ? ACCENT : TEXT_LO }}
            >
              <span
                className="text-xs"
                style={{ fontFamily: "var(--font-mono)", color: TEXT_LO, opacity: 0.6 }}
              >
                0{i + 1}.
              </span>
              <span
                className="text-sm font-medium uppercase tracking-widest"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {item.label}
              </span>
            </button>
          ))}
          <a
            href={config.resume}
            download
            className="mt-4 text-sm border transition-colors"
            style={{
              padding: "0.6rem 1.75rem",
              borderColor: ACCENT,
              color: ACCENT,
              fontFamily: "var(--font-mono)",
            }}
          >
            Resume ↓
          </a>
        </nav>
      )}
    </header>
  );
}
