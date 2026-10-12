export const TONES = ["lime", "cyan", "pink", "amber", "violet"] as const;
export type Tone = (typeof TONES)[number];

export const toneBg: Record<Tone, string> = {
  lime: "bg-lime",
  cyan: "bg-cyan",
  pink: "bg-pink",
  amber: "bg-amber",
  violet: "bg-violet",
};

export const toneText: Record<Tone, string> = {
  lime: "text-lime",
  cyan: "text-cyan",
  pink: "text-pink",
  amber: "text-amber",
  violet: "text-violet",
};

export const toneVar: Record<Tone, string> = {
  lime: "[--tone:var(--lime)]",
  cyan: "[--tone:var(--cyan)]",
  pink: "[--tone:var(--pink)]",
  amber: "[--tone:var(--amber)]",
  violet: "[--tone:var(--violet)]",
};

export const toneGlow: Record<Tone, string> = {
  lime: "shadow-[0_0_8px_var(--lime)]",
  cyan: "shadow-[0_0_8px_var(--cyan)]",
  pink: "shadow-[0_0_8px_var(--pink)]",
  amber: "shadow-[0_0_8px_var(--amber)]",
  violet: "shadow-[0_0_8px_var(--violet)]",
};
