"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
];

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(
    navItems.map((n) => n.id),
    100,
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // backdrop-blur lives on the inner bar — a filter on <header> would make
    // it the containing block for the fixed drawer below
    <header className="sticky top-0 z-50 border-b border-border lg:hidden">
      <div className="flex h-14 items-center justify-between bg-background/85 px-5 backdrop-blur-md">
        <a
          href="#hero"
          className="flex items-center gap-2.5 font-display text-base font-extrabold tracking-tight"
        >
          <Image
            src="/prem.jpg"
            alt="Prem Kumar"
            width={28}
            height={28}
            priority
            className="size-7 rounded-full border border-border object-cover"
          />
          PK.
        </a>

        {!open && activeId && (
          <span className="eyebrow absolute left-1/2 -translate-x-1/2">
            {navItems.find((n) => n.id === activeId)?.label}
          </span>
        )}

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="-mr-2 flex size-10 flex-col items-end justify-center gap-1.5"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px bg-foreground transition-[width,opacity,transform] duration-300"
              style={{
                width: i === 1 ? (open ? 0 : 14) : 20,
                opacity: i === 1 && open ? 0 : 1,
                transform:
                  i === 0 && open
                    ? "rotate(45deg) translateY(5px)"
                    : i === 2 && open
                      ? "rotate(-45deg) translateY(-5px)"
                      : "none",
              }}
            />
          ))}
        </button>
      </div>

      <div
        inert={!open}
        className={`fixed inset-0 top-14 z-40 flex flex-col bg-background px-6 pt-8 transition-[opacity,visibility] duration-200 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {navItems.map((item, i) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            className={`flex items-baseline gap-4 border-b border-border py-5 text-left transition-[opacity,transform] duration-300 ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${0.05 + i * 0.06}s` : "0s" }}
          >
            <span className="font-mono text-xs text-muted-foreground">
              0{i + 1}
            </span>
            <span
              className="display text-3xl"
              style={{
                color:
                  activeId === item.id
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
              }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </header>
  );
}
