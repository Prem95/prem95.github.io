"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "@/components/BrandIcons";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { config } from "@/lib/data";

const navItems = [
  { id: "about", label: "About", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "products", label: "Products", num: "03" },
  { id: "contact", label: "Contact", num: "04" },
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
          className="mb-9 inline-block transition-transform duration-200 active:scale-[0.96]"
        >
          <Image
            src="/prem.jpg"
            alt="Prem Kumar"
            width={64}
            height={64}
            priority
            className="size-16 rounded-full border border-border object-cover"
          />
        </a>

        <p className="font-display text-[1.35rem] font-extrabold leading-tight tracking-tight text-foreground">
          {config.name}
        </p>
        <p className="mt-1 text-sm font-medium text-muted-foreground">
          {config.role}
        </p>

        <nav aria-label="Sections" className="mt-10">
          <ul className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-3.5 py-2"
                  >
                    <span
                      className="font-mono text-[0.6rem] tabular-nums transition-colors duration-300"
                      style={{
                        color: active
                          ? "var(--foreground)"
                          : "var(--border)",
                      }}
                    >
                      {item.num}
                    </span>
                    <motion.span
                      className="block h-px bg-foreground"
                      initial={false}
                      animate={{
                        width: active ? 28 : 0,
                        opacity: active ? 1 : 0,
                      }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <span
                      className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-200 group-hover:text-foreground"
                      style={{
                        color: active
                          ? "var(--foreground)"
                          : "var(--muted-foreground)",
                      }}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-5">
        <div className="-ml-2 flex items-center gap-1">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex size-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-[1.05rem]" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
