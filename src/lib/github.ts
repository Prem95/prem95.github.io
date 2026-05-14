export interface GitHubStats {
  followers: number;
  publicRepos: number;
  contributionStreak: number;
  totalStars: number;
  yearsOnGitHub: number;
  topLanguages: string[];
  lastUpdated: string;
}

// Optional — set GITHUB_TOKEN in the environment to raise the rate limit
// (60 → 5000 req/hr). Never hard-code the token here.
const headers: Record<string, string> = {
  Accept: "application/vnd.github.v3+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  try {
    const username = "Prem95";

    // Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!userRes.ok) {
      console.error("GitHub API error:", userRes.status);
      return null;
    }

    const userData = await userRes.json();

    // Fetch repos for total stars + language breakdown (forks excluded)
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&type=owner`,
      {
        headers,
        next: { revalidate: 86400 },
      }
    );

    let totalStars = 0;
    let topLanguages: string[] = [];
    if (reposRes.ok) {
      const repos = (
        (await reposRes.json()) as {
          fork: boolean;
          stargazers_count: number;
          language: string | null;
        }[]
      ).filter((r) => !r.fork);
      totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

      const langCount: Record<string, number> = {};
      repos.forEach((r) => {
        if (r.language)
          langCount[r.language] = (langCount[r.language] || 0) + 1;
      });
      topLanguages = Object.entries(langCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([lang]) => lang);
    }

    const yearsOnGitHub = Math.floor(
      (Date.now() - new Date(userData.created_at).getTime()) /
        (365.25 * 24 * 60 * 60 * 1000)
    );

    // Fetch recent contributions (approximation via events)
    const eventsRes = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    let contributionStreak = 0;
    if (eventsRes.ok) {
      const events = await eventsRes.json();
      // Count unique days with activity in last 7 days
      const now = new Date();
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      const activeDays = new Set<string>();
      events.forEach((event: { created_at: string }) => {
        const eventDate = new Date(event.created_at);
        if (eventDate > sevenDaysAgo) {
          activeDays.add(eventDate.toDateString());
        }
      });

      contributionStreak = activeDays.size;
    }

    return {
      followers: userData.followers,
      publicRepos: userData.public_repos,
      contributionStreak,
      totalStars,
      yearsOnGitHub,
      topLanguages,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
    return null;
  }
}
