export interface GitHubStats {
  followers: number;
  publicRepos: number;
  totalContributions: number;
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

    // Total contributions in the past year (private-inclusive aggregate
    // when the profile setting is enabled — no repo names exposed).
    let totalContributions = 0;
    if (process.env.GITHUB_TOKEN) {
      const gqlRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query($login: String!) {
            user(login: $login) {
              contributionsCollection {
                contributionCalendar { totalContributions }
              }
            }
          }`,
          variables: { login: username },
        }),
        next: { revalidate: 3600 },
      });
      if (gqlRes.ok) {
        const { data } = await gqlRes.json();
        totalContributions =
          data?.user?.contributionsCollection?.contributionCalendar
            ?.totalContributions || 0;
      }
    }

    return {
      followers: userData.followers,
      publicRepos: userData.public_repos,
      totalContributions,
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
