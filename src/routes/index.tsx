import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ActionLink } from "@/components/ActionLink";
import { brand } from "@/lib/brand";
import { stays } from "@/data/stays";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elora Homes — Premium Short Stays in Bengaluru" },
      { name: "description", content: "Thoughtfully designed short stays in Bengaluru. Spaces styled for every story." },
      { property: "og:title", content: "Elora Homes — Spaces Styled for Every Story" },
      { property: "og:description", content: "Premium short stays in Bengaluru, hosted with genuine warmth and thoughtful detail." },
    ],
  }),
  component: Home,
});

const cozy = stays[0]!;
const golden = stays[1]!;
const storyImages = [...cozy.gallery.slice(1, 6), ...golden.gallery.slice(1, 6)];

function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso">
        <img src={cozy.gallery[0]} alt="The Cozy Corner at Elora Homes" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover motion-safe:animate-[heroZoom_18s_ease-out_forwards]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/25 to-espresso/35" />
        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-6 pb-16 md:px-10 md:pb-24 lg:px-16">
          <p className="eyebrow text-gold-pale">Bengaluru, India</p>
          <h1 className="mt-7 max-w-4xl text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.9] text-ivory">Spaces Styled<br />for Every Story.</h1>
          <div className="mt-10 flex items-end justify-between gap-8">
            <p className="max-w-sm text-sm leading-[1.9] font-light text-ivory/75">Thoughtfully designed homes for slow mornings, easy evenings and stays that feel personal.</p>
            <span className="hidden pb-1 text-[0.65rem] tracking-[0.25em] text-ivory/60 uppercase md:block">Scroll to explore ↓</span>
          </div>
          <div className="mt-9"><ActionLink to="/contact" variant="gold">Enquire</ActionLink></div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-40 lg:px-16">
          <Reveal><p className="eyebrow text-gold-pale">Elora Homes</p></Reveal>
          <Reveal delay={120}><p className="font-display text-[clamp(2.4rem,5vw,5.2rem)] leading-[1.02] font-light">A stay should feel less like checking in, and more like arriving somewhere that already feels yours.</p></Reveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="Featured Stays" title="Two homes." intro="Each with its own rhythm, character and way of making you want to stay a little longer." /></Reveal>
          <div className="mt-20 space-y-8 md:space-y-12">
            {[cozy, golden].map((stay, i) => (
              <article key={stay.slug} className="group relative min-h-[78svh] overflow-hidden bg-espresso">
                <img src={stay.gallery[0]} alt={`${stay.name} interior`} width={1600} height={1200} loading={i === 0 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/15 to-transparent" />
                <div className="relative flex min-h-[78svh] flex-col justify-between p-7 md:p-12 lg:p-16">
                  <div className="flex justify-between text-[0.65rem] tracking-[0.25em] text-ivory/65 uppercase"><span>0{i + 1}</span><span>{stay.location}</span></div>
                  <div className="max-w-2xl">
                    <p className="eyebrow text-gold-pale">{stay.subtitle}</p>
                    <h2 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] text-ivory">{stay.name}</h2>
                    <p className="mt-7 max-w-lg text-sm leading-[1.9] font-light text-ivory/75">{stay.description}</p>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.68rem] tracking-[0.15em] text-ivory/65 uppercase"><span>{stay.guests} guests</span><span>{stay.bedrooms} bedrooms</span><span>{stay.bathrooms} baths</span></div>
                    <div className="mt-9"><ActionLink to="/stays/$slug" params={{ slug: stay.slug }} variant="gold">Discover the home</ActionLink></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige">
        <div className="mx-auto grid max-w-7xl gap-0 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-10 lg:px-16">
          <div className="relative order-2 md:order-1"><div className="sticky top-0 flex min-h-[70svh] items-center py-12 md:h-screen md:py-20"><Reveal className="w-full overflow-hidden"><img src={cozy.gallery[1]} alt="Elora Homes interior detail" width={1200} height={1504} loading="lazy" className="aspect-[4/5] w-full object-cover md:aspect-[3/4]" /></Reveal></div></div>
          <div className="order-1 py-24 md:order-2 md:py-40 md:pl-16 lg:pl-24">
            <Reveal><p className="eyebrow text-gold">The Elora feeling</p><h2 className="mt-6 max-w-xl text-[clamp(2.8rem,5vw,5rem)] leading-[0.95] text-forest">Notice the light. Stay for the details.</h2></Reveal>
            <div className="mt-20 space-y-28 md:mt-32">
              {[["01", "Light", "Rooms shaped around the way Bengaluru light moves through a home."], ["02", "Texture", "Linen, wood, warm finishes and small details that make a space feel lived in."], ["03", "Ease", "Everything considered so the stay itself can feel effortless."]].map(([number, title, copy], i) => <Reveal key={number} delay={i * 80}><span className="text-xs tracking-[0.22em] text-gold uppercase">{number}</span><h3 className="mt-5 text-4xl text-forest md:text-5xl">{title}</h3><p className="mt-5 max-w-md text-sm leading-[1.9] font-light text-muted-foreground">{copy}</p></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-espresso px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal><div className="mb-14 flex items-end justify-between gap-8"><div><p className="eyebrow text-gold-pale">Inside Elora</p><h2 className="mt-5 max-w-2xl text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.95] text-ivory">A collection of quiet moments.</h2></div><span className="hidden text-[0.65rem] tracking-[0.22em] text-ivory/50 uppercase md:block">Scroll through</span></div></Reveal>
          <div className="grid gap-3 md:grid-cols-12 md:gap-5">{storyImages.map((src, i) => <Reveal key={i} delay={i * 60} className={`overflow-hidden ${i % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}`}><img src={src} alt="Elora Homes interior" width={1400} height={1100} loading="lazy" className={`w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.025] ${i % 3 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`} /></Reveal>)}</div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-7xl"><Reveal><SectionHeading eyebrow="Instagram" title="@elorahomesinn" intro="Follow the homes, the details and the moments between stays." align="center" /></Reveal>
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">{golden.gallery.slice(0, 6).map((src, i) => <Reveal key={i} delay={i * 80} className="overflow-hidden"><a href={brand.instagramUrl} target="_blank" rel="noreferrer" aria-label="Open Elora Homes on Instagram"><img src={src} alt="Elora Homes on Instagram" width={1200} height={1200} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]" /></a></Reveal>)}</div>
          <Reveal className="mt-12 text-center"><ActionLink href={brand.instagramUrl} variant="outline">View Instagram</ActionLink></Reveal>
        </div>
      </section>

      <section className="relative min-h-[75svh] overflow-hidden bg-espresso"><img src={golden.gallery[0]} alt="The Golden Hour at Elora Homes" width={1600} height={1200} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div aria-hidden className="absolute inset-0 bg-espresso/55" /><div className="relative mx-auto flex min-h-[75svh] max-w-7xl items-end px-6 py-20 md:px-10 md:py-28 lg:px-16"><Reveal><p className="eyebrow text-gold-pale">Elora Homes</p><h2 className="mt-6 max-w-3xl text-[clamp(3rem,7vw,7rem)] leading-[0.9] text-ivory">Spaces Styled for Every Story.</h2><div className="mt-10"><ActionLink to="/contact" variant="gold">Enquire</ActionLink></div></Reveal></div></section>
    </>
  );
}
