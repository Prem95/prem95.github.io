"use client";

import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

type Job = (typeof experience)[number];

function groupByCompany(jobs: Job[]) {
  const groups: { company: string; url: string; location: string; roles: Job[] }[] = [];
  for (const job of jobs) {
    const last = groups[groups.length - 1];
    if (last && last.company === job.company) {
      last.roles.push(job);
    } else {
      groups.push({ company: job.company, url: job.url, location: job.location, roles: [job] });
    }
  }
  return groups;
}

export default function Experience() {
  const groups = groupByCompany(experience);

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-12 sm:py-16"
    >
      <SectionHeading num="02" label="Experience" title="Where I've worked" />

      <Stagger gap={0.07}>
        {groups.map((group, i) => {
          const isCurrent = group.roles.some((r) => r.end === null);
          const rangeStart = group.roles[group.roles.length - 1].start;
          const rangeEnd = group.roles[0].end;
          const grouped = group.roles.length > 1;

          return (
            <StaggerItem key={group.company}>
              <article
                className={cn(
                  "group hover-indent grid gap-x-8 gap-y-3 border-t border-border py-7 sm:grid-cols-[8.5rem_1fr] sm:py-8",
                  i === 0 && "border-t-0 pt-0 sm:pt-0",
                )}
              >
                {/* meta — inline row on mobile, stacked column on sm+ */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground sm:block">
                  <p className="flex items-center gap-2 text-foreground">
                    <span className="tabular-nums">
                      {rangeStart} — {rangeEnd ?? "now"}
                    </span>
                    {isCurrent && (
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-live" />
                      </span>
                    )}
                  </p>
                  <p className="sm:mt-1.5">
                    <span className="text-foreground">{group.company}</span>
                  </p>
                  <p className="text-muted-foreground/70 sm:mt-1.5">{group.location}</p>
                </div>

                {/* content — one block per role, connected with a rail when a company has several */}
                <div className="flex min-w-0 flex-col gap-6">
                  {group.roles.map((job, ri) => (
                    <div
                      key={job.role}
                      className={cn(
                        grouped && "relative pl-5",
                        grouped &&
                          ri !== group.roles.length - 1 &&
                          "border-l border-border pb-1",
                      )}
                    >
                      {grouped && (
                        <span className="absolute top-1.5 left-[-3.5px] size-[7px] rounded-full border border-border bg-background" />
                      )}

                      {grouped && (
                        <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground/70">
                          {job.start} — {job.end ?? "now"}
                          {job.engagement && ` · ${job.engagement}`}
                        </p>
                      )}

                      <h3 className="font-display text-lg font-bold tracking-tight">
                        {job.role}
                        {!grouped && job.engagement && (
                          <span className="ml-2 font-mono text-[0.65rem] font-normal uppercase tracking-[0.14em] text-muted-foreground/70">
                            {job.engagement}
                          </span>
                        )}
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
                    </div>
                  ))}
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
