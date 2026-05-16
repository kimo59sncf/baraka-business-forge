import { Link } from "@tanstack/react-router";
import type { Ebook } from "@/content/ebooks";

export function EbookCard({ ebook }: { ebook: Ebook }) {
  const isFree = ebook.price === 0;
  return (
    <Link
      to="/ebooks/$slug"
      params={{ slug: ebook.slug }}
      className="group glass relative flex flex-col overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:glow-gold"
    >
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-xl">
        <img
          src={ebook.cover}
          alt={`Couverture ${ebook.title}`}
          width={400}
          height={500}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
            {ebook.category}
          </span>
          {ebook.hasMRR && (
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
              MRR
            </span>
          )}
          {ebook.comingSoon && (
            <span className="rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              Bientôt
            </span>
          )}
        </div>
        <h3 className="mt-2 font-display text-xl leading-tight">{ebook.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
          {ebook.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-2xl text-gradient-gold">
            {isFree ? "Gratuit" : `${ebook.price}€`}
          </span>
          <span className="text-xs text-muted-foreground">{ebook.pages} pages</span>
        </div>
      </div>
    </Link>
  );
}
