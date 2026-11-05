#!/usr/bin/env node

/**
 * Fetch GitHub stats at build time
 * Writes to a JSON file that gets imported into the app
 */

const fs = require("fs");
const path = require("path");

const GITHUB_USERNAME = "Prem95";
// A second account of mine, whose repos are all private. Reading them needs
// GITHUB_TOKEN_SECONDARY, a token for that account.
const SECONDARY_USERNAME = "agenticatechnology";
// GitHub draws the calendar in my timezone (Malaysia, UTC+8).
const CALENDAR_UTC_OFFSET_HOURS = 8;
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

// All pages of a GitHub list endpoint. Throws on failure so a partial count
// never gets published. An empty repo's commit list answers 409.
async function fetchAllPages(url, requestHeaders) {
  const items = [];
  for (let page = 1; ; page++) {
    const res = await fetch(`${url}?per_page=100&page=${page}`, {
      headers: requestHeaders,
    });
    if (res.status === 409) return items;
    if (!res.ok) throw new Error(`${res.status} from ${url}`);
    const batch = await res.json();
    items.push(...batch);
    if (batch.length < 100) return items;
  }
}

// Daily count ({ "YYYY-MM-DD": n }) of commits in the second account's repos
// that the main account's calendar doesn't already include. GitHub credits a
// commit to whichever account owns its email, and only if that account can
// access the repo, so we count:
//   - commits authored as the second account, and
//   - commits authored as the main account, in repos it isn't a collaborator on.
// Returns null when the commits can't be read, so the caller keeps saved values.
async function fetchSecondaryCommitsByDate() {
  const token = process.env.GITHUB_TOKEN_SECONDARY;
  if (!token) return null;

  const requestHeaders = {
    Accept: "application/vnd.github.v3+json",
    Authorization: `Bearer ${token}`,
  };
  const api = "https://api.github.com";
  const sameUser = (a, b) => a?.toLowerCase() === b.toLowerCase();

  try {
    const repos = await fetchAllPages(
      `${api}/user/repos`,
      requestHeaders
    );
    const byDate = {};
    for (const repo of repos) {
      if (repo.fork || !sameUser(repo.owner?.login, SECONDARY_USERNAME)) continue;
      const repoUrl = `${api}/repos/${repo.full_name}`;
      const collaborators = await fetchAllPages(
        `${repoUrl}/collaborators`,
        requestHeaders
      );
      const mainHasAccess = collaborators.some((c) =>
        sameUser(c.login, GITHUB_USERNAME)
      );
      const commits = await fetchAllPages(`${repoUrl}/commits`, requestHeaders);
      for (const commit of commits) {
        const author = commit.author?.login;
        const missing =
          sameUser(author, SECONDARY_USERNAME) ||
          (sameUser(author, GITHUB_USERNAME) && !mainHasAccess);
        if (!missing) continue;
        const day = new Date(
          new Date(commit.commit.author.date).getTime() +
            CALENDAR_UTC_OFFSET_HOURS * 60 * 60 * 1000
        )
          .toISOString()
          .slice(0, 10);
        byDate[day] = (byDate[day] || 0) + 1;
      }
    }
    return byDate;
  } catch (error) {
    console.error("Could not read secondary account:", error.message);
    return null;
  }
}

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
    let totalCommits = 0;
    let totalPRs = 0;
    let totalReviews = 0;
    let calendar = [];
    let secondaryContributions = {};
    if (process.env.GITHUB_TOKEN) {
      // A build without the second token (e.g. on Vercel) reuses the saved
      // counts instead of dropping them from the totals.
      secondaryContributions = await fetchSecondaryCommitsByDate();
      if (!secondaryContributions) {
        try {
          secondaryContributions =
            JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf8"))
              .secondaryContributions || {};
        } catch {
          secondaryContributions = {};
        }
      }

      const gqlRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query($login: String!) {
            user(login: $login) {
              contributionsCollection {
                totalCommitContributions
                totalPullRequestContributions
                totalPullRequestReviewContributions
                restrictedContributionsCount
                contributionCalendar {
                  totalContributions
                  weeks { contributionDays { date contributionCount } }
                }
              }
            }
          }`,
          variables: { login: GITHUB_USERNAME },
        }),
      });
      if (gqlRes.ok) {
        const { data } = await gqlRes.json();
        const cc = data?.user?.contributionsCollection;
        totalContributions = cc?.contributionCalendar?.totalContributions || 0;
        totalCommits =
          (cc?.totalCommitContributions || 0) +
          (cc?.restrictedContributionsCount || 0);
        totalPRs = cc?.totalPullRequestContributions || 0;
        totalReviews = cc?.totalPullRequestReviewContributions || 0;
        // Compact 52-week calendar: array of weeks, each an array of day counts
        let secondaryTotal = 0;
        calendar = (cc?.contributionCalendar?.weeks || []).map((w) =>
          w.contributionDays.map((d) => {
            const extra = secondaryContributions[d.date] || 0;
            secondaryTotal += extra;
            return d.contributionCount + extra;
          })
        );
        totalContributions += secondaryTotal;
        totalCommits += secondaryTotal;
      } else {
        console.error("GraphQL error:", gqlRes.status);
      }
    }

    const stats = {
      followers: userData.followers,
      publicRepos: userData.public_repos,
      totalContributions,
      totalCommits,
      totalPRs,
      totalReviews,
      calendar,
      secondaryContributions,
      totalStars,
      yearsOnGitHub,
      topLanguages,
      lastUpdated: new Date().toISOString(),
    };

    // No token → GraphQL fields are unavailable; keep the previously
    // published values instead of wiping them from the JSON.
    if (!process.env.GITHUB_TOKEN) {
      try {
        const prev = JSON.parse(fs.readFileSync(OUTPUT_FILE, "utf8"));
        stats.totalContributions = prev.totalContributions || 0;
        stats.totalCommits = prev.totalCommits || 0;
        stats.totalPRs = prev.totalPRs || 0;
        stats.totalReviews = prev.totalReviews || 0;
        stats.calendar = prev.calendar || [];
        stats.secondaryContributions = prev.secondaryContributions || {};
      } catch {
        // no previous file — nothing to preserve
      }
    }

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
