import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ActionLink } from "@/components/ActionLink";

import detailImage from "@/assets/detail-linen.jpg";
import stayOne from "@/assets/golden-hour-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elora Homes" },
      {
        name: "description",
        content:
          "Elora Homes creates short-stay experiences that feel genuinely personal — spaces where travellers arrive as guests and leave as friends.",
      },
      { property: "og:title", content: "About Elora Homes" },
      {
        property: "og:description",
        content: "Genuine warmth, thoughtful detail, warm luxury and local connection.",
      },
    ],
  }),
  component: AboutPage,
});



function AboutPage() {
  return (
    <>
      {/* 1. ABOUT HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-8 md:px-10 md:pt-40 md:pb-12 lg:px-16">
        <Reveal>
          <h1 className="max-w-4xl text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-forest">
            A home, thoughtfully considered.
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-[1.9] font-light text-muted-foreground">
            Elora Homes creates short-stay experiences that feel genuinely personal — spaces where travellers arrive as guests and leave as friends.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <Reveal className="overflow-hidden rounded-sm">
          <video
            src="/animation/1785778053406002.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="mx-auto h-auto max-h-[85vh] w-full object-contain"
          />
        </Reveal>
      </section>

      {/* 2. THE ELORA STORY (Editorial Asymmetrical) */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] lg:gap-24 items-start">
          <div className="md:pt-16 lg:pt-20">
            <Reveal delay={100}>
              <p className="eyebrow text-gold">The Elora Story</p>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-forest max-w-2xl">
                We are a small Bengaluru studio that designs, styles and hosts every home ourselves.
              </h2>
              <div className="mt-12 flex flex-col gap-12 sm:flex-row sm:gap-16">
                <p className="text-sm leading-loose font-light text-muted-foreground flex-1">
                  We host with heart, we finish with care, and we keep our spaces quiet enough that the stay itself becomes the memory.
                </p>
                <div className="hidden sm:block w-[1px] bg-forest/10" />
                <p className="text-sm leading-loose font-light text-muted-foreground flex-1">
                  Every image should make a guest feel they have already arrived. Golden-hour light, wide establishing views and intimate detail.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <img 
              src={detailImage} 
              alt="Linen and brass detail" 
              className="aspect-[4/5] w-full object-cover" 
            />
          </Reveal>
        </div>
      </section>

      {/* 5. CLOSING SECTION */}
      <section className="relative overflow-hidden bg-forest text-center px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="relative z-10 mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-ivory">
              A world where every overnight stay feels like the best part of the journey.
            </h2>
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <ActionLink to="/stays" variant="onDark">
                Explore the Stays
              </ActionLink>
              <ActionLink to="/contact" variant="outline" className="border-ivory/30 text-ivory/80 hover:bg-ivory hover:text-forest hover:border-ivory">
                Enquire
              </ActionLink>
            </div>
          </Reveal>
        </div>
        
        {/* Subtle background image */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
           <img src={stayOne} className="w-full h-full object-cover mix-blend-overlay grayscale" alt="" />
        </div>
      </section>
    </>
  );
}
