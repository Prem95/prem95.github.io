import GitHubStatsDisplay from "@/components/GitHubStats";
import SectionHeading from "@/components/SectionHeading";
import { about } from "@/lib/data";
import type { GitHubStats } from "@/lib/github";

export default function About({ stats }: { stats: GitHubStats | null }) {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border py-12 sm:py-16"
    >
      <SectionHeading num="01" label="About" title="Who I am" />

      <div className="grid gap-10 sm:grid-cols-[1fr_280px] sm:gap-14">
        {/* bio */}
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

        {/* side panel */}
        <div className="flex flex-col gap-6">
          <GitHubStatsDisplay stats={stats} />
        </div>
      </div>
    </section>
  );
}
