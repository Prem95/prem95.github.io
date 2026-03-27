export interface GitHubStats {
  followers: number;
  publicRepos: number;
  contributionStreak: number;
  lastUpdated: string;
}

export async function fetchGitHubStats(): Promise<GitHubStats | null> {
  try {
    const username = "Prem95";

    // Fetch user data
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
      },
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!userRes.ok) {
      console.error("GitHub API error:", userRes.status);
      return null;
    }

    const userData = await userRes.json();

    // Fetch recent contributions (approximation via events)
    const eventsRes = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      {
        headers: {
          "Accept": "application/vnd.github.v3+json",
        },
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
      events.forEach((event: any) => {
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
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
    return null;
  }
}
