# Build Progress

Tracks the 41 tickets from [requirements/Portfolio Implementation Plan.md](requirements/Portfolio%20Implementation%20Plan.md).
Updated each time a subtask or ticket is finished.

**Status:** Milestone 0 · Foundation — 5 / 41 tickets done (+ T06.1) · ~61h of ~67h left
**Last updated:** 2026-10-11

**How to read this**

- Tickets of 2h or more, or with several separate pieces, are split into subtasks (`T08.1`, `T08.2`…) of about 1h or less. Each one can be built, checked and committed on its own (`T08.2: add NavLink with aria-current`).
- A ticket is ticked when all its subtasks are done **and** its "Done when" from the plan passes.
- 👤 = needs you (accounts, decisions, facts only you know). ⚠ = a fix to the plan from the review; apply it in that step.
- Hours are the plan's estimates, split across subtasks.

---

## ▶ Next up: T06.2 · Card + SectionHeading

Second step of T06 · Base UI (~0.5h, needs T04 ✅ T05 ✅). On the critical path.

1. `components/ui/Card.tsx`: port `.wcard` from `requirements/design/Ink.dc.html`: 1.5px conic border (`--ang` + `spinBorder` on hover), the `--mx`/`--my` spotlight (`--spot`), hover lift and pink shadow. Polymorphic like `Button` (`<article>` / link). The pointer-tracking that sets `--mx`/`--my` is a client effect, so leave it at the default position for now (T30).
2. `components/ui/SectionHeading.tsx`: mono eyebrow + big title (e.g. "The whole stack," / "Career log" on Home). Takes the heading level (`h1`/`h2`) as a prop, so each page keeps exactly one `h1`.
3. Add both to `BaseUiDemo` (shown on `/` and `/styleguide`).

**Done when:** the card's border spins on hover and the heading sizes match the canvas, in both themes.

Then T06.3 (CodeWindow frame). T07.1 is also ready.

**Before you go on:**

- 👤 Check T06.1 on `/` against the canvas (`npm run dev`, Flip theme, hover the buttons, Tab for the focus ring). T04/T05 also still need a visual check on `/styleguide`.
- 👤 Confirm T03's "Done when": a PR shows a working Vercel preview URL.
- 👤 Your Node is 25.9 (not an LTS release). Vercel builds on Node 22/24. Node 24 LTS locally would match it and allow Vitest 5.
- 👤 Buy the domain soon. DNS and Search Console take time (T38/T41).

---

## Dependencies

Every ticket and subtask lists **needs:** the earlier work that must be finished first (direct prerequisites only; theirs are implied).
A ticket's own **needs** comes from the plan; a subtask's is the narrower part of it that it really uses, so some subtasks can start before their whole ticket is unblocked.

**Ready now** (everything they need is done):

- T06.2 · T06.3 (Base UI): critical path, do these first
- T07.1 (theme provider)
- T10.4 (BackToTop) · T10.5 (`/cv` redirect)
- T11.1 (content types) → then T11.2–T11.4
- T12.2 (time-zone helper)

**Critical path** (a slip here moves the launch): T06 → T07 → T08 → T10 → T13 → T24 → T34 → T35 → T36 → T37 → T38 → T41

---

## Tickets

### Milestone 0 · Foundation — 17h

- [x] T01 · Scaffold Next.js 16.4 app — 2026-10-10 · needs: —
- [x] T02 · Tooling (lint, Prettier, Vitest, Playwright, scripts, `cn`) — 2026-10-11 · needs: T01
- [x] T03 · GitHub repo, protected `main`, Vercel previews — 2026-10-11 (by you) · needs: T01
- [x] T04 · Design tokens in `globals.css` — 2026-10-11 (visual check pending, see above) · needs: T01
- [x] T05 · Fonts (Archivo + JetBrains Mono) — 2026-10-11 · needs: T04
- [ ] **T06 · Base UI** (1.5h) · needs: T04, T05
  - [x] T06.1 · `Button` (primary, ghost) + `Chip` (0.5h) · needs: T04, T05 — 2026-10-11
  - [ ] T06.2 · `Card` (conic border, spotlight) + `SectionHeading` (0.5h) · needs: T04, T05
  - [ ] T06.3 · `CodeWindow` frame: chrome, file tab, `.keep-dark` body (0.5h) · needs: T04, T05
- [ ] **T07 · Dark/light mode** (2.5h) · needs: T04
  - [ ] T07.1 · `next-themes` provider in `app/providers.tsx`; remove the hard-coded `theme-dark` from `<html>`. Check: no flash on reload, persists, syncs across tabs (0.75h) · needs: T04
  - [ ] T07.2 · `useThemeSwitch` with circle reveal + view-transition CSS; instant under reduced motion and without View Transitions (1h) · needs: T07.1
  - [ ] T07.3 · `ThemeToggle` (the design's `.toggle` knob, both icons rendered and switched by CSS); replace the styleguide's temporary `ThemeFlip` (0.75h) · needs: T07.2
- [ ] **T08 · Header** (2.5h) · needs: T06, T07
  - [ ] T08.1 · `content/nav.ts` + `Header` shell: sticky glass, logo, layout at 1440/1180/1100/1000/390px; skip link + `<main id="main">` (1h) · needs: T06.1, T07.3
  - [ ] T08.2 · `NavLink` with `aria-current` (counts `/work/[slug]` as Work), active dot style (0.5h) · needs: T08.1
  - [ ] T08.3 · `LocalClock`: Dhaka time, `--:--` on the server, updates every minute, shows from `clock:` (0.5h) · needs: T08.1
  - [ ] T08.4 · Search button placeholder (`.kbtn`): label + ⌘K from `label:`, icon only below (0.5h) · needs: T08.1
- [ ] **T09 · Mobile menu** (2h) · needs: T08
  - [ ] T09.1 · Native `<dialog>` + menu button: Esc / close / link all close it, focus returns, scroll lock, closes on navigate, hidden from `nav:` up (1h) · needs: T08.1
  - [ ] T09.2 · Contents (numbered links, email/LinkedIn/GitHub pills, theme toggle) + entrance animation + stagger; reduced-motion version (1h) · needs: T09.1, T08.2
    - 👤⚠ Pick the animation: the design's circle `clip-path` reveal from the button, or the guide's fade/slide. The circle also works with `@starting-style`.
- [ ] **T10 · Footer** (3h) · needs: T08
  - [ ] T10.1 · `Footer` layout: Pages / Elsewhere / Contact groups, bottom line; stacks at 390px (1h) · needs: T08.1, T06.1
    - ⚠ The year: keep it in `content/profile.ts` or render it on the client (Cache Components flags reading the clock during prerender).
  - [ ] T10.2 · `CopyEmail` with "Copied" state; email stays selectable if copying fails (0.5h) · needs: T10.1
  - [ ] T10.3 · `NextPageLink` from `NAV` order (Contact → Home) + unit test for the order (0.5h) · needs: T08.1
  - [ ] T10.4 · `BackToTop` with scroll-driven ring (`totopIn`, `ringProg`) (0.5h) · needs: T04
  - [ ] T10.5 · `/cv` redirect in `next.config.ts` + copy `Ibnul_Ashir-Resume.pdf` into `public/` (0.5h) · needs: T01

### Milestone 1 · Content and pages — 18h

- [ ] **T11 · Content types and data** (2h) · needs: T02
  - [ ] T11.1 · `content/types.ts`: `Profile`, `Project`, `Role`, `Skill`, `Education`; `TechId`/`SkillId` unions (0.5h) · needs: T02
    - ⚠ Colours as token names (`tone: "pink"`), never hex.
  - [ ] T11.2 · `profile.ts` (no phone number) + `education.ts` (0.5h) · needs: T11.1
  - [ ] T11.3 · `roles.ts` (5 roles, start/end months) + `skills.ts` (6 categories, first-used year) (0.5h) · needs: T11.1
  - [ ] T11.4 · `projects.ts` (7 projects) (0.5h) · needs: T11.1, T11.3 (stack ids)
    - 👤⚠ Confirm the Learning Guides URL: the design has `github.com/ibnul42/learning-guildes` (typo or real name?).
- [ ] **T12 · Helpers + unit tests** (2h) · needs: T11
  - [ ] T12.1 · `lib/dates.ts`: `monthsBetween`, `formatDuration` (0.75h) · needs: T11.3 (tests use the real roles)
    - ⚠ Take `now` as a parameter; tests pin Oct 2026 (5 roles = 62 months = "5 yrs 2 mos").
  - [ ] T12.2 · `lib/timezones.ts`: `overlap(city, date)` (0.75h) · needs: T02
    - ⚠ Pin the date in tests: DST changes the results (London 4h → 3h, Berlin 5h → 4h, Sydney 4h → 5h in winter).
  - [ ] T12.3 · `lib/skills.ts`: `skillsAt(year)` (2026 → 5 roles, 19 skills) (0.5h) · needs: T11.3, T12.1
- [ ] **T13 · Home (static)** (3.5h) · needs: T06, T10, T11
  - [ ] T13.1 · Hero: headline + glitch, typing-line placeholder, CTAs, static `CodeWindow`, aurora / grid floor / particles in CSS (1.25h) · needs: T06.1, T06.3, T11.2
  - [ ] T13.2 · Stack layers (0.5h) · needs: T06.2, T11.3
  - [ ] T13.3 · Career log (0.5h) · needs: T06.2, T11.3
  - [ ] T13.4 · Selected work (featured projects) (0.5h) · needs: T06.2, T11.4
  - [ ] T13.5 · Strengths + "Let's build" terminal shell (static) + `NextPageLink` (0.75h) · needs: T06.3, T10.3, T11.2
  - ⚠ Keyframes to add: `lineIn`, `neonPulse`, `underline`, `travel` (rename it, since Experience has a different `travel`).
- [ ] **T14 · About (static)** (3.5h) · needs: T06, T11
  - [ ] T14.1 · Hero: portrait with `next/image` (`priority`, `sizes`, blur) + profile highlights (1h) · needs: T06.1, T11.2
    - ⚠ Keyframes: `floaty`, `hlIn`, `swapIn` (rename it, since Contact's has no blur).
  - [ ] T14.2 · Quick facts (6) + toolbox (6 categories) (1h) · needs: T06.2, T11.2, T11.3
  - [ ] T14.3 · "How I work" flip-card faces, static (0.75h) · needs: T06.2, T11.2
  - [ ] T14.4 · Education & certification + CTA + `NextPageLink` (0.75h) · needs: T06.1, T11.2, T10.3
- [ ] T15 · Work (static): project grid + pipeline (1.5h) · needs: T06.2, T11.4
  - ⚠ Keyframe: `flow` (pipeline dots).
- [ ] T16 · Case-study page: `generateStaticParams`, `dynamicParams = false` (1h) · needs: T15
- [ ] **T17 · Case-study drawer** (2h) · needs: T16
  - [ ] T17.1 · `@modal` slot, `default.tsx`, intercepting `(.)work/[slug]` route rendered in the root layout (1h) · needs: T16
  - [ ] T17.2 · `ProjectDrawer`: dialog, focus trap, Esc / back closes with `router.back()`; keyframes `drawerIn`, `fadeIn`. Test: click, reload, back (1h) · needs: T17.1
- [ ] T18 · Experience (static): timeline with computed durations, sticky aside from `aside:` (1.5h) · needs: T12.1, T06.2, T10.3
  - ⚠ "Present" durations freeze at build time with Cache Components: compute them on the client, or redeploy monthly (deploy hook + cron).
  - ⚠ Keyframes: `fill`, `skillIn`, `slideIn`, and Experience's own `ping` (14px), `travel` and `yrPop` (rename them).
- [ ] T19 · Contact (static): channels, copy email, form layout (0.75h) · needs: T10.2, T10.3, T11.2
- [ ] T20 · Terminal-style 404 (0.25h) · needs: T06.1, T06.3

### Milestone 2 · Interactions — 14h

- [ ] **T21 · Command palette** (3h) · needs: T07, T08, T11
  - [ ] T21.1 · `PaletteProvider` + ⌘K / Ctrl K / `/` shortcuts; wire the header button and mobile menu (0.75h) · needs: T07.1 (providers file), T08.4, T09.2
  - [ ] T21.2 · `CommandPalette` (cmdk, loaded with `next/dynamic`): Pages, Projects, Skills groups (1.25h) · needs: T21.1, T11.3, T11.4
  - [ ] T21.3 · Actions: switch theme, copy email, CV, LinkedIn, GitHub, reduce motion (0.5h) · needs: T21.2, T07.2, T10.2, T10.5
  - [ ] T21.4 · Styling (glass panel, `palIn`/`palRow`), full-width on phones, ⌘K vs Ctrl K hint (0.5h) · needs: T21.2
- [ ] T22 · Motion setup: `LazyMotion` + `MotionConfig` (0.5h) · needs: T07.1
  - ⚠ Feed the palette's "Reduce motion" choice in: `reducedMotion={pref ? "always" : "user"}` plus `.motion-off` on `<html>`. (The toggle itself comes in T21.3; wire whichever lands second.)
- [ ] T23 · `CodeWindow` tabs + typing line (1.5h) · needs: T13.1
- [ ] **T24 · Terminal** (2h) · needs: T13, T07
  - [ ] T24.1 · `lib/terminal.ts`: whoami, email, linkedin, github, cv, theme, clear, help + unit tests (1h) · needs: T11.2, T10.5
  - [ ] T24.2 · `Terminal` UI: input, history, command chips, `aria-live` output (1h) · needs: T24.1, T13.5, T07.2
- [ ] T25 · Work filters with Motion `layout` + `?tag=` (1h) · needs: T15, T22
- [ ] T26 · `StackMap` SVG (1.5h) · needs: T15 — ⚠ keyframe `edgeFlow`
- [ ] T27 · `SkillFilter` + `YearSlider` (1.5h) · needs: T12.3, T18
- [ ] T28 · `TiltPortrait` + `FlipCard` (0.75h) · needs: T14.1, T14.3, T22
- [ ] T29 · `TimezoneOverlap` + `ComposeForm` (1h) · needs: T12.2, T19
  - 👤 Confirm your real working hours (the design uses 9:00–18:00 Dhaka).
  - ⚠ Keyframes: `orbit`, `tzPop`, `tzStripe`, Contact's `swapIn` and `yrPop` (renamed).
- [ ] T30 · Site-wide effects: `CursorGlow`, `ClickSparks`, `Magnetic` (1h) · needs: T22 — first to cut if late
- [ ] T31 · Page transitions with `<ViewTransition>` (0.25h) · needs: T22 — second to cut

### Milestone 3 · Quality and SEO — 13h

- [ ] T32 · Metadata + JSON-LD `Person` (1h) · needs: Milestone 1 (T11–T20)
- [ ] **T33 · Sitemap, share images, icons** (2h) · needs: T32
  - [ ] T33.1 · `sitemap.ts` (5 pages + 7 case studies) + `robots.ts` (0.5h) · needs: T32 (site URL), T16
  - [ ] T33.2 · OG images: site + one per case study (`next/og`) (1h) · needs: T32, T16
  - [ ] T33.3 · Favicon + app icons (0.5h) · needs: T04
- [ ] **T34 · End-to-end tests** (3h) · needs: Milestone 2 (T21–T31). Run `npx playwright install chromium` first.
  - [ ] T34.1 · Every route loads with the right `h1` (0.5h) · needs: T13–T20
  - [ ] T34.2 · Palette: open by keyboard, find a project, open it (0.5h) · needs: T21
  - [ ] T34.3 · Drawer vs direct URL: click, back, reload (0.75h) · needs: T17
  - [ ] T34.4 · Theme persists across reload (0.5h) · needs: T07
  - [ ] T34.5 · Mobile menu at 390px (0.75h) · needs: T09
- [ ] **T35 · Accessibility + visual tests** (2h) · needs: T34
  - [ ] T35.1 · axe on every route, both themes (1h) · needs: T34.1
  - [ ] T35.2 · Screenshots at 390 / 1024 / 1440px, both themes (1h) · needs: T34.1, Milestone 2 (final UI) — can be cut
- [ ] **T36 · CI** (2.5h) · needs: T34, T35
  - [ ] T36.1 · GitHub Actions: typecheck, lint, unit tests, build (0.75h) · needs: T02, T03
  - [ ] T36.2 · Playwright against the Vercel preview (0.75h) · needs: T36.1, T34, T35
  - [ ] T36.3 · Lighthouse CI + `lighthouserc.json` budgets (0.75h) · needs: T36.1
  - [ ] T36.4 · 👤 Make the checks required on `main` (GitHub settings) (0.25h) · needs: T36.1, T36.2, T36.3
- [ ] T37 · Fix what T34–T36 found (2.5h) · needs: T36
  - ⚠ Decide whether `/styleguide` stays (it already 404s on production and is `noindex`).

### Milestone 4 · Launch — 5h

- [ ] T38 · 👤 Custom domain as primary; redirect `www` and `vercel.app`; update `metadataBase` (1h) · needs: T37 (buy the domain and add DNS early; only the switch waits)
- [ ] T39 · Security: latest Next.js patch (Oct 14 release), headers, Dependabot (1h) · needs: T37
  - ⚠ `npm install` reported 5 high advisories (`braces`, dev tooling). Re-check; don't use `audit fix --force`.
- [ ] T40 · Vercel Analytics + Speed Insights + events (1h) · needs: T38
- [ ] **T41 · Search and profiles** (2h) · needs: T38
  - [ ] T41.1 · 👤 Search Console: DNS verify, submit sitemap, request indexing (0.5h) · needs: T38, T33.1
  - [ ] T41.2 · 👤 Add the site to LinkedIn, GitHub, LeetCode (0.5h) · needs: T38
  - [ ] T41.3 · Update the CV PDF with the site URL and replace it in `public/` (0.5h) · needs: T38, T10.5
  - [ ] T41.4 · Final check on a real phone and laptop (0.5h) · needs: T38, T39, T40

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

### T02 · Tooling — 2026-10-11

**Done**

- Runtime: `clsx`, `tailwind-merge`. Dev: `prettier`, `prettier-plugin-tailwindcss`, `vitest`, `@playwright/test`, `@axe-core/playwright`.
- `lib/cn.ts` + `tests/unit/cn.test.ts` (3 tests).
- `vitest.config.ts`: Node environment, `@/` alias, runs `tests/unit/**/*.test.ts`. No jsdom: unit tests cover plain logic, Playwright covers UI.
- `playwright.config.ts`: `tests/e2e`, desktop 1440px + mobile 390px projects. Starts `npm run dev` locally, or targets `PLAYWRIGHT_BASE_URL` (Vercel preview) in CI.
- `.prettierrc` (Tailwind plugin reading `app/globals.css`, sorts classes inside `cn()`/`clsx()`), `.prettierignore`.
- Scripts: `typecheck` (`next typegen && tsc --noEmit`), `test`, `test:watch`, `e2e`, `format`, `format:check`.
- `.gitignore`: Playwright output folders.

**Checks:** `lint` ✅ · `typecheck` ✅ · `test` ✅ 3/3 · `format:check` ✅

**Notes**

- Vitest is **4.1**, not 5. Vitest 5 needs `@types/node` ≥ 22 and doesn't list Node 25 as supported. Move to Node 24 LTS to upgrade.
- Playwright browsers aren't downloaded yet. Run `npx playwright install chromium` before T34.
- Prettier also skips gitignored files (`requirements/`, `PROGRESS.md`).
- Folders are created as files land in them (git doesn't track empty folders).

### T03 · GitHub + Vercel — 2026-10-11

Done by you: `github.com/ibnul42/ibnulashir-portfolio`, initial commit `7621bd0` on `main`.

### T04 · Design tokens — 2026-10-11

**Done** (`app/globals.css`)

- Every token from the design, for `.theme-dark`/`.keep-dark` and `.theme-light`, including Work's `--scrim`, plus the accent trio the guide was missing.
- `dark:` / `light:` variants follow the class on `<html>`.
- `@theme inline` maps tokens to utilities. **Tailwind's default colours, breakpoints and animations are cleared**, so only tokens work. `bg-red-500` simply won't generate.
- Breakpoints match the design's `max-width` queries exactly: `xs` 381 · `tab` 761 · `aside` 960 · `nav` 1001 · `label` 1101 · `clock` 1181px.
- Shared keyframes, `@property --ang`, `animate-*` utilities, `animate-delay-N` (120ms steps = `.d1`–`.d5`), `reveal`, `grad-text`, `.glitch`.
- Reduced motion: the OS setting and a `.motion-off` class (for the palette toggle) both stop all animation.
- `app/styleguide/`: dev page showing every token, the font weights and effects, with a temporary Flip-theme button. 404s on production.
- `app/page.tsx` is a placeholder until T13. Removed the starter SVGs from `public/`.

**Checks:** `lint` ✅ · `typecheck` ✅ · `build` ✅ · compiled CSS has all custom utilities and breakpoints, and no default palette (18 KB) · `next start`: `/` 200, `/styleguide` 200 + `noindex`, unknown URL 404.

**Not yet checked:** I couldn't compare against the canvas by eye (no browser connected). Open `/styleguide` with `npm run dev`, click **Flip theme**, and compare with `requirements/design/Ink.dc.html`.

### T05 · Fonts — 2026-10-11

**Done**

- `app/fonts.ts`: Archivo and JetBrains Mono via `next/font/google`, variable weights, `display: swap`, exposed as `--font-archivo` / `--font-jetbrains` → Tailwind `font-sans` / `font-mono`.
- `app/layout.tsx`: font variables + `theme-dark` on `<html>`; Geist removed.

**Checks:** both fonts self-hosted and preloaded (`Link: rel=preload` header); `next/font` adds size-matched fallbacks, so no layout shift from font loading.

**Notes**

- Archivo's **width axis is not loaded** (deviation from the plan): the design never uses `font-stretch`/`wdth`, so it would only add bytes. Add `axes: ["wdth"]` in `app/fonts.ts` if a design ever needs it.

### T06.1 · Button + Chip — 2026-10-11

**Done**

- `components/ui/Button.tsx`: `primary` (`.btn-acc`) and `ghost` (`.btn-line`) with the hover lift, glow and light sweep. Renders `next/link` for internal paths, `<a>` for external links, downloads and `target`, and `<button type="button">` with no `href`. `buttonClasses()` is exported for anything that needs the look without the component.
- `components/ui/Chip.tsx`: `tag` (small, optional coloured square with optional glow) and `tool` (larger stack pill). Static only; the pressable skill-filter chips are T27.
- `lib/tone.ts`: the five neon tone names + class maps. Content (T11) will use these names instead of hex.
- New tokens in `globals.css`: `--accent-edge` (primary button border, darker in light mode as in the design) and `--color-shine` (the hover sweep).
- `app/styleguide/BaseUiDemo.tsx`: every variant, shown on `/` (temporary, until T13) and `/styleguide`.

**Checks:** `lint` ✅ · `typecheck` ✅ · `test` ✅ · `format:check` ✅ · `build` ✅ · compiled CSS has every button/chip rule · `next start`: `/` renders internal links as `<a href="/…">`, the external link with `target="_blank" rel="noopener"`, and buttons with `type="button"`.

**Fixes found on the way**

- **T04 correction:** Tailwind's reset sets `line-height: 1.5`; the design never sets one (browser `normal`). `html` now uses `line-height: normal`, so text blocks aren't taller than the canvas.
- tailwind-merge drops an earlier `leading-*` when a later `text-[size]` class appears. Avoid combining them in one `cn()` call, or use the `text-[11px]/[1.4]` form.

**Not yet checked:** by eye against the canvas (no browser connected).

**Note:** `Button` with `href="/cv"` would render `next/link`, which tries client navigation to a redirect. Pass `download` or `target="_blank"` for the CV so it renders a plain `<a>` (T10.5).
