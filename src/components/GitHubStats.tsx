import { Github } from "@/components/BrandIcons";
import type { GitHubStats } from "@/lib/github";
import { config } from "@/lib/data";

function level(count: number, max: number) {
  if (count === 0) return "bg-secondary";
  const r = count / max;
  if (r > 0.6) return "bg-live";
  if (r > 0.3) return "bg-live/70";
  if (r > 0.12) return "bg-live/45";
  return "bg-live/25";
}

export default function GitHubStatsDisplay({
  stats,
}: {
  stats: GitHubStats | null;
}) {
  if (!stats) return null;

  const counts = [
    { value: stats.totalStars, label: "stars" },
    { value: stats.publicRepos, label: "repos" },
    { value: stats.followers, label: "followers" },
  ];

  // last 26 weeks fit the panel width
  const weeks = (stats.calendar ?? []).slice(-26);
  const max = Math.max(1, ...weeks.flat());

  return (
    <a
      href={config.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 border border-border bg-card p-4 transition-colors hover:border-foreground"
    >
      <div className="flex items-center justify-between">
        <Github className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
        <span className="eyebrow">{stats.yearsOnGitHub} yrs on GitHub</span>
      </div>

      {stats.totalContributions > 0 && (
        <div>
          <span className="display block text-3xl tabular-nums">
            {stats.totalContributions.toLocaleString()}
          </span>
          <span className="text-[0.7rem] text-muted-foreground">
            open-source contributions in the past year
          </span>
        </div>
      )}

      <div className="grid grid-cols-3 gap-x-3 border-t border-border pt-3">
        {counts.map((it) => (
          <div key={it.label}>
            <span className="display block text-base tabular-nums">
              {it.value.toLocaleString()}
            </span>
            <span className="text-[0.65rem] leading-tight text-muted-foreground">
              {it.label}
            </span>
          </div>
        ))}
      </div>

      {weeks.length > 0 && (
        <div className="flex gap-[3px] border-t border-border pt-4">
          {weeks.map((week, wi) => {
            const lastWeek = wi === weeks.length - 1;
            return (
              <div key={wi} className="flex flex-1 flex-col gap-[3px]">
                {week.map((day, di) => {
                  const isToday = lastWeek && di === week.length - 1;
                  return (
                    <span
                      key={di}
                      className={`aspect-square w-full rounded-[1.5px] ${
                        isToday ? "bg-live" : level(day, max)
                      }`}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      )}

      {stats.topLanguages.length > 0 && (
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
          {stats.topLanguages.join(" · ")}
        </span>
      )}
    </a>
  );
}
