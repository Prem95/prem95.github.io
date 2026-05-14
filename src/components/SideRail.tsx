"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/BrandIcons";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import ResumeDrawer from "@/components/ResumeDrawer";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { config } from "@/lib/data";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { label: "GitHub", href: config.github, Icon: Github },
  { label: "Twitter / X", href: config.twitter, Icon: Twitter },
  { label: "LinkedIn", href: config.linkedin, Icon: Linkedin },
];

export default function SideRail() {
  const activeId = useScrollSpy(
    navItems.map((n) => n.id),
    140,
  );

  return (
    <aside className="sticky top-0 hidden h-screen w-[296px] shrink-0 flex-col justify-between px-9 py-12 lg:flex">
      <div>
        <a
          href="#hero"
          aria-label="Home"
          className="mb-9 inline-flex size-10 items-center justify-center border border-foreground text-base font-extrabold transition-colors hover:bg-foreground hover:text-background"
        >
          P
        </a>

        <h1 className="text-[1.35rem] font-extrabold leading-tight tracking-tight">
          {config.name}
        </h1>
        <p className="mt-1 text-sm font-medium text-muted-foreground">
          {config.role}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
          </span>
          <span className="eyebrow">Open to consulting</span>
        </div>

        <nav aria-label="Sections" className="mt-10">
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-3.5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors"
                    style={{
                      color: active
                        ? "var(--foreground)"
                        : "var(--muted-foreground)",
                    }}
                  >
                    <motion.span
                      className="block h-px bg-current"
                      animate={{ width: active ? 38 : 16 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-9">
          <ResumeDrawer
            trigger={
              <Button variant="outline" size="sm">
                <FileText data-icon="inline-start" />
                Résumé
              </Button>
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-[1.05rem]" />
            </a>
          ))}
        </div>
        <KbdGroup className="text-muted-foreground">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          <span className="text-xs">command menu</span>
        </KbdGroup>
      </div>
    </aside>
  );
}
