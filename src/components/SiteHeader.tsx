import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { brand, navLinks } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;
  const onDark = transparent || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-700 ease-out",
        transparent
          ? "border-b border-transparent bg-transparent py-3"
          : open
            ? "border-b border-ivory/10 bg-forest py-2"
            : "border-b border-border bg-ivory/95 py-2 backdrop-blur-md",
      )}
    >
      <div className="mx-auto grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 md:px-10 lg:px-16">
        <Link to="/" className="flex min-w-0 items-center" aria-label={brand.name}>
          <img
            src={onDark ? brand.logoLight : brand.logo}
            alt={`${brand.name} logo`}
            width={240}
            height={240}
            className={cn(
              "h-40 w-auto shrink-0 object-contain -my-10 md:h-48 md:-my-12",
              onDark && "drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "eyebrow link-quiet transition-colors duration-500",
                onDark ? "text-ivory/85 hover:text-ivory" : "text-forest/75 hover:text-forest",
              )}
              activeProps={{ className: onDark ? "text-ivory" : "text-forest" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn("eyebrow shrink-0 md:hidden", onDark ? "text-ivory" : "text-forest")}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-700 ease-out md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav className="flex flex-col gap-6 px-6 pt-10 pb-12">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="font-display text-3xl font-light text-ivory">
              {l.label}
            </Link>
          ))}
          <a href={`mailto:${brand.email}`} className="eyebrow mt-4 text-gold-pale">
            {brand.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
