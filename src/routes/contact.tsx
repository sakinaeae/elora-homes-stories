import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ActionButton } from "@/components/ActionLink";
import { brand } from "@/lib/brand";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { stays } from "@/data/stays";
import { sendEnquiry, type EnquiryInput } from "@/lib/send-enquiry";

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
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as unknown as EnquiryInput;

    setSubmitting(true);
    setStatus("idle");
    setErrorMessage("");
    try {
      await sendEnquiry({ data });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
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

      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-12 md:grid-cols-[1.2fr_1fr] md:px-10 md:pb-16 lg:gap-24 lg:px-16">
        <Reveal delay={120} className="order-2 md:order-1">
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
            <div className="flex flex-col gap-4">
              <ActionButton variant="forest" disabled={submitting}>
                {submitting ? "Sending…" : "Send Message"}
              </ActionButton>
              {status === "success" && (
                <p role="status" className="text-sm font-light text-forest">
                  Thank you — your enquiry is on its way. We usually reply within the day.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-sm font-light text-red-700">
                  {errorMessage}{" "}
                  <a href={`mailto:${brand.email}`} className="underline">
                    Email us directly
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal className="order-1 md:order-2">
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
      </section>

      
    </>
  );
}
