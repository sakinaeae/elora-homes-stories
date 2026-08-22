import { Link } from "@tanstack/react-router";
import { brand, navLinks } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{ backgroundImage: `url(${brand.textureHousesForest})`, backgroundSize: "600px auto" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16 lg:px-16">
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

        <div className="mt-12 flex flex-col items-center justify-center border-t border-ivory/15 pt-6 text-[0.65rem] tracking-[0.18em] text-ivory/45 uppercase">
          <p>© {new Date().getFullYear()} {brand.name}</p>
        </div>
      </div>
    </footer>
  );
}
