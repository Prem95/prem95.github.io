"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Section-number builder — a tiny robot sprite pushes the watermark digits
 * into place on first scroll-into-view, hops, then walks off and fades.
 *
 * Sprite technique borrowed from ascii-fable (string-array poses, movement
 * stepped one grid cell per tick): github.com/adithyaakrishna/ascii-fable
 */

// One char per cell. Row 0's "o" is the antenna (rendered in --live green).
const PUSH: string[][] = [
  [" o  ", "┌─┐=", "│@│=", "╱ ╵ "],
  [" o  ", "┌─┐=", "│@│=", "╵ ╱ "],
];
const WALK: string[][] = [
  [" o ", "┌─┐", "│@│", "╱ ╲"],
  [" o ", "┌─┐", "│@│", "╵ ╵"],
];

const TICK_MS = 110;
const PUSH_TICKS = 8; // digits + sprite step right one cell per tick
const STEP_EM = 0.07; // one "cell" of push travel
const EXIT_STEP_EM = 0.085;
const HOP_TICK = 8; // digits land, sprite hops
const EXIT_FROM = 10;
const LAST_TICK = 17;

function Sprite({ pose }: { pose: string[] }) {
  return (
    <pre
      className="m-0 font-mono"
      style={{ fontSize: "0.085em", lineHeight: 1.05 }}
    >
      {pose.map((row, ri) => (
        <div key={ri}>
          {ri === 0
            ? row.split("").map((ch, ci) =>
                ch === "o" ? (
                  <span key={ci} style={{ color: "var(--live)" }}>
                    o
                  </span>
                ) : (
                  <span key={ci}>{ch}</span>
                ),
              )
            : row}
        </div>
      ))}
    </pre>
  );
}

export default function AsciiNum({ num }: { num: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -48px 0px" });
  const reduced = useReducedMotion();
  const [tick, setTick] = useState(-1); // -1 = not started

  // Start a beat after the section's Reveal fade-in
  useEffect(() => {
    if (!inView || reduced) return;
    const t = setTimeout(() => setTick(0), 400);
    return () => clearTimeout(t);
  }, [inView, reduced]);

  useEffect(() => {
    if (tick < 0 || tick >= LAST_TICK) return;
    const t = setTimeout(() => setTick(tick + 1), TICK_MS);
    return () => clearTimeout(t);
  }, [tick]);

  const playing = !reduced && tick >= 0 && tick < LAST_TICK;
  const pushProgress = Math.min(Math.max(tick, 0), PUSH_TICKS);
  const numOffset = reduced ? 0 : -STEP_EM * (PUSH_TICKS - pushProgress);

  const spriteX =
    tick < EXIT_FROM ? numOffset : -EXIT_STEP_EM * (tick - (EXIT_FROM - 1));
  const spriteY = tick === HOP_TICK ? -0.18 : 0;
  const spriteOpacity = tick >= 13 ? Math.max(0, 1 - (tick - 12) * 0.25) : 1;
  const pose =
    tick < EXIT_FROM ? PUSH[tick & 1] || PUSH[0] : WALK[tick & 1] || WALK[0];

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute -top-4 right-0 select-none leading-none text-[5.5rem] sm:text-[10rem]"
    >
      <span
        className="text-outline inline-block font-display font-extrabold leading-none opacity-[0.08]"
        style={{ transform: `translateX(${numOffset}em)` }}
      >
        {num}
      </span>
      {playing && (
        <span
          className="absolute bottom-[0.03em] text-foreground/45"
          style={{
            right: "calc(100% + 0.03em)",
            transform: `translate(${spriteX}em, ${spriteY}em)`,
            opacity: spriteOpacity,
          }}
        >
          <Sprite pose={pose} />
        </span>
      )}
    </span>
  );
}
