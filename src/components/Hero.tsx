import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { config, products } from "@/lib/data";

const liveCount = String(
  products.filter((p) => p.status === "Live").length,
).padStart(2, "0");

const stats = [
  { value: "08", label: "yrs building AI" },
  { value: liveCount, label: "products live" },
];

const riseDelay = (s: number) => ({ "--rv-d": `${s}s` }) as CSSProperties;

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

      {/* availability */}
      <div className="rise relative">
        <Badge variant="outline" size="lg" className="gap-2 bg-background font-mono">
          <span className="tracking-[0.18em] uppercase text-[0.6rem]">
            {config.availability}
          </span>
        </Badge>
      </div>

      {/* name */}
      <h1 className="display relative mt-5 text-[clamp(3.2rem,12.5vw,8.75rem)]">
        <span className="mask-line"><span>Prem</span></span>
        <span className="mask-line"><span>Kumar</span></span>
      </h1>

      {/* tagline + CTAs */}
      <div
        className="rise relative mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        style={riseDelay(0.55)}
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
      </div>

      {/* stat strip */}
      <dl
        className="rise relative mt-9 grid grid-cols-2 border-y border-border sm:grid-cols-2"
        style={riseDelay(0.68)}
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
      </dl>
    </section>
  );
}
