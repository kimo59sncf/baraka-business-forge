import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { articlesByDate } from "@/content/articles";
import { SITE } from "@/lib/site";

const CATS = ["Tous", "IA", "No-Code", "Business"] as const;

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Baraka — IA, No-Code, business digital français" },
      { name: "description", content: "Articles pratiques sur l'IA, le no-code, les droits de revente (MRR) et la création de business digital en français." },
      { property: "og:title", content: "Blog Baraka Business" },
      { property: "og:url", content: `${SITE.baseUrl}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE.baseUrl}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Tous");
  const [q, setQ] = useState("");
  const filtered = articlesByDate.filter((a) => {
    const matchCat = cat === "Tous" || a.meta.category === cat;
    const matchQ = !q || a.meta.title.toLowerCase().includes(q.toLowerCase()) || a.meta.description.toLowerCase().includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-24">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">Blog</span>
        <h1 className="mt-5 font-display text-4xl md:text-6xl">
          Le journal <span className="text-gradient-gold">Baraka</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Tactiques actionnables, analyses d'outils et études de cas — en français.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  cat === c ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:text-foreground"
                }`}>{c}</button>
            ))}
          </div>
          <input
            type="search"
            placeholder="Rechercher un article…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            maxLength={80}
            className="w-full rounded-full border border-border bg-card/40 px-4 py-2 text-sm md:max-w-xs"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground">Aucun article ne correspond à ta recherche.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => <ArticleCard key={a.meta.slug} meta={a.meta} />)}
          </div>
        )}
      </section>
    </>
  );
}
