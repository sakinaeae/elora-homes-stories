import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ActionLink } from "@/components/ActionLink";
import { brand } from "@/lib/brand";
import heroImage from "@/assets/hero.jpg";
import detailImage from "@/assets/detail-linen.jpg";
import stayOne from "@/assets/golden-hour-2.jpg";

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
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 md:px-10 md:pt-40 md:pb-16 lg:px-16">
        <Reveal>
          <p className="eyebrow text-gold">About Elora</p>
          <h1 className="mt-8 max-w-4xl text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-forest">
            Spaces Styled for Every Story.
          </h1>
        </Reveal>
      </section>

      <Reveal className="overflow-hidden">
        <img
          src={heroImage}
          alt="An Elora Homes suite at golden hour"
          width={1920}
          height={1280}
          className="h-[55vh] w-full object-cover md:h-[80vh]"
        />
      </Reveal>

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold">Our Mission</p>
            <div className="rule-gold mt-8" />
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-[1.02] font-light text-forest">
              To create short-stay experiences that feel genuinely personal — spaces where travellers
              arrive as guests and leave as friends.
            </p>
            <p className="mt-10 max-w-lg text-sm leading-[1.9] font-light text-muted-foreground">
              We are a small Bengaluru studio that designs, styles and hosts every home ourselves.
              Natural light, warm neutrals, linen and wood; colour used only where it earns its place.
              Nothing loud, nothing left to chance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: `url(${brand.textureHousesForest})`, backgroundSize: "300px auto" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-10 md:py-16 lg:gap-20 lg:px-16">
          <Reveal>
            <img
              src={detailImage}
              alt="Linen and brass detail"
              width={1200}
              height={1504}
              loading="lazy"
              className="aspect-3/4 w-full object-cover"
            />
          </Reveal>
          <SectionHeading
            eyebrow="Our Vision"
            tone="dark"
            title="A world where every overnight stay feels like the best part of the journey."
            intro="We host with heart, we finish with care, and we keep our spaces quiet enough that the stay itself becomes the memory."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-10 md:py-16 lg:gap-20 lg:px-16">
        <div>
          <SectionHeading
            eyebrow="Photography & Detail"
            title="Calm, lived-in luxury."
            intro="Ivory, linen, wood and stone. Golden-hour light, wide establishing views and intimate detail — every image should make a guest feel they have already arrived."
          />
          <Reveal delay={120} className="mt-10">
            <ActionLink to="/stays" variant="outline">
              See the Stays
            </ActionLink>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <img
            src={stayOne}
            alt="Elora Homes living room"
            width={1600}
            height={1200}
            loading="lazy"
            className="aspect-4/5 w-full object-cover"
          />
        </Reveal>
      </section>
    </>
  );
}
