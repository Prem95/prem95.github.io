import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import GitHubStatsDisplay from "@/components/GitHubStats";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { about, config } from "@/lib/data";
import type { GitHubStats } from "@/lib/github";

const reachLinks = [
  { label: "Email", href: `mailto:${config.email}` },
  { label: "LinkedIn", href: config.linkedin },
  { label: "GitHub", href: config.github },
  { label: "Twitter / X", href: config.twitter },
];

export default function About({ stats }: { stats: GitHubStats | null }) {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16 sm:py-24">
      <SectionHeading
        num="01"
        label="About"
        title="Who I am"
        dim="and what I build"
      />

      <div className="grid gap-10 sm:grid-cols-[1fr_280px] sm:gap-14">
        {/* bio */}
        <Reveal>
          <div className="flex flex-col gap-4">
            {about.bio.map((para, i) => (
              <p
                key={i}
                className="leading-relaxed text-muted-foreground"
                style={{
                  fontSize: i === 0 ? "1.05rem" : "0.95rem",
                  color: i === 0 ? "var(--foreground)" : undefined,
                  fontWeight: i === 0 ? 500 : 400,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        {/* side panel */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6">
            <GitHubStatsDisplay stats={stats} />
            <div>
              <span className="eyebrow">Reach me</span>
              <div className="mt-3 flex flex-col gap-1.5">
                {reachLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="link-underline">{l.label}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* stack */}
      <div className="mt-12 sm:mt-16">
        <Reveal>
          <span className="eyebrow">The stack</span>
        </Reveal>
        <TooltipProvider>
          <Stagger className="mt-4 flex flex-wrap gap-2" gap={0.035}>
            {about.skills.map((skill) => {
              const inner = skill.tooltip ? (
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Badge variant="outline" size="lg" className="cursor-help">
                        {skill.name}
                      </Badge>
                    }
                  />
                  <TooltipContent className="max-w-60 p-2 leading-relaxed">
                    {skill.tooltip}
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Badge variant="outline" size="lg">
                  {skill.name}
                </Badge>
              );

              return (
                <StaggerItem key={skill.name}>
                  {skill.href ? (
                    <a
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>
        </TooltipProvider>
      </div>
    </section>
  );
}
