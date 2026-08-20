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
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={240}
              height={240}
              loading="lazy"
              className="h-28 w-28 bg-ivory object-contain p-2 md:h-32 md:w-32"
            />
            <p className="mt-6 text-xs leading-loose font-light text-ivory/55">{brand.city}</p>
          </div>

          <div>
            <p className="eyebrow text-gold-pale">Explore</p>
            <ul className="mt-8 space-y-4">
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
            <ul className="mt-8 space-y-4 text-sm font-light text-ivory/80">
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

        <div className="mt-20 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-[0.65rem] tracking-[0.18em] text-ivory/45 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}</p>
        </div>
      </div>
    </footer>
  );
}
