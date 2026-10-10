import Link from "next/link";

// Placeholder until the real Home page (T13).
export default function Home() {
  return (
    <main id="main" className="grid min-h-dvh place-content-center gap-4 p-4 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight">Ibnul Ashir</h1>
      <p className="font-mono text-sm text-muted">Portfolio under construction.</p>
      <Link href="/styleguide" className="font-mono text-sm text-accent-ink underline">
        /styleguide
      </Link>
    </main>
  );
}
