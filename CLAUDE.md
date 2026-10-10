@AGENTS.md

# Ibnul Ashir portfolio

Next.js 16.4 portfolio built ticket by ticket from the plans in `requirements/`:

- `requirements/Portfolio Implementation Plan.md` — the 41 tickets (T01–T41): files, dependencies, "done when".
- `requirements/Portfolio Build Guide — Senior Developer.md` — how to build each step, with code.
- `requirements/Portfolio Build Plan — Next.js.md` — stack, routes, components, decisions.
- `requirements/design/*.dc.html` — the visual spec. `<style>` holds tokens/CSS; `<script type="text/x-dc">` holds page data and interaction logic. Do not edit these files.

## Progress tracking

`PROGRESS.md` is the source of truth for what's done. Read it at the start of a session.

When a ticket is finished (its "Done when" check passes):

1. Tick it in the ticket list and update **Status** and **Last updated**.
2. Add a **Log** entry: what was done, the checks run and their results, and any deviations or notes.
3. Tick any **Plan adjustments** that were handled.
4. Rewrite **Next up** with the next ticket whose dependencies are all done: concrete steps and its "Done when".
5. End the reply by telling the user what's next.

## Rules

- One ticket at a time; don't start the next one without the user.
- Run `npm run lint`, typecheck (`next typegen && tsc --noEmit`) and `npm run build` before calling a ticket done.
- Commit or push only when the user asks. Commit messages start with the ticket ID, e.g. `T07: add circle reveal to theme switch`.
- Follow the Definition of done in the implementation plan (tokens only, Server Components by default, reduced-motion path, keyboard access).
