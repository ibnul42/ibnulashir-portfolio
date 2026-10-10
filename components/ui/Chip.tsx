import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { toneBg, toneGlow, type Tone } from "@/lib/tone";

type ChipProps = ComponentProps<"span"> & {
  /** tag = small label on cards and logs; tool = larger stack/tool pill. */
  size?: "tag" | "tool";
  /** Shows a coloured square before the label. */
  tone?: Tone;
  /** Adds a neon glow to the square (Home uses it, Work doesn't). */
  glow?: boolean;
};

const sizes = {
  tag: "gap-1.5 rounded-md px-[9px] py-1 text-[11px] text-fg-2",
  tool: "gap-2 rounded-lg border border-line-2 px-3 py-[7px] text-[12.5px]",
};

// Static label. The pressable skill-filter chips are a separate component (T27).
export function Chip({
  size = "tag",
  tone,
  glow = false,
  className,
  children,
  ...rest
}: ChipProps) {
  return (
    <span
      className={cn("inline-flex items-center bg-surface-2 font-mono", sizes[size], className)}
      {...rest}
    >
      {tone && (
        <span
          aria-hidden
          className={cn("size-[7px] shrink-0 rounded-[2px]", toneBg[tone], glow && toneGlow[tone])}
        />
      )}
      {children}
    </span>
  );
}
