import Link from "next/link";
import { BaseUiDemo } from "./styleguide/BaseUiDemo";
import { ThemeFlip } from "./styleguide/ThemeFlip";

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-6xl space-y-12 px-4 py-12 tab:px-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-extrabold tracking-tight">Ibnul Ashir</h1>
          <p className="font-mono text-sm text-muted">
            Portfolio under construction ·{" "}
            <Link href="/styleguide" className="text-accent-ink underline">
              /styleguide
            </Link>
          </p>
        </div>
        <ThemeFlip />
      </header>

      <BaseUiDemo />
    </main>
  );
}
