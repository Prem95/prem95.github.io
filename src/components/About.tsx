import GitHubStatsDisplay from "@/components/GitHubStats";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/lib/data";
import type { GitHubStats } from "@/lib/github";

export default function About({ stats }: { stats: GitHubStats | null }) {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-12 sm:py-16">
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

            <dl className="mt-4 flex flex-col gap-4 border-t border-border pt-6">
              {about.skills.map((cat) => (
                <div
                  key={cat.group}
                  className="grid gap-1.5 sm:grid-cols-[7rem_1fr] sm:gap-4"
                >
                  <dt className="eyebrow pt-0.5">{cat.group}</dt>
                  <dd className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-foreground">
                    {cat.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
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
