import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleFAQBlock } from "@/components/blog/ArticleFAQBlock";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { getArticle, articlesByDate } from "@/content/articles";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) return { meta: [{ title: "Article introuvable — Baraka" }] };
    return {
      meta: [
        { title: `${a.meta.title} — Baraka Business` },
        { name: "description", content: a.meta.description },
        { name: "keywords", content: a.meta.keywords.join(", ") },
        { property: "article:published_time", content: a.meta.date },
        { property: "article:modified_time", content: a.meta.dateModified },
        { property: "article:section", content: a.meta.category },
        { property: "og:type", content: "article" },
        { property: "og:title", content: a.meta.title },
        { property: "og:description", content: a.meta.description },
        { property: "og:image", content: a.meta.ogImage },
        { property: "og:url", content: `${SITE.baseUrl}/blog/${a.meta.slug}` },
      ],
      links: [{ rel: "canonical", href: `${SITE.baseUrl}/blog/${a.meta.slug}` }],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl">Article introuvable</h1>
      <Link to="/blog" className="mt-6 inline-block text-primary hover:underline">← Retour au blog</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-destructive">{error.message}</p>
    </div>
  ),
});

function ArticlePage() {
  const { slug } = Route.useLoaderData();
  const article = getArticle(slug)!;
  const { meta, faq, Component } = article;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    image: `${SITE.baseUrl}${meta.ogImage}`,
    datePublished: meta.date,
    dateModified: meta.dateModified,
    inLanguage: "fr",
    author: { "@type": "Person", name: "Karim", url: `${SITE.baseUrl}/a-propos` },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.baseUrl}/logo.png` } },
    mainEntityOfPage: `${SITE.baseUrl}/blog/${meta.slug}`,
  };

  const faqLd = faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((q) => ({
          "@type": "Question",
          name: q.q,
          acceptedAnswer: { "@type": "Answer", text: q.a },
        })),
      }
    : null;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: meta.title, item: `${SITE.baseUrl}/blog/${meta.slug}` },
    ],
  };

  const related = articlesByDate.filter((a) => a.meta.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd data={breadcrumbLd} />

      <article className="mx-auto max-w-3xl px-4 pt-12 pb-16 md:px-6 md:pt-20">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link to="/blog" className="hover:text-primary">← Blog</Link>
        </nav>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-medium uppercase tracking-wider text-primary">
            {meta.category}
          </span>
          <span>·</span>
          <span>{meta.readingTime}</span>
          <span>·</span>
          <time dateTime={meta.dateModified}>
            Mis à jour {new Date(meta.dateModified).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </time>
        </div>

        <h1 className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl">{meta.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{meta.description}</p>

        <img
          src={meta.ogImage}
          alt={meta.title}
          width={1200}
          height={640}
          className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover"
        />

        <div className="prose prose-invert prose-lg mt-10 max-w-none
          prose-headings:font-display prose-headings:tracking-tight
          prose-h2:mt-12 prose-h2:text-3xl
          prose-h3:mt-8 prose-h3:text-xl
          prose-p:text-foreground/85 prose-li:text-foreground/85
          prose-strong:text-foreground prose-a:text-primary hover:prose-a:underline
          prose-blockquote:border-primary">
          <Component />
        </div>

        <ArticleFAQBlock faq={faq} />

        <div className="mt-16 glass rounded-2xl p-6 text-center md:p-8">
          <h2 className="font-display text-2xl">Passe à l'action avec Baraka</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            La formation à 149€ détaille la méthode pas-à-pas, avec communauté et templates inclus.
          </p>
          <a href={SITE.purchaseUrl} target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-gradient-gold px-6 py-3 font-semibold text-primary-foreground shadow-gold">
            Découvrir la formation →
          </a>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <h2 className="font-display text-2xl">Continue la lecture</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map((a) => <ArticleCard key={a.meta.slug} meta={a.meta} />)}
        </div>
      </section>
    </>
  );
}
