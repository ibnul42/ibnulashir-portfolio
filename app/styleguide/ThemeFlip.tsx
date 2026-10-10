"use client";

// Temporary: flips the <html> theme class by hand so the tokens can be checked.
// Replaced by the real ThemeToggle in T07.
export function ThemeFlip() {
  const flip = () => {
    const root = document.documentElement;
    const toLight = root.classList.contains("theme-dark");
    root.classList.toggle("theme-dark", !toLight);
    root.classList.toggle("theme-light", toLight);
  };

  return (
    <button
      type="button"
      onClick={flip}
      className="min-h-11 rounded-xl border border-line-3 bg-surface-2 px-4 font-mono text-sm hover:border-accent-ink"
    >
      Flip theme
    </button>
  );
}
