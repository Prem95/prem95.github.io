import type { ReactNode } from "react";

/**
 * Sets the given phrases in a stronger tone than the rest of the sentence:
 * the page's ink-then-grey rhythm, applied inside a line of copy. Matching is
 * exact and case-sensitive, so the phrase lists live next to the copy they
 * belong to.
 */
export default function Highlight({
  text,
  phrases,
  className = "font-medium text-foreground",
}: {
  text: string;
  phrases: string[];
  className?: string;
}) {
  if (!phrases.length) return <>{text}</>;
  const escaped = phrases
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
  const out: ReactNode[] = parts.map((part, i) =>
    phrases.includes(part) ? (
      <span key={i} className={className}>
        {part}
      </span>
    ) : (
      part
    ),
  );
  return <>{out}</>;
}
