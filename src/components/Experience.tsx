"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Section from "@/components/Section";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

type Job = (typeof experience)[number];

// A phone shows each role's headline results and folds the rest behind a
// toggle, so eight employers read as a scan, not a scroll. The current
// company gets two lines, earlier ones get one. From `sm` every line shows.
const PHONE_LINES_CURRENT = 2;
const PHONE_LINES_EARLIER = 1;

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
  // roles whose folded lines the reader has opened (phones only)
  const [opened, setOpened] = useState<Set<string>>(new Set());
  const toggle = (key: string) =>
    setOpened((prev) => {
      const next = new Set(prev);
      if (!next.delete(key)) next.add(key);
      return next;
    });

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
                "group grid gap-x-10 gap-y-3 border-t border-border py-8 sm:grid-cols-[10rem_1fr] sm:gap-y-4 sm:py-11",
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
              <div className="flex min-w-0 flex-col gap-7 sm:gap-9">
                {group.roles.map((job, ri) => {
                  const key = `${job.company}-${job.role}`
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-");
                  const open = opened.has(key);
                  const shown =
                    i === 0 ? PHONE_LINES_CURRENT : PHONE_LINES_EARLIER;
                  const folded = job.description.length - shown;

                  return (
                    <div
                      key={job.role}
                      className={cn(
                        // the last role keeps a clear border so its text
                        // lines up with the roles on the rail above it
                        grouped && "relative border-l pl-5 sm:pl-6",
                        grouped &&
                          (ri !== group.roles.length - 1
                            ? "border-border pb-2"
                            : "border-transparent"),
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
                        short dash marks each so the eye can jump between them.
                        Phones set the lines tighter and the gaps wider, so
                        each result reads as its own block */}
                      <ul
                        id={`${key}-lines`}
                        className="mt-3 flex max-w-[68ch] flex-col gap-3.5 sm:mt-4 sm:gap-3"
                      >
                        {job.description.map((pt, pi) => (
                          <li
                            key={pi}
                            className={cn(
                              "relative pl-4 text-[0.95rem] leading-[1.55] text-foreground/75 sm:pl-5 sm:leading-[1.7]",
                              pi >= shown && !open && "max-sm:hidden",
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute top-[0.78em] left-0 h-px w-2 bg-foreground/35 sm:top-[0.8em] sm:w-2.5"
                            />
                            {pt}
                          </li>
                        ))}
                      </ul>

                      {folded > 0 && (
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          aria-expanded={open}
                          aria-controls={`${key}-lines`}
                          className="mt-1 -mb-2.5 flex min-h-11 items-center gap-1.5 pl-4 text-[0.85rem] font-medium text-foreground underline decoration-border underline-offset-[5px] sm:hidden"
                        >
                          {open ? "Show less" : `Show ${folded} more`}
                          <ChevronDown
                            aria-hidden="true"
                            className={cn(
                              "size-4 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none",
                              open && "rotate-180",
                            )}
                          />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
