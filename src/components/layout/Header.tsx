import { Link } from "@tanstack/react-router";
import logo from "@/assets/baraka-logo.png";
import { useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/formation", label: "Formation" },
  { to: "/ebooks", label: "Ebooks" },
  { to: "/blog", label: "Blog" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Baraka Business logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Baraka <span className="text-gradient-gold">Business</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={SITE.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
          >
            Rejoindre · {SITE.pricing.formation}€
          </a>
        </div>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`h-px w-5 bg-foreground transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-foreground transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/40 bg-background/95 px-4 py-4 md:hidden" aria-label="Navigation mobile">
          <ul className="flex flex-col gap-1">
            {NAV.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base text-muted-foreground hover:bg-card hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-card font-medium" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={SITE.purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-gradient-gold px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-gold"
              >
                Rejoindre la formation · {SITE.pricing.formation}€
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
