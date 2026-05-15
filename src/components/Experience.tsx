"use client";

import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

const CURRENT_YEAR = new Date().getFullYear();
const yearsXp = CURRENT_YEAR - 2017;

function durationLabel(range: string) {
  const [startStr, endStr] = range.split("—").map((s) => s.trim());
  const start = new Date(startStr);
  const end = /present/i.test(endStr) ? new Date() : new Date(endStr);
  const months = Math.max(
    1,
    Math.round(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30.44),
    ),
  );
  if (months < 12) return `${months} mo${months === 1 ? "" : "s"}`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem === 0
    ? `${years} yr${years === 1 ? "" : "s"}`
    : `${years} yr ${rem} mo`;
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-16 sm:py-24"
    >
      <SectionHeading
        num="02"
        label="Experience"
        title="Where I've worked"
        dim="and what I shipped"
      />

      {/* summary */}
      <Reveal>
        <div className="mb-12 flex items-stretch gap-6 border-b border-border pb-6">
          <div>
            <span className="display block text-[clamp(2rem,5vw,2.6rem)] tabular-nums">
              {yearsXp}+
            </span>
            <span className="text-xs text-muted-foreground">
              years in AI, ML &amp; software
            </span>
          </div>
          <div className="w-px self-stretch bg-border" />
          <div>
            <span className="display block text-[clamp(2rem,5vw,2.6rem)] tabular-nums">
              {experience.length}
            </span>
            <span className="text-xs text-muted-foreground">
              roles, from Monash to Ancileo
            </span>
          </div>
        </div>
      </Reveal>

      {/* timeline */}
      <Stagger gap={0.08}>
        {experience.map((job, i) => {
          const isCurrent = job.end === null;
          const last = i === experience.length - 1;
          return (
            <StaggerItem key={job.company}>
              <div className="relative flex gap-x-4 sm:gap-x-7">
                {/* gutter — year, duration, and the timeline rail */}
                <div className="relative w-[4.5rem] shrink-0 pr-4 text-right sm:w-[5.25rem] sm:pr-5">
                  <span className="display block text-base leading-none tabular-nums text-muted-foreground">
                    {job.start}
                  </span>
                  <span
                    suppressHydrationWarning
                    className="mt-1.5 block font-mono text-[0.55rem] uppercase tracking-[0.12em] text-muted-foreground/60"
                  >
                    {durationLabel(job.range)}
                  </span>

                  {/* node */}
                  <span className="absolute right-0 top-1 flex size-2.5 translate-x-1/2">
                    {isCurrent && (
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-60" />
                    )}
                    <span
                      className={cn(
                        "relative inline-flex size-2.5 rounded-full ring-[3px] ring-background",
                        isCurrent ? "bg-live" : "bg-foreground",
                      )}
                    />
                  </span>

                  {/* rail */}
                  {!last && (
                    <span className="absolute right-0 bottom-0 top-4 w-px translate-x-1/2 bg-border" />
                  )}
                </div>

                {/* content */}
                <div className={cn("min-w-0 flex-1 pb-12", last && "pb-0")}>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-lg font-bold tracking-tight">
                      {job.role}
                    </h3>
                    <span className="text-muted-foreground">·</span>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-semibold"
                    >
                      {job.company}
                    </a>
                    {isCurrent && (
                      <span className="ml-0.5 inline-flex items-center gap-1 rounded-sm bg-live/12 px-1.5 py-0.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.12em] text-live">
                        <span className="size-1 rounded-full bg-live" />
                        Now
                      </span>
                    )}
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {job.range} · {job.location}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2.5 border-l border-border pl-5">
                    {job.description.map((pt, pi) => (
                      <li
                        key={pi}
                        className="relative text-sm leading-relaxed text-muted-foreground before:absolute before:-left-[1.32rem] before:top-2.5 before:h-px before:w-3 before:bg-border"
                        style={{
                          color: pi === 0 ? "var(--foreground)" : undefined,
                          fontWeight: pi === 0 ? 500 : 400,
                        }}
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        size="sm"
                        className="font-mono"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
