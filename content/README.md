# Writing a note

Notes live in `posts/` as `YYYY-MM-DD-slug.md`. Start one with:

```bash
npm run post "What I got wrong about evals"
```

Frontmatter:

```yaml
---
title: What I got wrong about evals
date: 2026-08-16
summary: One line, shown under the title on the index. Optional.
draft: true   # delete to publish; drafts render in `npm run dev` only
---
```

Publish with `npm run deploy`. Images go in `public/blog/` and are referenced
as `/blog/name.png`. This file sits outside `posts/`, so it never renders.

Everything below is what the markdown renderer supports.

## Headings

`##` is the largest heading inside a note — the title is already the `h1`.

### A smaller one

Body text is Archivo, headings are Bricolage, code is IBM Plex Mono. A single newline
becomes a line break, so you can type the way you'd type in a notebook.

## Emphasis and links

**Bold** reads heavier, *italic* leans, `inline code` sits in a box, and [links](https://premkumar95.com) underline on hover.

## Lists

- First thing
- Second thing
  - Nested thing
- Third thing

1. Ordered
2. Also ordered

## Quotes

> The quote gets a rule down the left and drops to muted grey.

## Code

```python
def score(claim: dict) -> float:
    return sum(w * claim[k] for k, w in WEIGHTS.items())
```

## Images

![An example image](/blog/example.png)  <!-- drop a real file in public/blog/ -->

## Tables

| Model | p50 | p95 |
| --- | --- | --- |
| baseline | 240ms | 900ms |
| cached | 60ms | 180ms |

---

Horizontal rules work too.
