@AGENTS.md

# Ibnul Ashir portfolio

Next.js 16.4 portfolio built ticket by ticket from the plans in `requirements/`:

- `requirements/Portfolio Implementation Plan.md` — the 41 tickets (T01–T41): files, dependencies, "done when".
- `requirements/Portfolio Build Guide — Senior Developer.md` — how to build each step, with code.
- `requirements/Portfolio Build Plan — Next.js.md` — stack, routes, components, decisions.
- `requirements/design/*.dc.html` — the visual spec. `<style>` holds tokens/CSS; `<script type="text/x-dc">` holds page data and interaction logic. Do not edit these files.

## Progress tracking

`PROGRESS.md` is the source of truth for what's done. Read it at the start of a session.

Large tickets are split into subtasks (`T08.1`, `T08.2`…). `👤` marks steps that need the user; `⚠` marks plan fixes to apply in that step.

When a subtask or ticket is finished:

1. Tick the subtask. Tick the ticket only when all its subtasks are done and its "Done when" passes. Update **Status** and **Last updated**.
2. Add or extend the ticket's **Log** entry: what was done, the checks run and their results, and any deviations.
3. Handle the `⚠` notes under that step, and note it in the log.
4. Refresh **Ready now** in the Dependencies section (items whose `needs:` are all done), then rewrite **Next up** with the best of them (critical path first): concrete steps and how to check it.
5. End the reply by telling the user what's next.

## Styling conventions

- Tokens live in `app/globals.css`. Tailwind's default colours, breakpoints and animations are cleared, so only token utilities exist.
- Colours: `bg`, `surface`, `surface-2`, `fg` / `fg-2` / `fg-3` (the design's `--text*`), `muted`, `faint`, `line` / `line-2` / `line-3`, `header`, `glass`, `scrim`, `lime`, `cyan`, `pink`, `amber`, `violet`, `glow-*`, `spot`, `accent`, `accent-ink` (readable accent), `accent-glow`, `on-accent`.
- Breakpoints (min-width, 1px above the design's max-width queries): `xs` 381, `tab` 761, `aside` 960, `nav` 1001, `label` 1101, `clock` 1181. Use `max-nav:` for mobile-only.
- `.keep-dark` blocks stay dark in both themes: use tokens inside them, never `dark:`/`light:`.
- Animations: `animate-rise`, `animate-delay-N` (120ms steps), `reveal`, `grad-text`, `.glitch`. Add page-specific keyframes with their component, renamed if the name clashes (see PROGRESS.md).
- Neon colours are referenced by name (`Tone` in `lib/tone.ts`), never hex. Reuse `components/ui/` (`Button`, `Chip`…) before writing new styles.
- tailwind-merge drops an earlier `leading-*` when a later `text-[size]` is in the same `cn()`; use `text-[size]/[leading]` instead.
- `/styleguide` is a dev page. Add new UI pieces there to check them in both themes.

## Rules

- One ticket at a time; don't start the next one without the user.
- Run `npm run lint`, typecheck (`next typegen && tsc --noEmit`) and `npm run build` before calling a ticket done.
- Commit or push only when the user asks. Commit messages start with the ticket ID, e.g. `T07: add circle reveal to theme switch`.
- Follow the Definition of done in the implementation plan (tokens only, Server Components by default, reduced-motion path, keyboard access).
