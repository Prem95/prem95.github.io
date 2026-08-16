#!/usr/bin/env bash
# Build the static export and publish it to the gh-pages worktree.
#   npm run deploy
set -euo pipefail

cd "$(dirname "$0")/.."
SRC="$PWD/out"

# The gh-pages branch lives in a sibling worktree of this repo.
TARGET=$(git worktree list --porcelain \
  | awk '/^worktree /{wt=$2} /^branch refs\/heads\/gh-pages$/{print wt; exit}')

if [ -z "${TARGET:-}" ]; then
  echo "No gh-pages worktree found. Create one with:" >&2
  echo "  git worktree add ../prem95.github.io gh-pages" >&2
  exit 1
fi

npm run build

echo "→ publishing $SRC to $TARGET"
rsync -a --delete --exclude '.git' --exclude 'CNAME' --exclude '.nojekyll' \
  "$SRC/" "$TARGET/"

# GitHub Pages needs both of these, and neither comes out of the build.
echo "premkumar95.com" > "$TARGET/CNAME"
touch "$TARGET/.nojekyll"

cd "$TARGET"
git add -A
if git diff --cached --quiet; then
  echo "Nothing changed — site is already up to date."
  exit 0
fi
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin gh-pages
echo "✓ live at https://premkumar95.com"
