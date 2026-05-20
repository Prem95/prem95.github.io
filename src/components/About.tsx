import GitHubStatsDisplay from "@/components/GitHubStats";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/lib/data";
import type { GitHubStats } from "@/lib/github";

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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
