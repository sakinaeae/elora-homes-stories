import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageSquare, Instagram, Globe } from "lucide-react";
import { brand, navLinks } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{ backgroundImage: `url(${brand.textureHousesForest})`, backgroundSize: "600px auto" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-0 md:px-10 md:pt-10 md:pb-0 lg:px-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col items-center text-center md:items-center md:text-center">
            <img
              src={brand.logoLight}
              alt={`${brand.name} logo`}
              width={400}
              height={400}
              loading="lazy"
              className="h-64 w-auto object-contain -my-14 md:h-80 md:-my-20"
            />
            <p className="mt-4 text-sm font-light text-ivory/80">Spaces Styled for Every Story.</p>
            <p className="mt-2 text-xs leading-loose font-light text-ivory/55">{brand.city}</p>
          </div>

          <div>
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-8 space-y-4">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-quiet flex items-center gap-2 text-sm font-light text-ivory/80 hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">Contact</p>
            <ul className="mt-8 space-y-4">
              <li>
                <a href={`mailto:${brand.email}`} className="link-quiet flex items-center gap-2 text-sm font-light text-ivory/80 hover:text-ivory">
                  <Mail className="inline w-4 h-4 mr-2 text-gold" /> {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phoneHref}`} className="link-quiet flex items-center gap-2 text-sm font-light text-ivory/80 hover:text-ivory">
                  <Phone className="inline w-4 h-4 mr-2 text-gold" /> {brand.phone}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${brand.phoneHref.replace('tel:', '')}`} className="link-quiet flex items-center gap-2 text-sm font-light text-ivory/80 hover:text-ivory">
                  <MessageSquare className="inline w-4 h-4 mr-2 text-gold" /> {brand.phone}
                </a>
              </li>
              <li>
                <a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="link-quiet flex items-center gap-2 text-sm font-light text-ivory/80 hover:text-ivory">
                  <Instagram className="inline w-4 h-4 mr-2 text-gold" /> {brand.instagram}
                </a>
              </li>
              <li>
                <a href={`https://${brand.website}`} className="link-quiet flex items-center gap-2 text-sm font-light text-ivory/80 hover:text-ivory">
                  <Globe className="inline w-4 h-4 mr-2 text-gold" /> {brand.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright line — inside padded container */}
        <div className="mt-8 border-t border-ivory/15">
          <div className="w-full text-center text-[0.65rem] tracking-[0.18em] text-ivory/45 uppercase py-2">
            © 2026 ELORA HOMES. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>

      {/* Full-width "Made by Sakitopia" bar — outside padded container, edge-to-edge */}
      <div className="relative w-full border-t border-ivory/10 bg-black/30 py-1.5 text-center text-[0.7rem] tracking-[0.2em] text-ivory/50 uppercase">
        MADE BY{" "}
        <a
          href="https://www.instagram.com/sakitopia/"
          target="_blank"
          rel="noreferrer"
          className="text-gold/70 hover:text-gold transition-colors"
        >
          SAKITOPIA
        </a>
      </div>
    </footer>
  );
}
