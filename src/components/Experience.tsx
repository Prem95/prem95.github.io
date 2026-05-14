"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/lib/data";

const yearsXp = new Date().getFullYear() - 2017;

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
        <div className="mb-8 flex items-stretch gap-6 border-b border-border pb-6">
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
              roles, from Dyson to Ancileo
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <Tabs defaultValue={0} orientation="vertical" className="gap-6 sm:gap-10">
          <TabsList
            variant="underline"
            className="no-scrollbar -mx-1 max-sm:max-w-full max-sm:flex-row max-sm:overflow-x-auto sm:w-44 sm:shrink-0"
          >
            {experience.map((job, i) => (
              <TabsTab
                key={job.company}
                value={i}
                className="justify-start whitespace-nowrap"
              >
                {job.company}
              </TabsTab>
            ))}
          </TabsList>

          {experience.map((job, i) => (
            <TabsPanel key={job.company} value={i} className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-lg font-bold tracking-tight">{job.role}</h3>
                <span className="text-muted-foreground">@</span>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-0.5 font-semibold"
                >
                  {job.company}
                  <ArrowUpRight className="size-3.5" />
                </a>
                {job.end === null && (
                  <Badge size="sm" className="ml-1">
                    Now
                  </Badge>
                )}
              </div>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {job.range} · {job.location}
              </p>

              <ul className="mt-5 flex flex-col gap-2.5 border-l border-border pl-5">
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

              <div className="mt-5 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <Badge key={t} variant="secondary" size="sm" className="font-mono">
                    {t}
                  </Badge>
                ))}
              </div>
            </TabsPanel>
          ))}
        </Tabs>
      </Reveal>
    </section>
  );
}
