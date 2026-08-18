import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ActionLink } from "@/components/ActionLink";
import { Parallax } from "@/components/Parallax";
import { brand } from "@/lib/brand";
import { stays } from "@/data/stays";
import heroImage from "@/assets/hero.jpg";
import cozyCorner from "@/assets/cozy-corner-1.jpg";
import goldenHour from "@/assets/golden-hour-1.jpg";
import galleryBed from "@/assets/gallery-bed.jpg";
import galleryBedTwo from "@/assets/gallery-bed-two.jpg";
import galleryLounge from "@/assets/gallery-lounge.jpg";
import galleryTable from "@/assets/gallery-table.jpg";
import goldenHourLiving from "@/assets/golden-hour-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elora Homes — Spaces Styled for Every Story" },
      {
        name: "description",
        content:
          "A premium collection of thoughtfully designed short-stay homes in Bengaluru. Spaces styled for every story.",
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

const cozyCornerStay = stays.find((s) => s.slug === "the-cozy-corner")!;
const goldenHourStay = stays.find((s) => s.slug === "the-golden-hour")!;

const instagramImages = [galleryBed, galleryLounge, goldenHourLiving, galleryBedTwo, galleryTable, cozyCorner];

function QuietLink({ to, children }: { to: string; children: string }) {
  return (
    <Link to={to} className="eyebrow link-quiet inline-flex items-center gap-3 text-gold-pale">
      {children}
      <span aria-hidden className="text-base leading-none">
        →
      </span>
    </Link>
  );
}

function Home() {
  return (
    <>
      {/* Hero — full-screen opening frame */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso">
        <img
          src={heroImage}
          alt="A warm, styled living room at Elora Homes in Bengaluru"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover motion-safe:animate-[heroZoom_20s_ease-out_forwards]"
        />
        {/* Readability treatment — subtle, not obscuring */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-espresso/40"
        />
        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-6 pb-16 md:px-10 md:pb-24 lg:px-16">
          <Reveal>
            <p className="eyebrow text-gold-pale">{brand.city}</p>
            <h1 className="mt-7 max-w-4xl text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] text-balance text-ivory">
              Spaces Styled
              <br />
              for Every Story.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
              <p className="max-w-sm text-sm leading-[1.9] font-light text-ivory/75">
                A premium collection of thoughtfully designed short-stay homes, made for slow mornings and easy evenings.
              </p>
              <span className="hidden items-center gap-3 pb-1 text-[0.65rem] tracking-[0.25em] text-ivory/60 uppercase md:flex">
                Scroll to explore
                <span aria-hidden className="motion-safe:animate-bounce">
                  ↓
                </span>
              </span>
            </div>
            <div className="mt-9">
              <ActionLink to="/contact" variant="gold">
                Enquire
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The story — hero settles into the Elora narrative */}
      <section className="bg-forest text-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-40 lg:px-16">
          <Reveal>
            <p className="eyebrow text-gold-pale">The Elora Homes story</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-display text-[clamp(2.4rem,5vw,5.2rem)] leading-[1.02] font-light text-balance">
              A stay should feel less like checking in, and more like arriving somewhere that already feels yours.
            </p>
            <p className="mt-10 max-w-xl text-sm leading-[1.9] font-light text-ivory/70">
              Elora Homes is a small, considered collection in Bengaluru — each residence styled in warm tones, natural
              texture and quiet light, so every stay feels personal from the moment you walk in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured stays — introduction */}
      <section className="bg-ivory px-6 pt-24 md:px-10 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Featured Stays" title="Two homes, quietly considered." />
          </Reveal>
        </div>
      </section>

      {/* Residence 01 — The Cozy Corner (full-width immersive) */}
      <section className="bg-ivory px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <article className="group relative min-h-[86svh] overflow-hidden bg-espresso">
            <Parallax className="absolute inset-0" strength={70}>
              <img
                src={cozyCorner}
                alt={`${cozyCornerStay.name} — the living room`}
                width={1600}
                height={1200}
                className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
              />
            </Parallax>
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/25 to-espresso/10"
            />
            <div className="relative flex min-h-[86svh] flex-col justify-between p-7 md:p-12 lg:p-16">
              <div className="flex justify-between text-[0.65rem] tracking-[0.25em] text-ivory/70 uppercase">
                <span>01</span>
                <span>{cozyCornerStay.location}</span>
              </div>
              <Reveal className="max-w-2xl">
                <p className="eyebrow text-gold-pale">{cozyCornerStay.subtitle}</p>
                <h2 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] text-balance text-ivory">
                  {cozyCornerStay.name}
                </h2>
                <p className="mt-7 max-w-lg text-sm leading-[1.9] font-light text-ivory/80">
                  An entire one-bedroom home wrapped in warm tones — made for movie nights, slow coffee mornings and
                  late conversations.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.68rem] tracking-[0.18em] text-ivory/70 uppercase">
                  <span>{cozyCornerStay.guests} guests</span>
                  <span>{cozyCornerStay.bedrooms} bedroom</span>
                  <span>{cozyCornerStay.bathrooms} bath</span>
                </div>
                <div className="mt-9">
                  <QuietLink to="/stays">Discover the home</QuietLink>
                </div>
              </Reveal>
            </div>
          </article>
        </div>
      </section>

      {/* Residence 02 — The Golden Hour (split layout) */}
      <section className="bg-beige">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 md:grid-cols-2">
          <Parallax className="min-h-[60svh] md:min-h-[92svh]" strength={80}>
            <img
              src={goldenHour}
              alt={`${goldenHourStay.name} — a quiet corner to rest`}
              width={1400}
              height={1600}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Parallax>
          <div className="flex flex-col justify-center px-6 py-20 md:px-14 md:py-28 lg:px-20">
            <Reveal>
              <div className="flex items-center justify-between text-[0.65rem] tracking-[0.25em] text-forest/50 uppercase">
                <span>02</span>
                <span>{goldenHourStay.location}</span>
              </div>
              <p className="eyebrow mt-8 text-gold">{goldenHourStay.subtitle}</p>
              <h2 className="mt-4 text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[0.92] text-balance text-forest">
                {goldenHourStay.name}
              </h2>
              <p className="mt-7 max-w-md text-sm leading-[1.9] font-light text-muted-foreground">
                A two-bedroom home curated in earthy tones and warm light — designed for gathering, resting and
                reconnecting in the city.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.68rem] tracking-[0.18em] text-forest/60 uppercase">
                <span>{goldenHourStay.guests} guests</span>
                <span>{goldenHourStay.bedrooms} bedrooms</span>
                <span>{goldenHourStay.bathrooms} baths</span>
              </div>
              <div className="mt-9">
                <Link
                  to="/stays"
                  className="eyebrow link-quiet inline-flex items-center gap-3 text-forest"
                >
                  Discover the home
                  <span aria-hidden className="text-base leading-none">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Editorial image rhythm — a collection of quiet moments */}
      <section className="bg-espresso px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14 flex items-end justify-between gap-8">
              <div>
                <p className="eyebrow text-gold-pale">Inside Elora</p>
                <h2 className="mt-5 max-w-2xl text-[clamp(2.6rem,5vw,5rem)] leading-[0.95] text-balance text-ivory">
                  A collection of quiet moments.
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-3 md:grid-cols-12 md:gap-5">
            <Reveal className="overflow-hidden md:col-span-7">
              <Parallax className="aspect-[16/11] w-full" strength={40}>
                <img
                  src={galleryLounge}
                  alt="A soft reading corner styled at Elora Homes"
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Parallax>
            </Reveal>
            <Reveal delay={80} className="overflow-hidden md:col-span-5">
              <Parallax className="aspect-[4/5] w-full" strength={40}>
                <img
                  src={galleryBed}
                  alt="A warmly styled bedroom at Elora Homes"
                  width={1100}
                  height={1400}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Parallax>
            </Reveal>
            <Reveal delay={80} className="overflow-hidden md:col-span-5">
              <Parallax className="aspect-[4/5] w-full" strength={40}>
                <img
                  src={goldenHourLiving}
                  alt="The living room at The Golden Hour"
                  width={1100}
                  height={1400}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Parallax>
            </Reveal>
            <Reveal delay={160} className="overflow-hidden md:col-span-7">
              <Parallax className="aspect-[16/11] w-full" strength={40}>
                <img
                  src={galleryBedTwo}
                  alt="A bedroom dressed in warm layers at Elora Homes"
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Instagram — premium preview linking to the live profile */}
      <section className="bg-ivory px-6 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Instagram"
              title={brand.instagram}
              intro="A closer look at the homes, the details and the moments between stays. Follow along — we share new spaces here first."
              align="center"
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5">
            {instagramImages.map((src, i) => (
              <Reveal key={i} delay={i * 70} className="overflow-hidden">
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${brand.instagram} on Instagram`}
                  className="group relative block"
                >
                  <img
                    src={src}
                    alt="Interior styling at Elora Homes"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 flex items-center justify-center bg-espresso/0 text-ivory opacity-0 transition-[background-color,opacity] duration-500 group-hover:bg-espresso/45 group-hover:opacity-100"
                  >
                    <span className="eyebrow">View</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <ActionLink href={brand.instagramUrl} variant="outline">
              Follow @elorahomesinn
            </ActionLink>
          </Reveal>
        </div>
      </section>

      {/* Closing frame — single primary enquiry action */}
      <section className="relative min-h-[78svh] overflow-hidden bg-espresso">
        <Parallax className="absolute inset-0" strength={60}>
          <img
            src={goldenHour}
            alt="The Golden Hour at Elora Homes"
            width={1600}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Parallax>
        <div aria-hidden className="absolute inset-0 bg-espresso/60" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-7xl items-end px-6 py-20 md:px-10 md:py-28 lg:px-16">
          <Reveal>
            <p className="eyebrow text-gold-pale">Elora Homes</p>
            <h2 className="mt-6 max-w-3xl text-[clamp(3rem,7vw,7rem)] leading-[0.9] text-balance text-ivory">
              Spaces Styled for Every Story.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-[1.9] font-light text-ivory/75">
              Planning a stay in Bengaluru? Tell us your dates and we&apos;ll help you find the right home.
            </p>
            <div className="mt-10">
              <ActionLink to="/contact" variant="gold">
                Enquire
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
