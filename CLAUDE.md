## Design Context

### Users
Recruiters, potential clients, collaborators, and fellow engineers who land on the site to quickly assess Prem's background, credibility, and work. They scan fast — they want to know who he is, what he builds, and how to reach him. Context: desktop and mobile, often via a shared link or Google search.

### Brand Personality
**Sharp / Technical / Ambitious** — Prem is a Senior AI Engineer at Ancileo building agentic insurance products, and an indie builder shipping real products (Agentica, Decenchro, Hiregents, SaaSClips). The site should feel like it was built by someone who cares about craft: precise, confident, and forward-looking. Not flashy. Not safe. Distinctively clean.

### Aesthetic Direction
- **Theme**: Light mode — off-white (#FAFAFA) background, near-black (#18181B) text/accent
- **Typography**: Inter (variable, `opsz` axis) for all text and Google Sans Code for labels and figures, the same pairing as agentica.my. Headings are light (300) with tight tracking; hierarchy comes from size and weight, not a second display face
- **Palette**: `--bg: #FAFAFA` · `--surface: #F4F4F5` · `--border: #E4E4E7` · `--text: #18181B` · `--muted: #71717A` · `--accent: #18181B`
- **Colour**: the page stays monochrome; colour lives only in the Products section. Agentica's card sits on its own green streak ground (`.streak-forest`), and each product tile gets a pastel streak (`.streak-light`) tinted by its `hue` in `data.ts`
- **Anti-references**: No dark navy/green page chrome (old site), no heavy drop shadows, no busy animations, no product-tile animation
- **Reference feel**: Editorial / typographic-first — think Stripe Docs meets a personal portfolio
- **Motion**: Subtle — fade-up on scroll (IntersectionObserver + CSS), hover underlines, no distracting motion

### Section Heading Pattern (extracted from Hiregents/Synapse)
Every major section uses this exact 3-part structure:
```
<span className="section-label">Eyebrow label</span>
<h2 className="section-title">
  Primary bold line<br />
  <span className="dim">Secondary faded line</span>
</h2>
```
- **Eyebrow**: `font-mono`, `0.625rem`, `letter-spacing: 0.25em`, `text-transform: uppercase`, `color: var(--text-4)`
- **Title**: `.section-title` — Inter, `font-weight: 300`, `letter-spacing: -0.035em`, `line-height: 1.06`
- **Dim span**: `color: var(--text-4)` — fades the secondary line to ~40% opacity
- Applied to: About, Experience, Products, Contact sections

### Copy rules (from Hiregents)
- No AI slop ("seamlessly", "empower", "leverage", "autonomous intelligence")
- No negative parallelisms, no em dash overuse
- Button labels: plain verbs ("Send an email", "Download", "Visit site")
- Conversational, not corporate

### Design Principles
1. **Contrast does the work** — rely on type weight, size hierarchy, and whitespace rather than color or decoration
2. **Content first** — every pixel should serve information, not aesthetics for its own sake
3. **Mobile is not an afterthought** — design for 375px, enhance for 1440px
4. **Performance is a feature** — static generation, `next/font`, `next/image`, no heavy JS for layout
5. **Confidence, not decoration** — the site should feel as sharp and direct as Prem's work

### Tech Stack
- Next.js 16 (App Router, static export, `trailingSlash: true`)
- Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`)
- TypeScript, shadcn-style UI primitives on Base UI
- `next/font` (Inter + Google Sans Code), CSS-only motion

### Commands
```bash
npm run dev              # Next.js dev server
npm run build            # Static export build
npm run post "Title"     # Scaffold a note in content/posts/
npm run deploy           # Build + publish out/ to the gh-pages worktree
npm run lint             # ESLint
```

### Notes (/blog)
- Source of truth is `content/posts/*.md`, named `YYYY-MM-DD-slug.md`, parsed at build time by `src/lib/posts.ts` (gray-matter + marked, `breaks: true`).
- Frontmatter: `title`, `date`, `summary` (optional), `draft` (optional), `slug` (optional override).
- `draft: true` renders in `next dev` only — never in a build.
- Images live in `public/blog/` and are referenced as `/blog/name.png`.
- Index groups entries by month; each note gets `/blog/<slug>/`. Markdown is styled by `.prose` in `globals.css`.

### Key Files
- `src/app/page.tsx` — Landing with all sections
- `src/app/layout.tsx` — Fonts, metadata
- `src/components/` — Section components (`Products.tsx` holds the featured card and tiles)
- `src/lib/data.ts` — All copy: roles, products (`hue`, `points`, `highlights`), side projects
- `public/github-stats.json` — Written by `scripts/fetch-github-stats.js` before each build; needs `GITHUB_TOKEN` for contributions and the calendar

### Repo layout
- This folder is the `main` worktree of `/Users/prem/Projects/prem95.github.io`, which is checked out on `gh-pages` and is the deploy target
- `layout-templates` is a local-only branch holding five layout studies; never merge it into `main` (everything under `src/app/` gets deployed)

### Sections
1. **Hero** — name, role, tagline, two CTAs
2. **About** — bio (Senior AI Engineer @ Ancileo, agentic insurance, indie builder), GitHub stats card
3. **Experience** — tabbed: Ancileo + prior roles
4. **Products** — Agentica featured (green ground, waitlist), then tiles for Decenchro, Hiregents, SaaSClips; side projects list below
5. **Contact** — minimal, email + socials
