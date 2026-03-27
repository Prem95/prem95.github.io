import { GitHubStats } from "@/lib/github";

export default function GitHubStatsDisplay({ stats }: { stats: GitHubStats | null }) {
  if (!stats) return null;

  return (
    <div
      className="flex items-center gap-4 sm:gap-6 mt-6 pt-6"
      style={{ borderTop: "1px solid var(--border-light)" }}
    >
      <a
        href="https://github.com/Prem95"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 group transition-colors duration-150"
        style={{ color: "var(--text-2)" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
        }}
      >
        <div>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </div>

        <div className="flex gap-4 sm:gap-6">
          <div>
            <span
              className="block text-sm font-semibold"
              style={{ color: "inherit" }}
            >
              {stats.followers}
            </span>
            <span className="text-xs" style={{ color: "var(--text-4)" }}>
              followers
            </span>
          </div>

          <div className="w-px" style={{ background: "var(--border-light)" }} />

          <div>
            <span
              className="block text-sm font-semibold"
              style={{ color: "inherit" }}
            >
              {stats.publicRepos}
            </span>
            <span className="text-xs" style={{ color: "var(--text-4)" }}>
              repos
            </span>
          </div>

          {stats.contributionStreak > 0 && (
            <>
              <div className="w-px" style={{ background: "var(--border-light)" }} />
              <div>
                <span
                  className="block text-sm font-semibold"
                  style={{ color: "inherit" }}
                >
                  {stats.contributionStreak}
                </span>
                <span className="text-xs" style={{ color: "var(--text-4)" }}>
                  days active
                </span>
              </div>
            </>
          )}
        </div>
      </a>
    </div>
  );
}
