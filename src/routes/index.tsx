import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ActionLink } from "@/components/ActionLink";
import { brand } from "@/lib/brand";
import { loadInstagramPosts, type InstagramPost } from "@/lib/instagram";
import { stays } from "@/data/stays";
import heroImage from "@/assets/hero.jpg";
import stayOne from "@/assets/cozy-corner-1.jpg";
import cozyTwo from "@/assets/cozy-corner-2.jpg";
import stayTwo from "@/assets/golden-hour-1.jpg";
import goldenTwo from "@/assets/golden-hour-2.jpg";
import galleryBed from "@/assets/gallery-bed.jpg";
import galleryBedTwo from "@/assets/gallery-bed-two.jpg";
import galleryLounge from "@/assets/gallery-lounge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elora Homes — Premium Short Stays in Bengaluru" },
      {
        name: "description",
        content: "Thoughtfully designed short stays in Bengaluru. Spaces Styled for Every Story.",
      },
      { property: "og:title", content: "Elora Homes — Spaces Styled for Every Story." },
      {
        property: "og:description",
        content: "Premium short stays in Bengaluru, hosted with genuine warmth and thoughtful detail.",
      },
    ],
  }),
  component: Home,
});

const heroSlides = [
  { src: heroImage, alt: "Warm Elora Homes living room" },
  { src: stayOne, alt: "The Cozy Corner bedroom" },
  { src: galleryLounge, alt: "Elora Homes lounge" },
  { src: stayTwo, alt: "The Golden Hour bedroom" },
  { src: galleryBed, alt: "Elora Homes bedroom" },
  { src: galleryBedTwo, alt: "Elora Homes second bedroom" },
];

const storyImages = [galleryLounge, galleryBed, galleryBedTwo, cozyTwo, goldenTwo];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;
    void loadInstagramPosts()
      .then((posts) => {
        if (!cancelled) setInstagramPosts(posts);
      })
      .catch(() => {
        if (!cancelled) setInstagramPosts([]);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1280}
            fetchPriority={index === 0 ? "high" : "auto"}
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1800ms] ease-out motion-safe:scale-[1.035] ${
              index === activeSlide ? "opacity-100 motion-safe:scale-100" : "opacity-0"
            }`}
          />
        ))}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/35 to-espresso/20" />
        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-6 pb-12 md:px-10 md:pb-20 lg:px-16">
          <div className="max-w-4xl">
            <p className="eyebrow text-gold-pale">Bengaluru, India</p>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.9] text-ivory drop-shadow-[0_3px_20px_rgba(0,0,0,0.35)]">
              Spaces Styled
              <br />
              for Every Story.
            </h1>
            <p className="mt-8 max-w-sm text-sm leading-[1.9] font-light text-ivory/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              Thoughtfully designed homes for slow mornings, easy evenings and stays that feel personal.
            </p>
            <div className="mt-9">
              <ActionLink to="/contact" variant="gold">Enquire</ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-40 lg:px-16">
          <Reveal><p className="eyebrow text-gold-pale">Elora Homes</p></Reveal>
          <Reveal delay={120}>
            <p className="font-display text-[clamp(2.4rem,5vw,5.2rem)] leading-[1.02] font-light">
              A stay should feel less like checking in, and more like arriving somewhere that already feels yours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Featured Stays" title="Two homes, quietly considered." />
          </Reveal>
          <div className="mt-20 space-y-8 md:space-y-12">
            {[{ stay: stays[0]!, image: stayOne, number: "01" }, { stay: stays[1]!, image: stayTwo, number: "02" }].map(({ stay, image, number }, i) => (
              <article key={stay.slug} className="group relative min-h-[78svh] overflow-hidden bg-espresso">
                <img src={image} alt={`${stay.name} interior`} width={1600} height={1200} loading={i === 0 ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.035]" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/50 to-espresso/10" />
                <div className="relative flex min-h-[78svh] flex-col justify-between p-7 md:p-12 lg:p-16">
                  <div className="flex justify-between text-[0.65rem] tracking-[0.25em] text-ivory/85 uppercase"><span>{number}</span><span>{stay.location}</span></div>
                  <div className="max-w-2xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
                    <p className="eyebrow text-gold-pale">{stay.subtitle}</p>
                    <h2 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] text-ivory">{stay.name}</h2>
                    <p className="mt-7 max-w-lg text-sm leading-[1.9] font-light text-ivory/90">{stay.description}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.68rem] tracking-[0.15em] text-ivory/80 uppercase"><span>{stay.guests} guests</span><span>{stay.bedrooms} bedrooms</span><span>{stay.bathrooms} baths</span></div>
                    <div className="mt-9"><ActionLink to="/stays/$slug" params={{ slug: stay.slug }} variant="gold">Discover the home</ActionLink></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14"><p className="eyebrow text-gold-pale">Inside Elora</p><h2 className="mt-5 max-w-2xl text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.95] text-ivory">A collection of quiet moments.</h2></div>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-12 md:gap-5">
            {storyImages.map((src, i) => (
              <Reveal key={i} delay={i * 70} className={`overflow-hidden ${i === 0 || i === 4 ? "md:col-span-7" : "md:col-span-5"}`}>
                <img src={src} alt="Elora Homes interior" width={1400} height={1100} loading="lazy" className={`w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.025] ${i === 0 || i === 4 ? "aspect-[16/10]" : "aspect-[4/5]"}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="Instagram" title="@elorahomesinn" intro="Follow the homes, the details and the moments between stays." align="center" /></Reveal>
          {instagramPosts.length > 0 ? (
            <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
              {instagramPosts.map((post) => (
                <Reveal key={post.id} className="overflow-hidden">
                  <a href={post.permalink} target="_blank" rel="noreferrer" aria-label="Open this Elora Homes Instagram post">
                    <img src={post.mediaUrl} alt={post.caption ?? "Elora Homes Instagram post"} width={1200} height={1200} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]" />
                  </a>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mx-auto mt-16 max-w-xl border border-forest/15 px-8 py-12 text-center">
              <p className="text-sm leading-[1.9] font-light text-muted-foreground">New Elora Homes moments will appear here as soon as the Instagram connection is enabled.</p>
            </Reveal>
          )}
          <Reveal className="mt-12 text-center"><ActionLink href={brand.instagramUrl} variant="outline">Visit @elorahomesinn</ActionLink></Reveal>
        </div>
      </section>
    </>
  );
}
