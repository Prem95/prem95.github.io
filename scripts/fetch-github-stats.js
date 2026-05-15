#!/usr/bin/env node

/**
 * Fetch GitHub stats at build time
 * Writes to a JSON file that gets imported into the app
 */

const fs = require("fs");
const path = require("path");

const GITHUB_USERNAME = "Prem95";
const OUTPUT_FILE = path.join(__dirname, "../public/github-stats.json");

// This script runs before `next build`, so it loads .env.local itself.
try {
  fs.readFileSync(path.join(__dirname, "../.env.local"), "utf8")
    .split("\n")
    .forEach((line) => {
      const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
    });
} catch {
  // no .env.local — fine, the token is optional
}

// Optional — set GITHUB_TOKEN in the environment to raise the rate limit
// (60 → 5000 req/hr). Never hard-code the token here.
const headers = {
  Accept: "application/vnd.github.v3+json",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

async function fetchGitHubStats() {
  try {
    console.log("Fetching GitHub stats for", GITHUB_USERNAME);

    // Fetch user data
    const userRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      { headers }
    );
    if (!userRes.ok) {
      console.error("GitHub API error:", userRes.status);
      return null;
    }

    const userData = await userRes.json();

    // Fetch repos for total stars + language breakdown (forks excluded)
    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`,
      { headers }
    );

    let totalStars = 0;
    let topLanguages = [];
    if (reposRes.ok) {
      const repos = (await reposRes.json()).filter((r) => !r.fork);
      totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

      const langCount = {};
      repos.forEach((r) => {
        if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
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

    // Total contributions in the past year (includes private contributions
    // when "Include private contributions on my profile" is enabled in GitHub
    // settings — counts the aggregate only, never the repo names).
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
          variables: { login: GITHUB_USERNAME },
        }),
      });
      if (gqlRes.ok) {
        const { data } = await gqlRes.json();
        totalContributions =
          data?.user?.contributionsCollection?.contributionCalendar
            ?.totalContributions || 0;
      } else {
        console.error("GraphQL error:", gqlRes.status);
      }
    }

    const stats = {
      followers: userData.followers,
      publicRepos: userData.public_repos,
      totalContributions,
      totalStars,
      yearsOnGitHub,
      topLanguages,
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
