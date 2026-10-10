import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { TONES } from "@/lib/tone";

// Every base UI piece in its variants, for checking against the canvas.
// Shown on /styleguide and, until T13, on the homepage.

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-mono text-xs tracking-widest text-faint uppercase">{title}</h3>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

export function BaseUiDemo() {
  return (
    <section aria-labelledby="ui-demo" className="space-y-8">
      <h2 id="ui-demo" className="text-2xl font-extrabold tracking-tight">
        Base UI · T06.1
      </h2>

      <Row title="Button · links">
        <Button href="/#contact">Start a conversation</Button>
        <Button href="/styleguide" variant="ghost">
          View styleguide
        </Button>
        <Button href="/styleguide" variant="ghost" className="font-mono text-sm">
          git log --career
        </Button>
      </Row>

      <Row title="Button · buttons, external, download">
        <Button>Primary button</Button>
        <Button variant="ghost">Ghost button</Button>
        <Button href="https://github.com/ibnul42" target="_blank" rel="noopener" variant="ghost">
          GitHub ↗
        </Button>
      </Row>

      <Row title="Chip · tag (Home: glow, on surface)">
        {TONES.map((t) => (
          <Chip key={t} tone={t} glow className="border border-line-2 bg-surface">
            {t}
          </Chip>
        ))}
      </Row>

      <Row title="Chip · tag (Work cards: no glow)">
        {TONES.map((t) => (
          <Chip key={t} tone={t}>
            {t}
          </Chip>
        ))}
      </Row>

      <Row title="Chip · tool">
        {["React.js", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Apex", "Flutter"].map(
          (t) => (
            <Chip key={t} size="tool">
              {t}
            </Chip>
          ),
        )}
      </Row>
    </section>
  );
}
