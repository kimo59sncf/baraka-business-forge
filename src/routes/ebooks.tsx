import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EbookCard } from "@/components/ebooks/EbookCard";
import { ebooks } from "@/content/ebooks";
import { SITE } from "@/lib/site";

const CATS = ["Tous", "IA", "No-Code", "Business", "Prompts"] as const;

export const Route = createFileRoute("/ebooks")({
  head: () => ({
    meta: [
      { title: "Ebooks Baraka — IA, No-Code, MRR & Prompts (français)" },
      { name: "description", content: "Catalogue d'ebooks pratiques en français : IA business, no-code, droits de revente MRR, 50 prompts d'or gratuits. Téléchargement immédiat avec code." },
      { property: "og:title", content: "Ebooks Baraka Business" },
      { property: "og:description", content: "Achète sur Système.io, débloque sur le site avec ton code." },
      { property: "og:url", content: `${SITE.baseUrl}/ebooks` },
    ],
    links: [{ rel: "canonical", href: `${SITE.baseUrl}/ebooks` }],
  }),
  component: EbooksPage,
});

function EbooksPage() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Tous");
  const filtered = cat === "Tous" ? ebooks : ebooks.filter((e) => e.category === cat);

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-16 text-center md:px-6 md:py-24">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          Catalogue
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-6xl">
          Les ebooks <span className="text-gradient-gold">Baraka</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Des guides pratiques pour passer à l'action : IA, no-code, droits de revente.
          Achète sur Système.io, reçois ton code par email, débloque le téléchargement ici.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                cat === c
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((e) => (
            <EbookCard key={e.slug} ebook={e} />
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl">Tu as déjà acheté ?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ouvre la page de l'ebook concerné, clique sur « J'ai déjà un code »
            et saisis le code reçu par email après achat sur Système.io.
          </p>
        </div>
      </section>
    </>
  );
}
