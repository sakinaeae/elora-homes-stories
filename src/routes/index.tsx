import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ActionLink } from "@/components/ActionLink";
import { brand } from "@/lib/brand";
import { stays } from "@/data/stays";
import heroImage from "@/assets/hero.jpg";
import detailImage from "@/assets/detail-linen.jpg";
import stayOne from "@/assets/cozy-corner-1.jpg";
import stayTwo from "@/assets/golden-hour-1.jpg";
import stayThree from "@/assets/cozy-corner-2.jpg";
import stayFour from "@/assets/golden-hour-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elora Homes — Premium Short Stays in Bengaluru" },
      {
        name: "description",
        content:
          "Thoughtfully designed short stays in Bengaluru. Linen, light and quiet luxury — spaces styled for every story.",
      },
      { property: "og:title", content: "Elora Homes — Spaces Styled for Every Story" },
      {
        property: "og:description",
        content: "Premium short stays in Bengaluru, hosted with genuine warmth and thoughtful detail.",
      },
    ],
  }),
  component: Home,
});

const values = [
  {
    title: "Genuine Warmth",
    copy: "We host with heart — every guest welcomed as though they are returning home.",
  },
  {
    title: "Thoughtful Detail",
    copy: "From pressed linen to curated amenities, nothing is left to chance.",
  },
  {
    title: "Warm Luxury",
    copy: "Premium quality that never feels cold. Spaces designed to be lived in.",
  },
  {
    title: "Local Connection",
    copy: "We connect guests to the neighbourhood — its people and its rhythms.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={heroImage}
          alt="A sunlit Elora Homes suite in Bengaluru"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-espresso/45"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
          <p className="eyebrow text-gold-pale">Bengaluru, India</p>
          <h1 className="mt-8 max-w-3xl text-[clamp(2.75rem,7vw,6rem)] leading-[1.02] text-ivory">
            Spaces styled for every story.
          </h1>
          <p className="mt-8 max-w-md text-sm leading-[1.9] font-light text-ivory/75">
            Premium short stays for travellers who arrive as guests and leave as friends.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <ActionLink to="/stays" variant="gold">
              View the Stays
            </ActionLink>
            <ActionLink to="/contact" variant="onDark">
              Contact
            </ActionLink>
          </div>
        </div>
      </section>

      {/* Featured Stays */}
      <section className="mx-auto max-w-7xl bg-[linear-gradient(135deg,#d8ccbb_0%,#c5b39d_100%)] px-6 py-28 md:px-10 md:py-40 lg:px-16">
        <SectionHeading eyebrow="Featured Stays" title="Two homes, quietly considered." />
        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-10">
          {stays.map((stay, i) => (
            <Reveal key={stay.slug} as="figure" delay={i * 120} className="group">
              <div className="overflow-hidden">
                <img
                  src={stay.image}
                  alt={`${stay.name} interior`}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-8">
                <p className="eyebrow text-gold">{stay.location}</p>
                <h3 className="mt-4 text-3xl text-forest md:text-4xl">{stay.name}</h3>
                <p className="mt-4 max-w-sm text-sm leading-[1.9] font-light text-muted-foreground">
                  {stay.description}
                </p>
                <p className="mt-6 text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {stay.guests} guests · {stay.bedrooms} {stay.bedrooms === 1 ? "bedroom" : "bedrooms"} · {stay.beds} {stay.beds === 1 ? "bed" : "beds"} · {stay.bathrooms} {stay.bathrooms === 1 ? "bath" : "baths"}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial Story */}
      <section className="relative overflow-hidden bg-beige">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{ backgroundImage: `url(${brand.textureBeige})`, backgroundSize: "560px auto" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-40 lg:gap-28 lg:px-16">
          <Reveal>
            <img
              src={detailImage}
              alt="Folded linen and a brass key on a wooden tray"
              width={1200}
              height={1504}
              loading="lazy"
              className="aspect-3/4 w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A home away from home, only better."
              intro="Elora began with a simple belief — that a short stay can feel as considered as a long one. We design, style and host every space ourselves, from the weight of the linen to the light at seven in the morning."
            />
            <Reveal delay={120} className="mt-10">
              <div className="rule-gold" />
              <p className="mt-8 max-w-md text-sm leading-[1.9] font-light text-muted-foreground">
                Warm. Confident. Minimal. Inviting. It is how we host, and how we build.
              </p>
              <div className="mt-10">
                <ActionLink to="/about" variant="outline">
                  About Elora
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-16">
        <SectionHeading eyebrow="Gallery" title="Moments from within." align="center" />
        <div className="mt-20 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[stayOne, stayTwo, stayThree, stayFour].map((src, i) => (
            <Reveal key={i} delay={i * 100} className="overflow-hidden">
              <img
                src={src}
                alt="Elora Homes interior detail"
                width={1200}
                height={1500}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.05] ${
                  i % 2 === 0 ? "aspect-3/4" : "aspect-3/4 md:mt-10"
                }`}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40 lg:px-16">
        <SectionHeading
          eyebrow="Instagram"
          title={brand.instagram}
          intro="Room reveals, guest notes and neighbourhood guides."
          align="center"
        />
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {[stayTwo, detailImage, stayOne].map((src, i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className={`overflow-hidden ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <img
                src={src}
                alt="Elora Homes on Instagram"
                width={1200}
                height={1200}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.05]"
              />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <ActionLink href={brand.instagramUrl} variant="outline">
            Follow along
          </ActionLink>
        </Reveal>
      </section>
    </>
  );
}
