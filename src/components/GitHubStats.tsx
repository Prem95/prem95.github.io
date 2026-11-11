import { Github } from "@/components/BrandIcons";
import type { GitHubStats } from "@/lib/github";
import { config } from "@/lib/data";

// The one place the page's green accent runs as a scale: empty days sit on
// the surface tint, busy days climb to the full --live green (GitHub's own
// convention, so the grid reads as a contribution calendar at a glance)
function level(count: number) {
  if (count === 0) return "bg-secondary";
  if (count >= 25) return "bg-live";
  if (count >= 10) return "bg-live/70";
  if (count >= 4) return "bg-live/45";
  return "bg-live/25";
}

// The calendar panel shows this many weeks when it is wide enough, and the
// most recent NARROW_WEEKS otherwise (phones, and the squeezed lg column)
const WIDE_WEEKS = 40;
const NARROW_WEEKS = 26;

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

  const weeks = (stats.calendar ?? []).slice(-WIDE_WEEKS);
  const firstNarrow = weeks.length - NARROW_WEEKS;

  return (
    <a
      href={config.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground sm:grid sm:grid-cols-[minmax(0,190px)_minmax(0,1fr)] sm:gap-7"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <Github className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
          <span className="eyebrow">{stats.yearsOnGitHub} yrs on GitHub</span>
        </div>

        {stats.totalContributions > 0 && (
          <div>
            <span className="display block text-3xl tabular-nums">
              {stats.totalContributions.toLocaleString()}
            </span>
            <span className="text-[0.7rem] text-muted-foreground">
              contributions in the past year
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
      </div>

      <div className="@container flex flex-col justify-between gap-4 border-t border-border pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-7">
        {weeks.length > 0 && (
          <div
            role="img"
            aria-label={`Contribution calendar, most recent ${NARROW_WEEKS} to ${WIDE_WEEKS} weeks`}
            className="flex gap-[3px]"
          >
            {weeks.map((week, wi) => (
              <div
                key={wi}
                className={`flex-1 flex-col gap-[3px] ${
                  wi < firstNarrow ? "hidden @[26rem]:flex" : "flex"
                }`}
              >
                {week.map((day, di) => (
                  <span
                    key={di}
                    className={`aspect-square w-full rounded-[1.5px] ${level(day)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* languages on the left; the scale's key on the right, so the
            greens are never the only thing telling you what they mean */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
          {stats.topLanguages.length > 0 && (
            <span>{stats.topLanguages.join(" · ")}</span>
          )}
          <span className="flex items-center gap-1.5" aria-hidden="true">
            Less
            <span className="flex gap-[3px]">
              {[0, 1, 4, 10, 25].map((n) => (
                <span
                  key={n}
                  className={`size-2 rounded-[1.5px] ${level(n)}`}
                />
              ))}
            </span>
            More
          </span>
        </div>
      </div>
    </a>
  );
}
