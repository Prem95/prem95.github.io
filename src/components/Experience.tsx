"use client";

import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-12 sm:py-16"
    >
      <SectionHeading
        num="02"
        label="Experience"
        title="Where I've worked"
        dim="and what I shipped"
      />

      <Stagger gap={0.07}>
        {experience.map((job, i) => {
          const isCurrent = job.end === null;
          return (
            <StaggerItem key={job.company}>
              <article
                className={cn(
                  "group grid gap-x-8 gap-y-3 border-t border-border py-7 sm:grid-cols-[8.5rem_1fr] sm:py-8",
                  i === 0 && "border-t-0 pt-0 sm:pt-0",
                )}
              >
                {/* meta — inline row on mobile, stacked column on sm+ */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground sm:block">
                  <p className="flex items-center gap-2 text-foreground">
                    <span className="tabular-nums">
                      {job.start} — {job.end ?? "now"}
                    </span>
                    {isCurrent && (
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-live" />
                      </span>
                    )}
                  </p>
                  <p className="text-muted-foreground/70 sm:mt-1.5">{job.location}</p>
                </div>

                {/* content */}
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {job.role}{" "}
                    <span className="text-sm font-medium text-muted-foreground">
                      ·{" "}
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                      >
                        {job.company}
                        <ArrowUpRight className="ml-0.5 inline-block size-3.5 align-[-0.12em] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </span>
                  </h3>

                  <ul className="mt-3 flex flex-col gap-2">
                    {job.description.map((pt, pi) => (
                      <li
                        key={pi}
                        className={cn(
                          "text-sm leading-relaxed",
                          pi === 0
                            ? "font-medium text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground/80">
                    {job.tech.join("  ·  ")}
                  </p>
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
