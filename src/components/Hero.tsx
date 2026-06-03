"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { config, products } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

function Magnetic({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.12);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.18);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className="w-fit"
    >
      {children}
    </motion.div>
  );
}

const lines = ["Prem", "Kumar."];

const liveCount = String(
  products.filter((p) => p.status === "Live").length,
).padStart(2, "0");

const stats = [
  { value: "08", label: "yrs building AI" },
  { value: liveCount, label: "products live" },
  { value: "E2E", label: "agentic pipelines" },
  { value: "24/7", label: "agents in prod" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col pt-10 pb-10 sm:pt-14 sm:pb-14"
    >
      {/* dot-grid backdrop, faded toward the name */}
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[420px] [mask-image:radial-gradient(ellipse_80%_70%_at_70%_20%,#000_30%,transparent_70%)]"
      />

      {/* status row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="relative"
      >
        <Badge variant="outline" size="lg" className="gap-2 bg-background font-mono">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-live" />
          </span>
          <span className="tracking-[0.18em] uppercase text-[0.6rem]">
            {config.availability}
          </span>
        </Badge>
      </motion.div>

      {/* name */}
      <Magnetic>
        <h1 className="display relative mt-5 text-[clamp(3.2rem,12.5vw,8.75rem)]">
          {lines.map((line, li) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                  delay: 0.15 + li * 0.12,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
      </Magnetic>

      {/* tagline + CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
        className="relative mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
          {config.tagline}
        </p>
        <div className="flex shrink-0 items-center gap-2.5">
          <Button size="lg" render={<a href="#contact">Contact</a>} />
          <Button
            size="lg"
            variant="outline"
            render={
              <a href={config.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            }
          />
        </div>
      </motion.div>

      {/* stat strip */}
      <motion.dl
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.68 }}
        className="relative mt-9 grid grid-cols-2 border-y border-border sm:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-1 border-border py-4 pr-4 ${
              i > 0 ? "sm:border-l sm:pl-5" : ""
            } ${i % 2 === 1 ? "border-l pl-5 sm:pl-5" : ""}`}
          >
            <dd className="display text-2xl tabular-nums sm:text-[1.7rem]">
              {stat.value}
            </dd>
            <dt className="eyebrow">{stat.label}</dt>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
