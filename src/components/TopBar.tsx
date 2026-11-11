"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter } from "@/components/BrandIcons";
import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { config } from "@/lib/data";

const navItems = [
  { id: "about", label: "About", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "products", label: "Products", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
];
// Stable reference: useScrollSpy re-subscribes whenever this array changes
const navIds = navItems.map((n) => n.id);

const socials = [
  { label: "GitHub", href: config.github, Icon: Github },
  { label: "Twitter / X", href: config.twitter, Icon: Twitter },
  { label: "LinkedIn", href: config.linkedin, Icon: Linkedin },
];

// "Open to Forward Deployed Engineer roles · Remote / SEA" → "Remote / SEA"
const where = config.availability.split(" · ")[1] ?? "";

/** The one piece of chrome on the page: identity, numbered nav, booking. */
export default function TopBar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navIds, 120);

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
    <header className="sticky top-0 z-50 border-b border-border">
      <div className="flex h-14 items-center justify-between gap-3 bg-background/85 px-5 backdrop-blur-md sm:px-9 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-14">
        <a
          href="#hero"
          className="flex min-w-0 items-center gap-2.5 text-base font-semibold tracking-tight"
        >
          <Image
            src="/prem.jpg"
            alt=""
            width={28}
            height={28}
            priority
            className="shot size-7 shrink-0 rounded-full border border-border object-cover"
          />
          <span className="truncate max-[339px]:hidden">{config.name}</span>
        </a>

        <nav aria-label="Sections" className="hidden h-full lg:block">
          <ul className="flex h-full items-stretch gap-7">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? "location" : undefined}
                    className="group relative flex h-full items-center gap-2"
                  >
                    <span
                      className={`font-mono text-[0.6rem] tabular-nums transition-colors duration-300 ${
                        active ? "text-foreground" : "text-border"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-200 group-hover:text-foreground ${
                        active ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                    {/* the old rail's active dash, now riding the bar's bottom edge */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-px h-px origin-left bg-foreground transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
            <li>
              <Link
                href="/blog"
                className="group flex h-full items-center gap-2"
              >
                <span className="font-mono text-[0.6rem] tabular-nums text-border">
                  05
                </span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-foreground">
                  Notes
                </span>
                <ArrowUpRight className="size-3 text-border transition-colors group-hover:text-foreground" />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 lg:justify-self-end">
          <Button
            render={
              <a
                href={config.booking}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Book a call
          </Button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="-mr-2 flex size-11 flex-col items-end justify-center gap-1.5 pr-2 lg:hidden"
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
      </div>

      {/* phone and tablet menu: the same numbered list, full screen */}
      <div
        inert={!open}
        className={`fixed inset-0 top-14 z-40 flex flex-col overflow-y-auto bg-background px-5 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] transition-[opacity,visibility] duration-200 sm:px-9 lg:hidden ${
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
              {item.num}
            </span>
            <span
              className={`display text-3xl ${
                activeId === item.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}

        <Link
          href="/blog"
          onClick={() => setOpen(false)}
          className={`flex items-baseline gap-4 border-b border-border py-5 transition-[opacity,transform] duration-300 ${
            open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{
            transitionDelay: open ? `${0.05 + navItems.length * 0.06}s` : "0s",
          }}
        >
          <span className="font-mono text-xs text-muted-foreground">05</span>
          <span className="display text-3xl text-muted-foreground">Notes</span>
        </Link>

        <div
          className={`mt-auto flex flex-col gap-3 pt-8 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: open ? "0.38s" : "0s" }}
        >
          <Button
            size="xl"
            className="w-full"
            render={
              <a
                href={config.booking}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <CalendarDays />
            Book a call
          </Button>
          <div className="flex items-center justify-between">
            <span className="eyebrow">{where}</span>
            <div className="-mr-3 flex items-center">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-[1.1rem]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
