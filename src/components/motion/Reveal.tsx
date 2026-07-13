import type { CSSProperties, ReactNode } from "react";

/* Server-rendered reveal primitives. RevealObserver (mounted once in the
   page) adds .inview on viewport entry; all motion lives in globals.css.
   The observed element is always the unclipped wrapper — IntersectionObserver
   never fires for elements fully hidden by ancestor overflow. */

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <div
      data-reveal="up"
      className={className}
      style={{ "--rv-d": `${delay}s`, "--rv-y": `${y}px` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* Line-mask reveal — text slides up from an overflow-hidden mask.
   Small bottom padding keeps descenders from clipping at tight line-heights. */
export function LineMask({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      data-reveal="mask"
      className="block overflow-hidden pb-[0.1em] -mb-[0.1em]"
      style={{ "--rv-d": `${delay}s` } as CSSProperties}
    >
      <span className={`block ${className ?? ""}`}>{children}</span>
    </span>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.07,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <div
      data-reveal="group"
      className={className}
      style={{ "--rv-gap": `${gap}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
