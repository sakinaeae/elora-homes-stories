import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ActionLink } from "@/components/ActionLink";
import { ImageCarousel } from "@/components/ImageCarousel";
import { brand } from "@/lib/brand";
import { getInstagramPosts, type InstagramPost } from "@/lib/instagram";
import { stays } from "@/data/stays";
import heroImage from "@/assets/hero.jpg";
import stayOne from "@/assets/cozy-corner-1.jpg";
import stayTwo from "@/assets/golden-hour-1.jpg";
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

const storyImages = [
  { src: "/elora-inside/inside-living-wide.jpg", alt: "Elora Homes living room with cinema setup" },
  { src: "/elora-inside/inside-bedroom-warm.jpg", alt: "Warmly styled Elora Homes bedroom" },
  { src: "/elora-inside/inside-living-sofa.jpg", alt: "Elora Homes lounge with a round coffee table" },
  { src: "/elora-inside/inside-bedroom-red.jpg", alt: "Elora Homes bedroom with layered textiles" },
  { src: "/elora-inside/inside-dining-detail.jpg", alt: "Elora Homes dining and art detail" },
  { src: "/elora-inside/inside-lounge-detail.jpg", alt: "Elora Homes lounge corner detail" },
  { src: "/elora-inside/inside-kitchen.jpg", alt: "Elora Homes kitchen" },
  { src: "/elora-inside/inside-bedroom-neutral.jpg", alt: "Elora Homes neutral bedroom" },
  { src: "/elora-inside/inside-sofa-soft.jpg", alt: "Elora Homes soft seating area" },
];

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
    void getInstagramPosts()
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
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/65 via-espresso/40 to-espresso/90" />
        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-6 pb-12 md:px-10 md:pb-16 lg:px-16">
          <div className="max-w-4xl">
            <p className="eyebrow text-gold-pale">Bengaluru, India</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[0.95] text-ivory drop-shadow-[0_3px_20px_rgba(0,0,0,0.35)]">
              Spaces Styled
              <br />
              for Every Story.
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-[1.9] font-light text-ivory/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              Thoughtfully designed homes for slow mornings, easy evenings and stays that feel personal.
            </p>
            <div className="mt-7">
              <ActionLink to="/contact" variant="gold">Enquire</ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-16 lg:px-16">
          <Reveal><p className="eyebrow text-gold-pale">Elora Homes</p></Reveal>
          <Reveal delay={120}>
            <p className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.08] font-light">
              A stay should feel less like checking in, and more like arriving somewhere that already feels yours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-10 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Featured Stays" title="Two homes, quietly considered." />
          </Reveal>
          <div className="mt-8 grid gap-6 lg:gap-8 md:grid-cols-2">
            {stays.slice(0, 2).map((stay, i) => (
              <article key={stay.slug} className="group relative aspect-[3/4] overflow-hidden bg-espresso rounded-xl">
                <div className="absolute inset-0">
                  <ImageCarousel 
                    images={stay.gallery} 
                    alt={`${stay.name} interior`} 
                    priorityFirst={i === 0}
                    className="h-full"
                    imageClassName="object-[50%_80%] transition-transform duration-[1800ms] ease-out group-hover:scale-[1.01]"
                  />
                </div>
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/50 to-espresso/10 pointer-events-none" />
                <div className="relative flex h-full flex-col justify-end p-8 lg:p-12 pointer-events-none">
                  <div className="max-w-2xl drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)] pointer-events-auto">
                    <p className="eyebrow text-gold-pale">{stay.subtitle}</p>
                    <h2 className="mt-3 text-[clamp(2rem,3vw,3.5rem)] leading-[0.95] text-ivory">{stay.name}</h2>
                    <p className="mt-4 max-w-lg text-xs leading-[1.8] font-light text-ivory/90 line-clamp-2">{stay.description}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.6rem] tracking-[0.15em] text-ivory/80 uppercase"><span>{stay.guests} guests</span><span>{stay.bedrooms} bedrooms</span><span>{stay.bathrooms} baths</span></div>
                    <div className="mt-6"><ActionLink to="/stays/$slug" params={{ slug: stay.slug }} variant="gold">Explore stay</ActionLink></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-espresso px-6 py-10 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-6">
              <p className="eyebrow text-gold-pale">Inside Elora</p>
              <h2 className="mt-3 max-w-2xl text-[clamp(1.85rem,3.5vw,2.75rem)] leading-[1] text-ivory">
                A collection of quiet moments.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {storyImages.map(({ src, alt }, i) => (
              <Reveal key={src} delay={i * 50} className="overflow-hidden bg-espresso">
                <img
                  src={src}
                  alt={alt}
                  width={1536}
                  height={2048}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-10 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Instagram"
              title="@elorahomesinn"
              intro="Follow the homes, the details and the moments between stays."
              align="center"
            />
          </Reveal>

          {instagramPosts.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
              {instagramPosts.map((post) => (
                <Reveal key={post.id} className="group relative overflow-hidden bg-espresso/5">
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open Instagram post: ${post.caption || "Elora Homes post"}`}
                    className="block overflow-hidden"
                  >
                    <img
                      src={post.mediaUrl}
                      alt={post.caption ?? "Elora Homes Instagram post"}
                      width={1200}
                      height={1200}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="line-clamp-2 text-xs font-light text-ivory">
                        {post.caption || "View on Instagram"}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="mx-auto mt-16 max-w-xl border border-forest/15 bg-beige/30 px-8 py-14 text-center">
              <p className="font-display text-2xl font-light text-forest">
                @elorahomesinn
              </p>
              <p className="mt-4 text-xs leading-relaxed font-light text-muted-foreground">
                Automatic Instagram Integration Ready. Provide your Meta/Instagram Access Token (`INSTAGRAM_ACCESS_TOKEN`) in environment variables to sync live posts automatically.
              </p>
            </Reveal>
          )}

          <Reveal className="mt-12 text-center">
            <ActionLink href={brand.instagramUrl} target="_blank" variant="outline">
              Visit @elorahomesinn
            </ActionLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
