"use client";

import Section from "@/components/Section";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

type Job = (typeof experience)[number];

function groupByCompany(jobs: Job[]) {
  const groups: {
    company: string;
    url: string;
    location: string;
    roles: Job[];
  }[] = [];
  for (const job of jobs) {
    const last = groups[groups.length - 1];
    if (last && last.company === job.company) {
      last.roles.push(job);
    } else {
      groups.push({
        company: job.company,
        url: job.url,
        location: job.location,
        roles: [job],
      });
    }
  }
  return groups;
}

export default function Experience() {
  const groups = groupByCompany(experience);

  return (
    <Section
      id="experience"
      num="02"
      label="Experience"
      title="Where I've worked"
    >
      <div>
        {groups.map((group, i) => {
          const rangeStart = group.roles[group.roles.length - 1].start;
          const rangeEnd = group.roles[0].end;
          const grouped = group.roles.length > 1;

          return (
            <article
              key={group.company}
              className={cn(
                "group grid gap-x-10 gap-y-4 border-t border-border py-9 sm:grid-cols-[10rem_1fr] sm:py-11",
                i === 0 && "border-t-0 pt-0 sm:pt-0",
              )}
            >
              {/* meta — the company is the anchor; dates and place support it.
                  Inline on phones, a column from sm */}
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:flex-col sm:gap-1.5">
                <p className="text-base font-medium tracking-[-0.01em] text-foreground">
                  {group.company}
                </p>
                <p className="font-mono text-[0.7rem] tabular-nums tracking-[0.04em] text-muted-foreground">
                  {rangeStart} – {rangeEnd ?? "now"}
                </p>
                <p className="text-[0.8rem] text-muted-foreground/80">
                  {group.location}
                </p>
              </div>

              {/* roles — connected with a rail when a company has several */}
              <div className="flex min-w-0 flex-col gap-9">
                {group.roles.map((job, ri) => (
                  <div
                    key={job.role}
                    className={cn(
                      grouped && "relative pl-6",
                      grouped &&
                        ri !== group.roles.length - 1 &&
                        "border-l border-border pb-2",
                    )}
                  >
                    {grouped && (
                      <span className="absolute top-2 left-[-3.5px] size-[7px] rounded-full border border-border bg-background" />
                    )}

                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em]">
                        {job.role}
                      </h3>
                      {grouped && (
                        <span className="font-mono text-[0.7rem] tabular-nums text-muted-foreground">
                          {job.start === job.end || job.end === null
                            ? job.end === null
                              ? `${job.start} – now`
                              : job.start
                            : `${job.start} – ${job.end}`}
                        </span>
                      )}
                    </div>

                    {/* one line per result, each with room to breathe; a
                        short dash marks each so the eye can jump between them */}
                    <ul className="mt-4 flex max-w-[68ch] flex-col gap-3">
                      {job.description.map((pt, pi) => (
                        <li
                          key={pi}
                          className="relative pl-5 text-[0.95rem] leading-[1.7] text-foreground/75"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute top-[0.8em] left-0 h-px w-2.5 bg-foreground/35"
                          />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
