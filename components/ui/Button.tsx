import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "ghost";

type Common = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type AsButton = Common & Omit<ComponentProps<"button">, keyof Common> & { href?: undefined };
type AsLink = Common & Omit<ComponentProps<"a">, keyof Common> & { href: string };

export type ButtonProps = AsButton | AsLink;

const base = cn(
  "relative inline-flex min-h-[50px] cursor-pointer items-center justify-center gap-2.5 overflow-hidden",
  "rounded-xl px-[22px] text-[15px] font-[650] no-underline",
  "transition-[translate,box-shadow,color,border-color] duration-300 ease-out hover:-translate-y-[3px]",
  "after:pointer-events-none after:absolute after:inset-y-0 after:-left-[60%] after:w-[40%] after:-skew-x-20",
  "after:bg-linear-100 after:from-transparent after:via-shine after:to-transparent",
  "after:transition-[left] after:duration-600 after:ease-out hover:after:left-[130%]",
);

const variants: Record<ButtonVariant, string> = {
  primary: cn(
    "border border-accent-edge bg-accent text-on-accent shadow-[0_10px_30px_-10px_var(--accent)]",
    "hover:text-on-accent hover:shadow-[0_0_28px_var(--accent),0_0_60px_-10px_var(--accent)]",
  ),
  ghost: cn(
    "border border-line-3 bg-fg/3 text-fg",
    "hover:border-cyan hover:text-cyan hover:shadow-[0_0_22px_var(--glow-cyan)]",
  ),
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant, className, href, children, ...rest } = props;
    const classes = buttonClasses(variant, className);
    const isPage = href.startsWith("/") && rest.download === undefined && rest.target === undefined;

    return isPage ? (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    ) : (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant, className, children, type = "button", ...rest } = props;
  return (
    <button type={type} className={buttonClasses(variant, className)} {...rest}>
      {children}
    </button>
  );
}
