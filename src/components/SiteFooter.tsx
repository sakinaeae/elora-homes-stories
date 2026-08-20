import { Link } from "@tanstack/react-router";
import { brand, navLinks } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{ backgroundImage: `url(${brand.textureForest})`, backgroundSize: "620px auto" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-10 pb-6 md:px-10 md:pt-12 md:pb-8 lg:px-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          <div className="flex flex-col items-center text-center">
            <img
              src={brand.logoLight}
              alt={`${brand.name} logo`}
              width={517}
              height={227}
              loading="lazy"
              className="h-16 w-auto object-contain md:h-20"
            />
            <p className="mt-3 font-display text-lg font-light tracking-wide text-ivory/90">
              Spaces Styled for Every Story.
            </p>
            <p className="mt-1 text-xs leading-loose font-light text-ivory/60">
              Bengaluru, India.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold-pale">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-quiet text-sm font-light text-ivory/80 hover:text-ivory">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold-pale">Enquire</p>
            <ul className="mt-4 space-y-2.5 text-sm font-light text-ivory/80">
              <li>
                <a href={`mailto:${brand.email}`} className="link-quiet hover:text-ivory">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phoneHref}`} className="link-quiet hover:text-ivory">
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet hover:text-ivory"
                >
                  {brand.instagram}
                </a>
              </li>
              <li>
                <a href={`https://${brand.website}`} className="link-quiet hover:text-ivory">
                  {brand.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center border-t border-ivory/15 pt-4 text-[0.65rem] tracking-[0.18em] text-ivory/45 uppercase text-center md:mt-10 md:pt-5">
          <p>© {new Date().getFullYear()} {brand.name}</p>
        </div>
      </div>
    </footer>
  );
}
