import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ActionButton } from "@/components/ActionLink";
import { brand } from "@/lib/brand";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { stays } from "@/data/stays";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elora Homes Bengaluru" },
      {
        name: "description",
        content:
          "Speak with Elora Homes about a stay in Bengaluru. Email elorahomesinn@gmail.com, call 9916120726, or send a message.",
      },
      { property: "og:title", content: "Contact Elora Homes" },
      {
        property: "og:description",
        content: "Contact us about availability, longer stays or hosting with Elora Homes, Bengaluru.",
      },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full border-b border-border bg-transparent py-4 text-sm font-light text-foreground placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none transition-colors duration-500";

function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const subject = encodeURIComponent(`Inquiry for ${data.stay}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nDates: ${data.dates}\nGuests: ${data.guests}\nStay: ${data.stay}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 md:px-10 md:pt-40 md:pb-16 lg:px-16">
        <Reveal>
          <h1 className="max-w-3xl text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-forest">
            We would love to host you.
          </h1>
          <p className="mt-8 max-w-md text-sm leading-[1.9] font-light text-muted-foreground">
            Tell us your dates and what you have in mind. We reply personally, usually within the day.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-12 md:grid-cols-[1fr_1.2fr] md:px-10 md:pb-16 lg:gap-24 lg:px-16">
        <Reveal>
          <dl className="space-y-12">
            <div>
              <dt className="flex items-center gap-3 eyebrow text-muted-foreground">
                <Mail className="w-4 h-4 text-gold" />
                Email
              </dt>
              <dd className="mt-4">
                <a
                  href={`mailto:${brand.email}`}
                  className="link-quiet font-display text-2xl font-light text-forest md:text-3xl"
                >
                  {brand.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-3 eyebrow text-muted-foreground">
                <Phone className="w-4 h-4 text-gold" />
                Phone
              </dt>
              <dd className="mt-4">
                <a
                  href={`tel:${brand.phoneHref}`}
                  className="link-quiet font-display text-2xl font-light text-forest md:text-3xl"
                >
                  {brand.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-3 eyebrow text-muted-foreground">
                <Instagram className="w-4 h-4 text-gold" />
                Instagram
              </dt>
              <dd className="mt-4">
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet font-display text-2xl font-light text-forest md:text-3xl"
                >
                  {brand.instagram}
                </a>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-3 eyebrow text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold" />
                Location
              </dt>
              <dd className="mt-4 font-display text-2xl font-light text-forest md:text-3xl">
                {brand.city}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="eyebrow text-muted-foreground">
                  Name
                </label>
                <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <label htmlFor="dates" className="eyebrow text-muted-foreground">
                  Dates
                </label>
                <input id="dates" name="dates" required className={fieldClass} placeholder="dd/mm — dd/mm" />
              </div>
              <div>
                <label htmlFor="guests" className="eyebrow text-muted-foreground">
                  Guests
                </label>
                <input id="guests" name="guests" required className={fieldClass} placeholder="2 guests" />
              </div>
            </div>
            <div>
              <label htmlFor="stay" className="eyebrow text-muted-foreground">
                Which stay are you interested in?
              </label>
              <select id="stay" name="stay" required defaultValue="" className={fieldClass}>
                <option value="" disabled>Select a stay</option>
                {stays.map(s => (
                  <option key={s.slug} value={s.name}>{s.name}</option>
                ))}
                <option value="Undecided">Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="eyebrow text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`${fieldClass} resize-none`}
                placeholder="Tell us a little about your stay"
              />
            </div>
            <ActionButton variant="forest">Send Message</ActionButton>
          </form>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-beige">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{ backgroundImage: `url(${brand.textureBeige})`, backgroundSize: "560px auto" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
          <p className="eyebrow text-gold">Find Us</p>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] text-forest">
            Bengaluru, India
          </h2>
          <div className="mt-12 flex aspect-16/9 w-full items-center justify-center border border-forest/15 bg-ivory/70 md:aspect-21/9">
            <div className="text-center">
              <div className="rule-gold mx-auto" />
              <p className="eyebrow mt-6 text-forest/70">Map placeholder</p>
              <p className="mt-3 text-xs font-light text-muted-foreground">
                Exact location shared on confirmed stays.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
