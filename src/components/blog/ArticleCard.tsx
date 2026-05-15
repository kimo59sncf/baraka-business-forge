import { Link } from "@tanstack/react-router";
import type { ArticleMeta } from "@/content/articles";

export function ArticleCard({ meta }: { meta: ArticleMeta }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: meta.slug }}
      className="group glass flex flex-col overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:glow-gold"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={meta.ogImage}
          alt={meta.title}
          width={1200}
          height={640}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {meta.status === "stub" && (
          <span className="absolute right-3 top-3 rounded-full bg-background/80 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
            À venir
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-medium uppercase tracking-wider text-primary">
            {meta.category}
          </span>
          <span>·</span>
          <span>{meta.readingTime}</span>
        </div>
        <h3 className="mt-3 font-display text-xl leading-tight">
          {meta.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {meta.description}
        </p>
        <span className="mt-4 text-sm text-primary">Lire l'article →</span>
      </div>
    </Link>
  );
}
