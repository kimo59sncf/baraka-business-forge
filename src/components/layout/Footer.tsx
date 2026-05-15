import { Link } from "@tanstack/react-router";
import logo from "@/assets/baraka-logo.png";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="" width={32} height={32} className="h-8 w-8 rounded-lg object-contain" />
            <span className="font-display text-lg font-semibold">
              Baraka <span className="text-gradient-gold">Business</span>
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Formation française IA &amp; No-Code par Karim (MK-DEV). Construis,
            vends et automatise ton business digital — même sans coder.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={SITE.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">TikTok</a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Instagram</a>
            <a href="/rss.xml" className="text-sm text-muted-foreground hover:text-primary">RSS</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Programme</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/formation" className="hover:text-primary">Formation 149€</Link></li>
            <li><Link to="/ebooks" className="hover:text-primary">Ebooks</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Maison</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/a-propos" className="hover:text-primary">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-primary">Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40 px-4 py-5 text-center text-xs text-muted-foreground md:px-6">
        © {new Date().getFullYear()} Baraka Business · Une création MK-DEV ·
        Tous droits réservés
      </div>
    </footer>
  );
}
