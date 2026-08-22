import { createFileRoute, notFound } from "@tanstack/react-router";
import { stays } from "@/data/stays";
import { brand } from "@/lib/brand";
import { Reveal } from "@/components/Reveal";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ActionLink, ActionButton } from "@/components/ActionLink";
import { 
  Users, Bed, Bath, 
  MapPin, Phone, Mail, MessageCircle, Calendar
} from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/stays/$slug")({
  loader: ({ params }) => {
    const stay = stays.find((s) => s.slug === params.slug);
    if (!stay) throw notFound();
    return stay;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.name} — Elora Homes` },
      { name: "description", content: loaderData.description },
    ],
  }),
  component: StayDetail,
});

function Spec({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 text-gold">
        {icon}
        <p className="font-display text-3xl leading-none font-light text-forest [font-variant-numeric:lining-nums]">
          {value}
        </p>
      </div>
      <p className="eyebrow mt-3 text-muted-foreground">{label}</p>
    </div>
  );
}

function StayDetail() {
  const stay = Route.useLoaderData();

  const whatsappLink = `https://wa.me/${brand.phone.replace(/[^0-9]/g, "")}?text=Hi, I would like to inquire about ${stay.name}.`;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 md:px-10 md:pt-40 md:pb-16 lg:px-16">
        <Reveal>
          <p className="eyebrow text-gold flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {stay.location}
          </p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-forest drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            {stay.name}
          </h1>
          <p className="mt-4 text-sm tracking-[0.16em] text-muted-foreground uppercase">
            Entire rental unit · {stay.subtitle}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 md:pb-16 lg:px-16">
        <Reveal delay={100} className="w-full">
          <ImageCarousel 
            images={stay.airbnbGallery || stay.gallery} 
            alt={stay.name}
            columns={2}
            className="rounded-lg overflow-hidden"
            imageClassName="aspect-[3/4]"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:px-10 md:pb-16 lg:px-16">
        <div className="grid gap-16 md:grid-cols-[1fr_380px] lg:gap-24">
          <div className="space-y-16">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-forest">About this space</h2>
              <p className="mt-6 max-w-2xl text-sm leading-[1.9] font-light text-muted-foreground">
                {stay.description}
              </p>
            </Reveal>

            <Reveal>
              <div className="grid max-w-md grid-cols-3 gap-6 border-y border-border py-8">
                <Spec icon={<Users className="w-5 h-5" />} label="Guests" value={String(stay.guests)} />
                <Spec icon={<Bed className="w-5 h-5" />} label={stay.bedrooms === 1 ? "Bedroom" : "Bedrooms"} value={String(stay.bedrooms)} />
                <Spec icon={<Bath className="w-5 h-5" />} label={stay.bathrooms === 1 ? "Bath" : "Baths"} value={String(stay.bathrooms)} />
              </div>
            </Reveal>

            <Reveal>
              <h3 className="eyebrow text-gold">Sleeping arrangements</h3>
              <div className="mt-6 space-y-3 text-sm leading-[1.9] font-light text-muted-foreground">
                {stay.sleeping.map((s) => (
                  <p key={s} className="flex items-center gap-3">
                    <Bed className="w-4 h-4 text-gold/70" />
                    {s}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h3 className="eyebrow text-gold">What this place offers</h3>
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm leading-[1.9] font-light text-muted-foreground">
                {stay.amenities.map((a) => (
                  <li key={a} className="w-full sm:w-[calc(50%-2rem)] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h3 className="eyebrow text-gold">House Rules</h3>
              <p className="mt-6 text-[0.75rem] tracking-[0.16em] text-muted-foreground uppercase leading-relaxed">
                {stay.houseRules.join(" · ")}
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <div className="sticky top-32 space-y-8 bg-beige/30 border border-forest/15 p-8 md:p-10">
              <div>
                <p className="font-display text-2xl text-forest">Ready to book?</p>
                <p className="mt-3 text-xs leading-[1.8] font-light text-muted-foreground">
                  Check live availability and book your stay securely on Airbnb. 
                  Or reach out directly for special requests.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href={stay.listingUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full group inline-flex items-center justify-center gap-3 border px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-500 border-forest bg-forest text-ivory hover:bg-espresso hover:border-espresso"
                >
                  <Calendar className="w-4 h-4" />
                  Book on Airbnb
                </a>
                
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full group inline-flex items-center justify-center gap-3 border px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-500 border-forest/30 text-forest hover:bg-forest hover:text-ivory"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={`tel:${brand.phoneHref}`}
                    className="w-full group inline-flex items-center justify-center gap-2 border px-4 py-4 text-[0.65rem] tracking-widest uppercase transition-colors duration-500 border-forest/30 text-forest hover:bg-forest hover:text-ivory"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </a>
                  <a 
                    href={`mailto:${brand.email}?subject=Inquiry about ${stay.name}`}
                    className="w-full group inline-flex items-center justify-center gap-2 border px-4 py-4 text-[0.65rem] tracking-widest uppercase transition-colors duration-500 border-forest/30 text-forest hover:bg-forest hover:text-ivory"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </div>

                <a 
                  href={stay.listingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full group inline-flex items-center justify-center gap-2 border px-4 py-4 text-[0.65rem] tracking-widest uppercase transition-colors duration-500 border-forest/30 text-forest hover:bg-forest hover:text-ivory"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  View Location on Airbnb
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
