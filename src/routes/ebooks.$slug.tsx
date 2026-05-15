import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/seo/JsonLd";
import { EbookGate } from "@/components/ebooks/EbookGate";
import { getEbook, ebooks } from "@/content/ebooks";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/ebooks/$slug")({
  loader: ({ params }) => {
    const ebook = getEbook(params.slug);
    if (!ebook) throw notFound();
    return { ebook };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.ebook;
    if (!e) return { meta: [{ title: "Ebook introuvable — Baraka Business" }] };
    return {
      meta: [
        { title: `${e.title} — Ebook Baraka Business` },
        { name: "description", content: e.shortDescription },
        { property: "og:title", content: e.title },
        { property: "og:description", content: e.shortDescription },
        { property: "og:image", content: e.cover },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `${SITE.baseUrl}/ebooks/${e.slug}` },
      ],
      links: [{ rel: "canonical", href: `${SITE.baseUrl}/ebooks/${e.slug}` }],
    };
  },
  component: EbookDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl">Ebook introuvable</h1>
      <Link to="/ebooks" className="mt-6 inline-block text-primary hover:underline">← Retour au catalogue</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-destructive">{error.message}</p>
    </div>
  ),
});

function EbookDetail() {
  const { ebook } = Route.useLoaderData();
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: ebook.title,
    description: ebook.longDescription,
    image: `${SITE.baseUrl}${ebook.cover}`,
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      price: ebook.price,
      priceCurrency: "EUR",
      url: ebook.purchaseUrl,
      availability: "https://schema.org/InStock",
    },
  };

  const related = ebooks.filter((e) => e.slug !== ebook.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={productLd} />
      <article className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <Link to="/ebooks" className="text-sm text-muted-foreground hover:text-primary">← Tous les ebooks</Link>

        <div className="mt-6 grid gap-12 md:grid-cols-[1.1fr,1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                {ebook.category}
              </span>
              {ebook.hasMRR && (
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                  Droits MRR inclus
                </span>
              )}
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">{ebook.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{ebook.shortDescription}</p>
            <div className="prose prose-invert mt-6 max-w-none text-muted-foreground">
              <p>{ebook.longDescription}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {[
                ["Pages", `${ebook.pages}`],
                ["Format", "PDF"],
                ["Langue", "Français"],
                ["Mis à jour", new Date(ebook.updatedAt).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-border/60 bg-card/40 px-4 py-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
                  <div className="mt-1 font-medium">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl">
              <img
                src={ebook.cover}
                alt={`Couverture ${ebook.title}`}
                width={640}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <EbookGate ebook={ebook} />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-display text-2xl">Autres ebooks Baraka</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((e) => (
                <Link key={e.slug} to="/ebooks/$slug" params={{ slug: e.slug }} className="glass group rounded-xl p-4 hover:glow-gold">
                  <img src={e.cover} alt="" width={400} height={500} loading="lazy" className="aspect-[4/5] w-full rounded-lg object-cover" />
                  <h3 className="mt-3 font-display text-base">{e.title}</h3>
                  <div className="mt-1 text-sm text-primary">{e.price === 0 ? "Gratuit" : `${e.price}€`}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
