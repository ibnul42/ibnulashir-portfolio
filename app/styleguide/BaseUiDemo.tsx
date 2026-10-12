import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { TONES, toneText } from "@/lib/tone";

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

      <h2 className="pt-6 text-2xl font-extrabold tracking-tight">Base UI · T06.2</h2>

      <SectionHeading
        eyebrow="$ git log --career --since=2019"
        tone="cyan"
        title={
          <>
            Career <span className="grad-text">log</span>
          </>
        }
        action={
          <Button href="/styleguide" variant="ghost" className="font-mono text-sm">
            git log --career
          </Button>
        }
      />

      <SectionHeading
        eyebrow="$ cat stack.layers"
        tone="pink"
        title={
          <>
            The whole stack,
            <br />
            <span className="grad-text">layer by layer.</span>
          </>
        }
      />

      <Row title="Card · Home (multicolour sweep, link)">
        <div className="grid w-full gap-5 tab:grid-cols-2">
          <DemoCard href="/styleguide" tags={["salesforce", "backend"]} />
          <DemoCard tags={["frontend"]} />
        </div>
      </Row>

      <Row title="Card · Work (one tone each)">
        <div className="grid w-full gap-5 tab:grid-cols-3">
          {(["cyan", "pink", "amber"] as const).map((t) => (
            <Card key={t} tone={t} className="min-h-[220px] gap-3.5">
              <span className={cn("font-mono text-sm font-semibold", toneText[t])}>{t}</span>
              <h3 className="text-2xl/[1.15] font-[750] tracking-[-0.02em]">Project title</h3>
              <p className="text-fg-2">Hover me: the border sweeps in this card&apos;s tone.</p>
            </Card>
          ))}
        </div>
      </Row>
    </section>
  );
}

const TAG_TONE = { salesforce: "cyan", frontend: "lime", backend: "amber" } as const;

function DemoCard({ href, tags }: { href?: string; tags: (keyof typeof TAG_TONE)[] }) {
  const body = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-sm font-semibold text-accent-ink">
          salesforce-integrations/
        </span>
        <svg
          aria-hidden
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-350 group-hover:translate-x-[5px] group-hover:-translate-y-[5px]"
        >
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      </div>
      <span className="font-mono text-xs text-muted">Twinforce · 2026</span>
      <h3 className="text-2xl/[1.15] font-[750] tracking-[-0.02em]">
        Salesforce automation &amp; integrations
      </h3>
      <p className="text-[15.5px]/[1.65] text-fg-2">
        Apex services and Lightning Web Components that automate client processes, plus integrations
        with outside systems.
      </p>
      <span className="mt-auto flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <Chip key={t} tone={TAG_TONE[t]} glow>
            {t}
          </Chip>
        ))}
      </span>
    </>
  );

  return href ? (
    <Card href={href} className="min-h-[290px] gap-4">
      {body}
    </Card>
  ) : (
    <Card className="min-h-[290px] gap-4">{body}</Card>
  );
}
