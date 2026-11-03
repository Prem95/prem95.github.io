import GitHubStatsDisplay from "@/components/GitHubStats";
import SectionHeading from "@/components/SectionHeading";
import { about } from "@/lib/data";
import type { GitHubStats } from "@/lib/github";

export default function About({ stats }: { stats: GitHubStats | null }) {
  const [lead, ...rest] = about.bio;

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border py-12 sm:py-16"
    >
      <SectionHeading num="01" label="About" title="Who I am" />

      <div className="grid gap-10 md:grid-cols-[1fr_300px] md:gap-14">
        <div>
          {/* bio — a light lead line, then the detail in muted text */}
          <p className="text-[clamp(1.3rem,2.4vw,1.6rem)] font-light leading-[1.3] tracking-[-0.02em] text-foreground">
            {lead}
          </p>
          <div className="mt-5 flex max-w-xl flex-col gap-3.5">
            {rest.map((para) => (
              <p
                key={para}
                className="text-[0.95rem] leading-relaxed text-muted-foreground"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="md:self-start">
          <GitHubStatsDisplay stats={stats} />
        </div>
      </div>
    </section>
  );
}
