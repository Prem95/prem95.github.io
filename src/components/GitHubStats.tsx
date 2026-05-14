import { Github } from "@/components/BrandIcons";
import type { GitHubStats } from "@/lib/github";
import { config } from "@/lib/data";

export default function GitHubStatsDisplay({
  stats,
}: {
  stats: GitHubStats | null;
}) {
  if (!stats) return null;

  const items = [
    { value: stats.followers, label: "followers" },
    { value: stats.publicRepos, label: "repos" },
    ...(stats.contributionStreak > 0
      ? [{ value: stats.contributionStreak, label: "days active" }]
      : []),
  ];

  return (
    <a
      href={config.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 border border-border bg-card p-4 transition-colors hover:border-foreground"
    >
      <Github className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      <div className="flex gap-5">
        {items.map((it) => (
          <div key={it.label}>
            <span className="block text-base font-bold tabular-nums">
              {it.value}
            </span>
            <span className="text-[0.7rem] text-muted-foreground">
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </a>
  );
}
