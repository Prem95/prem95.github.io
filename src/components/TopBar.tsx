"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ResumeDrawer from "@/components/ResumeDrawer";
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md lg:hidden">
      <div className="flex h-14 items-center justify-between px-5">
        <a href="#hero" className="text-base font-extrabold tracking-tight">
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 top-14 z-40 flex flex-col bg-background px-6 pt-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => go(item.id)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.06 }}
                className="flex items-baseline gap-4 border-b border-border py-5 text-left"
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
              </motion.button>
            ))}
            <div className="mt-8">
              <ResumeDrawer
                trigger={
                  <Button variant="outline" size="lg">
                    <FileText data-icon="inline-start" />
                    View résumé
                  </Button>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
