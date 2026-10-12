import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { toneText, type Tone } from "@/lib/tone";

type SectionHeadingProps = {
  /** The mono "command" above the title, e.g. "$ git log --career". */
  eyebrow: string;
  tone: Tone;
  /** Wrap the highlighted word in <span className="grad-text">. */
  title: ReactNode;
  /** h2 by default; pages that open with this heading pass "h1". */
  as?: "h1" | "h2";
  id?: string;
  /** Shown on the right, aligned to the bottom (e.g. a link to the full page). */
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  tone,
  title,
  as: Heading = "h2",
  id,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex reveal flex-wrap items-end justify-between gap-5", className)}>
      <div>
        <p className={cn("mb-3.5 font-mono text-[13px]", toneText[tone])}>{eyebrow}</p>
        <Heading
          id={id}
          className="text-[clamp(36px,5vw,70px)]/none font-extrabold tracking-[-0.04em]"
        >
          {title}
        </Heading>
      </div>
      {action}
    </div>
  );
}
