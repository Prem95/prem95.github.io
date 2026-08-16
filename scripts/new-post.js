#!/usr/bin/env node
/**
 * Scaffold a note: `npm run post "What I got wrong about evals"`.
 * Writes content/posts/YYYY-MM-DD-slug.md and prints the path.
 */
const fs = require("node:fs");
const path = require("node:path");

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run post "Title of the note"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/['’]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")
  .slice(0, 60);

// Local date, not UTC — a note written at 1am is dated today, not yesterday.
const now = new Date();
const date = [
  now.getFullYear(),
  String(now.getMonth() + 1).padStart(2, "0"),
  String(now.getDate()).padStart(2, "0"),
].join("-");

const dir = path.join(process.cwd(), "content/posts");
fs.mkdirSync(dir, { recursive: true });

const file = path.join(dir, `${date}-${slug}.md`);
if (fs.existsSync(file)) {
  console.error(`Already exists: ${path.relative(process.cwd(), file)}`);
  process.exit(1);
}

fs.writeFileSync(
  file,
  `---
title: ${title.replace(/"/g, '\\"')}
date: ${date}
summary:
draft: true
---

`,
);

console.log(path.relative(process.cwd(), file));
console.log("draft: true — remove that line when it's ready to ship.");
