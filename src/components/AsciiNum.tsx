"use client";

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
                  <span key={ci} className="text-live">
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
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [tick, setTick] = useState(-1); // -1 = not started

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReduced(
            window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          );
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -48px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
      // Stacked layouts park the numeral top-right and the robot shoves it in
      // from the left. In the desktop heading column it sits flush left, so
      // --ascii-dir flips the whole routine: the digits arrive from the right
      // and the robot works (and leaves) on that side, inside the column.
      className="pointer-events-none absolute -top-4 right-0 select-none leading-none text-[5.5rem] max-[359px]:text-[4.5rem] sm:text-[10rem] lg:relative lg:top-0 lg:mb-5 lg:block lg:w-fit lg:text-[6.5rem] lg:[--ascii-dir:-1]"
    >
      <span
        className="text-outline inline-block font-display font-extrabold leading-none opacity-[0.08]"
        style={{
          transform: `translateX(calc(${numOffset}em * var(--ascii-dir, 1)))`,
        }}
      >
        {num}
      </span>
      {playing && (
        <span
          className="absolute right-[calc(100%+0.03em)] bottom-[0.03em] text-foreground/45 lg:right-auto lg:left-[calc(100%+0.03em)]"
          style={{
            transform: `translate(calc(${spriteX}em * var(--ascii-dir, 1)), ${spriteY}em) scaleX(var(--ascii-dir, 1))`,
            opacity: spriteOpacity,
          }}
        >
          <Sprite pose={pose} />
        </span>
      )}
    </span>
  );
}
