import { Github } from "@/components/BrandIcons";
import type { GitHubStats } from "@/lib/github";
import { config } from "@/lib/data";

export default function GitHubStatsDisplay({
  stats,
}: {
  stats: GitHubStats | null;
}) {
  if (!stats) return null;

  const counts = [
    { value: stats.followers, label: "followers" },
    { value: stats.publicRepos, label: "repos" },
    { value: stats.totalStars, label: "stars" },
    ...(stats.contributionStreak > 0
      ? [{ value: stats.contributionStreak, label: "days active" }]
      : []),
  ];

  return (
    <a
      href={config.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 border border-border bg-card p-4 transition-colors hover:border-foreground"
    >
      <div className="flex items-center gap-4">
        <Github className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {counts.map((it) => (
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
      </div>

      <div className="flex flex-col gap-1 border-t border-border pt-3">
        <span className="text-[0.7rem] text-muted-foreground">
          {stats.yearsOnGitHub} years on GitHub
        </span>
        {stats.topLanguages.length > 0 && (
          <span className="font-mono text-[0.7rem] text-foreground">
            {stats.topLanguages.join(" · ")}
          </span>
        )}
      </div>
    </a>
  );
}
