"use client";

import { useState, useEffect } from "react";
import { config } from "@/lib/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "products",   label: "Products" },
  { id: "contact",    label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navItems.map((n) => n.id), 100);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="lg:hidden sticky top-0 z-50"
      style={{
        background: open ? "oklch(7% 0.01 255)" : "oklch(7% 0.01 255 / 0.97)",
        backdropFilter: open ? "none" : "blur(12px)",
        WebkitBackdropFilter: open ? "none" : "blur(12px)",
        borderBottom: "1px solid oklch(16% 0.01 255)",
      }}
    >
      <div className="flex items-center justify-between px-5 h-14">
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-sans)",
            
            fontWeight: 800,
            color: "oklch(90% 0.004 255)",
            fontSize: "1.05rem",
            letterSpacing: "-0.02em",
          }}
        >
          PK.
        </a>

        {/* Section indicator — fades on scroll */}
        {!open && activeId && (
          <span
            className="text-xs uppercase tracking-widest absolute left-1/2 -translate-x-1/2"
            style={{ color: "oklch(48% 0.008 255)", fontFamily: "var(--font-mono)", fontSize: "0.6rem" }}
          >
            {navItems.find((n) => n.id === activeId)?.label}
          </span>
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex flex-col justify-center gap-1.5 w-10 h-10 items-end"
        >
          {[0, 1, 2].map((idx) => (
            <span
              key={idx}
              className="block h-px transition-all duration-300 origin-center"
              style={{
                background: "oklch(90% 0.004 255)",
                width: idx === 1 ? (open ? 0 : 14) : 20,
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

      {/* Fullscreen overlay menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          top: "57px",
          background: "oklch(7% 0.01 255)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.25rem",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 49,
        }}
      >
        {navItems.map((item, i) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.id)}
            className="flex flex-col items-center gap-1 w-full py-5"
            style={{
              color: activeId === item.id ? "oklch(90% 0.004 255)" : "oklch(48% 0.008 255)",
              opacity: open ? 1 : 0,
              transform: open ? "none" : "translateY(8px)",
              transition: `opacity 0.35s ease ${i * 60}ms, transform 0.35s ease ${i * 60}ms, color 0.15s ease`,
            }}
          >
            <span
              className="text-xs tabular-nums"
              style={{ fontFamily: "var(--font-mono)", opacity: 0.5, fontSize: "0.6rem" }}
            >
              0{i + 1}
            </span>
            <span
              className="text-base font-semibold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
            >
              {item.label}
            </span>
          </button>
        ))}

        <a
          href={config.resume}
          download
          className="mt-6 text-xs border transition-colors duration-150"
          style={{
            padding: "0.55rem 1.75rem",
            borderColor: "oklch(90% 0.004 255)",
            color: "oklch(90% 0.004 255)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.1em",
            opacity: open ? 1 : 0,
            transform: open ? "none" : "translateY(8px)",
            transition: `opacity 0.35s ease ${navItems.length * 60}ms, transform 0.35s ease ${navItems.length * 60}ms`,
          }}
        >
          Resume
        </a>
      </div>
    </header>
  );
}
