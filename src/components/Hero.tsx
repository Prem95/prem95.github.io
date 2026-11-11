import type { CSSProperties } from "react";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { config, experience, products } from "@/lib/data";

const liveCount = String(
  products.filter((p) => p.status === "Live").length,
).padStart(2, "0");

const stats = [
  { value: "08", label: "yrs building AI" },
  { value: liveCount, label: "products live" },
  { value: experience[0].company, label: "current team" },
];

const riseDelay = (s: number) => ({ "--rv-d": `${s}s` }) as CSSProperties;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col pt-10 pb-12 sm:pt-14 sm:pb-14 lg:pt-[3.75rem]"
    >
      {/* dot-grid backdrop, faded toward the name */}
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[380px] [mask-image:radial-gradient(ellipse_70%_80%_at_85%_10%,#000_25%,transparent_70%)]"
      />

      {/* availability — the label is long, so the badge has to be allowed to
          wrap; Badge's base style is whitespace-nowrap and overflows on phones */}
      <div className="rise relative">
        <Badge
          variant="outline"
          size="lg"
          className="h-auto max-w-full justify-start whitespace-normal bg-background py-1 font-mono sm:h-auto"
        >
          <span className="text-[0.6rem] uppercase leading-[1.5] tracking-[0.14em] sm:tracking-[0.18em]">
            {config.availability}
          </span>
        </Badge>
      </div>

      {/* name — one line. "Prem Kumar" sets 4.77em wide, so on phones the
          size is solved from the column (viewport minus the 2.5rem gutters)
          and the name runs edge to edge; from sm it eases off to 15.2vw and
          leaves the dot grid some air */}
      <h1 className="display relative mt-5 whitespace-nowrap text-[length:calc((100vw_-_2.5rem)_/_4.84)] sm:mt-6 sm:text-[length:clamp(3rem,15.2vw,12.3rem)]">
        <span className="mask-line">
          <span>{config.name}</span>
        </span>
      </h1>

      {/* tagline + CTAs */}
      <div
        className="rise relative mt-6 flex flex-col gap-6 sm:mt-8 sm:flex-row sm:items-end sm:justify-between"
        style={riseDelay(0.5)}
      >
        <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
          {config.tagline}
        </p>
        {/* phones: booking takes the full row, the other two split the next;
            from sm they sit in one line beside the tagline */}
        <div className="grid shrink-0 grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center">
          <Button
            size="lg"
            className="col-span-2"
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
          <Button size="lg" variant="outline" render={<a href="#contact" />}>
            Contact
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={
              <a href={config.github} target="_blank" rel="noreferrer" />
            }
          >
            GitHub
          </Button>
        </div>
      </div>

      {/* stat strip — two up on phones with the team on its own row, three
          across from sm */}
      <dl
        className="rise relative mt-9 grid grid-cols-2 border-y border-border sm:mt-10 sm:grid-cols-3"
        style={riseDelay(0.62)}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-1 border-border py-4 pr-4 ${
              i === 1 ? "border-l pl-5" : ""
            } ${
              i === 2
                ? "col-span-2 border-t sm:col-span-1 sm:border-t-0 sm:border-l sm:pl-5"
                : ""
            }`}
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
