# Build Progress

Tracks the 41 tickets from [requirements/Portfolio Implementation Plan.md](requirements/Portfolio%20Implementation%20Plan.md).
Updated each time a ticket is finished.

**Status:** Milestone 0 · Foundation — 1 / 41 tickets done
**Last updated:** 2026-10-10

---

## ▶ Next up: T02 · Tooling

Linter, Prettier with the Tailwind plugin, Vitest, Playwright, npm scripts, `cn` helper. (~1h, depends on T01 ✅)

1. `npm i clsx tailwind-merge` (runtime) and
   `npm i -D prettier prettier-plugin-tailwindcss vitest @playwright/test @axe-core/playwright`
2. Add `lib/cn.ts` (`clsx` + `tailwind-merge`).
3. Add scripts to `package.json`:
   - `"typecheck": "next typegen && tsc --noEmit"` ← needs `next typegen` first (see T01 notes)
   - `"test": "vitest run"`, `"e2e": "playwright test"`, `"format": "prettier --write ."`, `"format:check": "prettier --check ."`
4. Add `vitest.config.ts`, `playwright.config.ts`, `.prettierrc`, `.prettierignore` (ignore `requirements/`, `.next/`, `package-lock.json`).
5. Create the empty folders: `components/`, `content/`, `lib/`, `tests/unit/`, `tests/e2e/`.

**Done when:** `lint`, `typecheck`, `test` and `format:check` all run clean.

After T02, the plan allows **T03** (GitHub + Vercel — needs your accounts) and **T04** (design tokens) in parallel.
Recommended: do T03 early so every later ticket gets a preview URL, and buy the domain now (DNS takes time).

---

## Tickets

### Milestone 0 · Foundation
- [x] T01 · Scaffold Next.js 16.4 app — 2026-10-10
- [ ] T02 · Tooling (lint, Prettier, Vitest, Playwright, scripts, `cn`)
- [ ] T03 · GitHub repo, protected `main`, Vercel previews
- [ ] T04 · Design tokens in `globals.css`
- [ ] T05 · Fonts (Archivo + JetBrains Mono)
- [ ] T06 · Base UI (Button, Chip, Card, SectionHeading, CodeWindow)
- [ ] T07 · Dark/light mode with circle reveal
- [ ] T08 · Header, NavLink, LocalClock, skip link
- [ ] T09 · Mobile menu
- [ ] T10 · Footer, CopyEmail, NextPageLink, BackToTop, `/cv`

### Milestone 1 · Content and pages
- [ ] T11 · Content types and data
- [ ] T12 · Date / timezone / skills helpers + unit tests
- [ ] T13 · Home (static)
- [ ] T14 · About (static)
- [ ] T15 · Work (static)
- [ ] T16 · Case-study page
- [ ] T17 · Case-study drawer (intercepting route)
- [ ] T18 · Experience (static)
- [ ] T19 · Contact (static)
- [ ] T20 · 404 page

### Milestone 2 · Interactions
- [ ] T21 · Command palette
- [ ] T22 · Motion setup
- [ ] T23 · CodeWindow tabs + typing line
- [ ] T24 · Terminal
- [ ] T25 · Work filters
- [ ] T26 · StackMap
- [ ] T27 · SkillFilter + YearSlider
- [ ] T28 · TiltPortrait + FlipCard
- [ ] T29 · TimezoneOverlap + ComposeForm
- [ ] T30 · Site-wide effects
- [ ] T31 · Page transitions

### Milestone 3 · Quality and SEO
- [ ] T32 · Metadata + JSON-LD
- [ ] T33 · Sitemap, robots, OG images, icons
- [ ] T34 · End-to-end tests
- [ ] T35 · Accessibility + visual tests
- [ ] T36 · CI
- [ ] T37 · Fix findings from T34–T36

### Milestone 4 · Launch
- [ ] T38 · Custom domain
- [ ] T39 · Security (patches, headers, Dependabot)
- [ ] T40 · Analytics
- [ ] T41 · Search Console + profile links

---

## Plan adjustments (from the review, 2026-10-10)

Apply these when the named ticket comes up. Tick them off as they're handled.

- [ ] **T02** — `typecheck` must be `next typegen && tsc --noEmit`. `LayoutProps`/`PageProps` are generated globals; plain `tsc` fails on a clean clone (and in CI).
- [ ] **T04** — The guide's `globals.css` snippet is missing `--accent`, `--accent-ink`, `--accent-glow`. The design sets them from JS on the root: dark = lime / lime / lime; light = `#C6FF3D` / `#426B00` / `transparent`. Nav active dot, `.cmd`, `.kbtn`, the menu and the focus ring all depend on them.
- [ ] **T04** — `dark:` is bound to `.theme-dark`, so `dark:` utilities don't apply inside `.keep-dark` blocks in light mode. Inside code windows / terminal, style with tokens only, never `dark:`.
- [ ] **T09** — The design's mobile menu opens with a circle `clip-path` reveal from the button; the guide says fade/slide. Pick one (the circle also works with `@starting-style`).
- [ ] **T11** — Store colours in content as token names (`tone: "pink"`), not hex, so "no raw colours outside `globals.css`" holds.
- [ ] **T11** — Confirm the Learning Guides repo URL: the design links `github.com/ibnul42/learning-guildes` (double "l" — typo or the real name?).
- [ ] **T12** — Make helpers take `now` as a parameter. Test numbers are date-dependent: "5 yrs 2 mos" is only true in Oct 2026, and timezone overlaps change with DST (London 4h → 3h, Berlin 5h → 4h, Sydney 4h → 5h in winter). Pin a date in tests.
- [ ] **T18** — With Cache Components, "present" durations are computed at build time and freeze until the next deploy. Either schedule a monthly redeploy (Vercel deploy hook + cron) or render the "present" duration on the client. Same for `now.md` ("Now — October 2026").
- [ ] **T22** — The palette's "Reduce motion" toggle needs wiring: `MotionConfig reducedMotion={pref ? "always" : "user"}` plus a class on `<html>` so the CSS animations stop too.
- [ ] **T39** — `npm install` reported 5 high-severity advisories (`braces`, via dev tooling). Don't run `audit fix --force`; re-check after updates.

---

## Log

### T01 · Scaffold the Next.js app — 2026-10-10

**Done**
- `create-next-app@16.4.0`: TypeScript, Tailwind v4, App Router, ESLint, `@/*` alias, no `src/`, Turbopack (default), Cache Components on, `AGENTS.md` included.
- Versions: next 16.4.0, react 19.3.0, tailwindcss 4.3.3.
- `tsconfig.json`: added `noUncheckedIndexedAccess`.
- `eslint.config.mjs`: ignores `requirements/**` (design prototype files).
- `git init` on `main`. Nothing committed yet.

**Checks**
- `npm run build` ✅ (`/` prerendered static)
- `npm run dev` ✅ (`/` returns 200)
- `npm run lint` ✅
- `tsc --noEmit` ✅ after `next typegen` (see adjustment for T02)

**Notes**
- Scaffolded in a subfolder then moved up, because `create-next-app` won't run in a folder that already has `requirements/`.
- Tailwind is wired through the `@tailwindcss/turbopack` loader in `next.config.ts` (new in 16.4), not PostCSS.
