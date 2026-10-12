import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { toneVar, type Tone } from "@/lib/tone";
import { SmartLink } from "./SmartLink";

type Common = {
  /** Single-colour border sweep (Work cards). Without it: Home's multicolour sweep. */
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

type AsArticle = Common & Omit<ComponentProps<"article">, keyof Common> & { href?: undefined };
type AsLink = Common & Omit<ComponentProps<"a">, keyof Common> & { href: string };

export type CardProps = AsArticle | AsLink;

// `group` lets children react to hover, e.g. an arrow with group-hover:translate-x-1.5.
export function cardClasses(tone?: Tone, className?: string) {
  return cn(
    "neon-card group flex flex-col rounded-[18px] p-7 text-fg no-underline hover:text-fg",
    tone && toneVar[tone],
    className,
  );
}

export function Card(props: CardProps) {
  if (props.href !== undefined) {
    const { tone, className, ...rest } = props;
    return <SmartLink data-tone={tone} className={cardClasses(tone, className)} {...rest} />;
  }

  const { tone, className, ...rest } = props;
  return <article data-tone={tone} className={cardClasses(tone, className)} {...rest} />;
}
