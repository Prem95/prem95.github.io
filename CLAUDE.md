## Design Context

### Users
Recruiters, potential clients, collaborators, and fellow engineers who land on the site to quickly assess Prem's background, credibility, and work. They scan fast — they want to know who he is, what he builds, and how to reach him. Context: desktop and mobile, often via a shared link or Google search.

### Brand Personality
**Sharp / Technical / Ambitious** — Prem is an AI Engineer at Ancileo building agentic insurance products, and an indie builder shipping real SaaS products (Simpler suite). The site should feel like it was built by someone who cares about craft: precise, confident, and forward-looking. Not flashy. Not safe. Distinctively clean.

### Aesthetic Direction
- **Theme**: Light mode — off-white (#FAFAFA) background, near-black (#18181B) text/accent
- **Typography**: Large, editorial — bold name, generous whitespace, monospaced labels
- **Palette**: `--bg: #FAFAFA` · `--surface: #F4F4F5` · `--border: #E4E4E7` · `--text: #18181B` · `--muted: #71717A` · `--accent: #18181B`
- **Anti-references**: No dark navy/green (old site), no flashy gradients, no heavy drop shadows, no busy animations
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
- **Title**: `font-sans`, `font-weight: 800`, `font-style: italic`, `clamp(2.2rem, 6vw, 3.2rem)`, `line-height: 0.92`, `letter-spacing: -0.04em`
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
- Next.js 14 (App Router, static export)
- Tailwind CSS v3
- Framer Motion (scroll fade-ins only, lazy)
- TypeScript
- `next/font` (Geist Sans + Geist Mono)

### Sections
1. **Hero** — name, role, tagline, two CTAs
2. **About** — bio (AI Engineer @ Ancileo, agentic insurance, indie builder), skills
3. **Experience** — tabbed: Ancileo + prior roles
4. **SaaS Products** — featured cards: Simpler Invoices, Simpler Outreach, Simpler Disputes
5. **Contact** — minimal, email + socials
