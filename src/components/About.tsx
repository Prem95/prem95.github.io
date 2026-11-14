import GitHubStatsDisplay from "@/components/GitHubStats";
import Highlight from "@/components/Highlight";
import Section from "@/components/Section";
import { about } from "@/lib/data";
import type { GitHubStats } from "@/lib/github";

// Everything here is read off data.ts and the experience entries; nothing is
// invented for the layout.
const stack = [
  "Claude Code",
  "LangGraph",
  "OpenAI SDK",
  "AWS Bedrock",
  "Strands",
  "Terraform",
  "TypeScript",
  "Python",
  "Next.js",
  "React Native",
  "Supabase",
  "LangSmith",
  "Grafana",
];

const tile = "rounded-2xl bg-card p-5 sm:p-6";

// The words a skimmer should catch in each tile
const keys = {
  lead: ["Lead AI Engineer", "8 years", "production systems"],
  approach: [
    "close to the people using the software",
    "full stack",
    "deployment, infrastructure and monitoring",
    "runs in production",
  ],
  focus: [
    "agentic development",
    "AI agents",
    "RAG pipelines",
    "multi-agent workflows",
    "Claude Code subagents",
  ],
};

export default function About({ stats }: { stats: GitHubStats | null }) {
  const [lead, focus, approach] = about.bio;

  return (
    <Section id="about" num="01" label="About" title="Who I am">
      {/* a bento on a grey ground: one brushed tile carries the statement,
          plain tiles carry the detail. Splits into columns only when its own
          column is wide enough (a container query, not the viewport) */}
      <div className="@container rounded-[1.4rem] bg-secondary p-1.5 sm:p-2">
        <div className="grid grid-cols-1 gap-1.5 sm:gap-2 @[40rem]:grid-cols-6">
          {/* lead — the brushed graphite tile, copy set low on the darkest part */}
          <div className="brushed-graphite relative flex min-h-[13.5rem] flex-col justify-end overflow-hidden rounded-2xl p-5 text-white sm:min-h-[19rem] sm:p-7 @[40rem]:col-span-6 @[48rem]:col-span-4">
            <p className="max-w-[26ch] text-[clamp(1.35rem,2.5vw,1.95rem)] font-light leading-[1.2] tracking-[-0.025em] text-white/65 [text-wrap:balance]">
              <Highlight
                text={lead}
                phrases={keys.lead}
                className="font-normal text-white"
              />
            </p>
          </div>

          {/* how I work */}
          <div
            className={`${tile} flex flex-col gap-3 @[40rem]:col-span-6 @[48rem]:col-span-2`}
          >
            <h3 className="text-[1.15rem] font-normal tracking-[-0.02em]">
              How I work
            </h3>
            <p className="text-[0.95rem] leading-[1.6] text-muted-foreground sm:leading-[1.7]">
              <Highlight text={approach} phrases={keys.approach} />
            </p>
          </div>

          {/* stack */}
          <div
            className={`${tile} flex flex-col gap-6 @[40rem]:col-span-6 @[48rem]:grid @[48rem]:grid-cols-2 @[48rem]:items-end @[48rem]:gap-8`}
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-[1.15rem] font-normal tracking-[-0.02em]">
                Stack
              </h3>
              <p className="max-w-[52ch] text-[0.95rem] leading-[1.6] text-muted-foreground sm:leading-[1.7]">
                <Highlight text={focus} phrases={keys.focus} />
              </p>
            </div>
            <ul className="flex flex-wrap gap-1.5 @[48rem]:justify-end">
              {stack.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-secondary px-2 py-1 font-mono text-[0.68rem] text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* activity */}
          <div className="@[40rem]:col-span-6">
            <GitHubStatsDisplay
              stats={stats}
              className="rounded-2xl border-transparent p-5 sm:p-6"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
