#!/usr/bin/env node

/**
 * Fetch GitHub stats at build time
 * Writes to a JSON file that gets imported into the app
 */

const fs = require("fs");
const path = require("path");

const GITHUB_USERNAME = "Prem95";
const OUTPUT_FILE = path.join(__dirname, "../public/github-stats.json");

async function fetchGitHubStats() {
  try {
    console.log("Fetching GitHub stats for", GITHUB_USERNAME);

    // Fetch user data
    const userRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`
    );
    if (!userRes.ok) {
      console.error("GitHub API error:", userRes.status);
      return null;
    }

    const userData = await userRes.json();

    // Fetch recent events to calculate activity
    const eventsRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`
    );

    let contributionStreak = 0;
    if (eventsRes.ok) {
      const events = await eventsRes.json();
      const now = new Date();
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      const activeDays = new Set();
      events.forEach((event) => {
        const eventDate = new Date(event.created_at);
        if (eventDate > sevenDaysAgo) {
          activeDays.add(eventDate.toDateString());
        }
      });

      contributionStreak = activeDays.size;
    }

    const stats = {
      followers: userData.followers,
      publicRepos: userData.public_repos,
      contributionStreak,
      lastUpdated: new Date().toISOString(),
    };

    // Write to file
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(stats, null, 2));

    console.log("GitHub stats saved:", stats);
    return stats;
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error.message);
    return null;
  }
}

fetchGitHubStats();
