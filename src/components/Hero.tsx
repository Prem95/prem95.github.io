"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDownRight, FileText } from "lucide-react";
import type { PointerEvent, ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Chat from "@/components/Chat";
import ResumeDrawer from "@/components/ResumeDrawer";
import { config } from "@/lib/data";

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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col pt-12 pb-20 sm:pt-20 sm:pb-28"
    >
      {/* status */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <Badge variant="outline" size="lg" className="gap-2 font-mono">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
          </span>
          <span className="tracking-[0.18em] uppercase text-[0.6rem]">
            {config.availability}
          </span>
        </Badge>
      </motion.div>

      {/* name */}
      <Magnetic>
        <h1 className="display mt-6 text-[clamp(3.4rem,15vw,11rem)]">
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

      {/* role */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
        className="mt-6 max-w-md text-lg font-light leading-relaxed text-muted-foreground sm:text-xl"
      >
        AI Engineer building agentic systems at{" "}
        <a
          href="https://ancileo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-medium text-foreground"
        >
          Ancileo
        </a>{" "}
        — and shipping SaaS products on the side.
      </motion.h2>

      {/* chat */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
        className="mt-8 w-full max-w-lg"
      >
        <Chat />
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.78 }}
        className="mt-8 flex flex-wrap items-center gap-2.5"
      >
        <Button
          size="lg"
          render={
            <a href="#products">
              View work <ArrowDownRight data-icon="inline-end" />
            </a>
          }
        />
        <ResumeDrawer
          trigger={
            <Button size="lg" variant="outline">
              <FileText data-icon="inline-start" />
              Résumé
            </Button>
          }
        />
        <Button
          size="lg"
          variant="ghost"
          render={<a href="#contact">Contact</a>}
        />
      </motion.div>
    </section>
  );
}
