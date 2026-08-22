import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "dark" ? "text-gold-pale" : "text-gold")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "mt-6 text-[clamp(2rem,4vw,3.5rem)] leading-[0.95]",
          tone === "dark" ? "text-ivory" : "text-forest",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 max-w-xl text-sm leading-[1.9] font-light",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-ivory/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
