import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BaseUiDemo } from "./BaseUiDemo";
import { ThemeFlip } from "./ThemeFlip";

// Dev page for checking tokens, fonts (T04/T05) and the base UI (T06).
// Available locally and on Vercel previews, never on production.
export const metadata: Metadata = { title: "Styleguide", robots: { index: false } };

const SURFACES = ["bg", "surface", "surface-2", "header", "glass", "scrim"] as const;
const TEXT = ["fg", "fg-2", "fg-3", "muted", "faint"] as const;
const LINES = ["line", "line-2", "line-3"] as const;
const NEON = ["lime", "cyan", "pink", "amber", "violet", "accent", "accent-ink"] as const;
const WEIGHTS = [300, 400, 500, 600, 650, 700, 750, 800, 900] as const;

function Swatch({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="size-10 shrink-0 rounded-lg border border-line-3"
        // Utility names map to the raw tokens; only fg-* are renamed (from --text-*).
        style={{ background: `var(--${name.replace(/^fg/, "text")})` }}
      />
      <code className="font-mono text-xs text-muted">{name}</code>
    </div>
  );
}

function Group({ title, names }: { title: string; names: readonly string[] }) {
  return (
    <section className="space-y-3">
      <h2 className="font-mono text-xs tracking-widest text-faint uppercase">{title}</h2>
      <div className="grid grid-cols-2 gap-3 tab:grid-cols-3 nav:grid-cols-6">
        {names.map((n) => (
          <Swatch key={n} name={n} />
        ))}
      </div>
    </section>
  );
}

export default function StyleguidePage() {
  if (process.env.VERCEL_ENV === "production") notFound();

  return (
    <main id="main" className="mx-auto max-w-6xl space-y-12 px-4 py-12 tab:px-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="glitch" data-text="Styleguide">
            Styleguide
          </span>
        </h1>
        <ThemeFlip />
      </header>

      <Group title="Surfaces" names={SURFACES} />
      <Group title="Text" names={TEXT} />
      <Group title="Lines" names={LINES} />
      <Group title="Neon" names={NEON} />

      <section className="space-y-3">
        <h2 className="font-mono text-xs tracking-widest text-faint uppercase">Archivo weights</h2>
        <div className="space-y-1">
          {WEIGHTS.map((w) => (
            <p key={w} className="text-2xl" style={{ fontWeight: w }}>
              {w} · Fullstack Developer — Salesforce, web, APIs, mobile
            </p>
          ))}
        </div>
        <p className="font-mono text-sm">
          JetBrains Mono · <span className="text-lime">const</span> ibnul = {"{"} role:{" "}
          <span className="text-amber">&apos;Fullstack Developer&apos;</span> {"}"};
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-mono text-xs tracking-widest text-faint uppercase">Effects</h2>
        <p className="grad-text text-5xl font-extrabold tracking-tighter">Gradient sweep</p>
        <div className="flex flex-wrap gap-6">
          <span className="animate-rise rounded-lg bg-surface px-3 py-2 animate-delay-2">rise</span>
          <span className="animate-blink font-mono text-accent-ink">▍blink</span>
          <span
            className="size-3 animate-ping rounded-full bg-lime [--c:var(--lime)]"
            aria-hidden
          />
        </div>
      </section>

      <BaseUiDemo />

      <section className="keep-dark rounded-2xl border border-line-2 bg-bg p-6 font-mono text-sm text-fg">
        <p className="text-muted">{"// .keep-dark stays dark in both themes"}</p>
        <p>
          <span className="text-pink">export const</span> ok ={" "}
          <span className="text-cyan">true</span>;
        </p>
      </section>
    </main>
  );
}
