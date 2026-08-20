import { Reveal } from "@/components/Reveal";
import { ActionLink } from "@/components/ActionLink";
import type { Stay } from "@/data/stays";
import { cn } from "@/lib/utils";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Users, Bed, Bath } from "lucide-react";
import type { ReactNode } from "react";

function Spec({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-gold">
        {icon}
        <p className="font-display text-3xl leading-none font-light text-forest [font-variant-numeric:lining-nums]">{value}</p>
      </div>
      <p className="eyebrow mt-3 text-muted-foreground">{label}</p>
    </div>
  );
}

export function StayCard({ stay, index }: { stay: Stay; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <Reveal
      as="figure"
      className={cn(
        "grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24",
      )}
    >
      <div className={cn("overflow-hidden h-full flex items-center", flipped && "md:order-2")}>
        <ImageCarousel 
          images={stay.gallery} 
          alt={`${stay.name} interior`} 
          className="aspect-[3/4]"
          imageClassName="object-[50%_80%] transition-transform duration-[1400ms] ease-out hover:scale-[1.02]"
        />
      </div>

      <figcaption className={cn(flipped && "md:order-1")}>
        <p className="eyebrow text-gold">{stay.location}</p>
        <h3 className="mt-5 text-[clamp(2rem,3.5vw,3rem)] leading-[1.08] text-forest">{stay.name}</h3>
        <p className="mt-3 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
          Entire rental unit · {stay.subtitle}
        </p>
        <p className="mt-6 max-w-md text-sm leading-[1.9] font-light text-muted-foreground">
          {stay.description}
        </p>

        <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-y border-border py-8">
          <Spec icon={<Users className="w-5 h-5" />} label="Guests" value={String(stay.guests)} />
          <Spec icon={<Bed className="w-5 h-5" />} label={stay.bedrooms === 1 ? "Bedroom" : "Bedrooms"} value={String(stay.bedrooms)} />
          <Spec icon={<Bath className="w-5 h-5" />} label={stay.bathrooms === 1 ? "Bath" : "Baths"} value={String(stay.bathrooms)} />
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
          {stay.amenities.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <div className="mt-8 space-y-2 text-sm leading-[1.9] font-light text-muted-foreground">
          {stay.sleeping.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>

        <p className="mt-6 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
          {stay.houseRules.join(" · ")}
        </p>

        <div className="mt-10">
          <ActionLink to="/stays/$slug" params={{ slug: stay.slug }} variant="outline">
            Explore Stay
          </ActionLink>
        </div>
      </figcaption>
    </Reveal>
  );
}
