import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center border transition-[background-color,color,border-color] duration-500 ease-out eyebrow px-8 py-4";

const variants = {
  forest: "border-forest bg-forest text-ivory hover:bg-espresso hover:border-espresso",
  outline: "border-forest/30 text-forest hover:border-forest hover:bg-forest hover:text-ivory",
  onDark: "border-ivory/35 text-ivory hover:bg-ivory hover:text-forest hover:border-ivory",
  gold: "border-gold bg-gold text-espresso hover:bg-gold-warm hover:border-gold-warm",
} as const;

type Variant = keyof typeof variants;

export function ActionLink({
  to,
  href,
  variant = "outline",
  className,
  children,
  ...rest
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  [key: string]: any;
}) {
  const cls = cn(base, variants[variant], className);
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls} {...rest}>
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "forest",
  className,
  children,
  type = "submit",
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  type?: "submit" | "button";
}) {
  return (
    <button type={type} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
}
