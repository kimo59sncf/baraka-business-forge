import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroParticles } from "@/components/home/HeroParticles";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { EbookCard } from "@/components/ebooks/EbookCard";
import { articlesByDate } from "@/content/articles";
import { ebooks } from "@/content/ebooks";
import { testimonials, stats } from "@/content/testimonials";
import { globalFaq } from "@/content/faq";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-baraka.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baraka Business — Formation IA & No-Code 449€ par Karim" },
      { name: "description", content: "Formation française IA & No-Code à 449€. Crée, vends et automatise ton business digital, même sans coder. Première vente moyenne en 12 jours." },
      { property: "og:title", content: "Baraka Business — Formation IA & No-Code 449€" },
      { property: "og:description", content: "Apprends à monétiser l'IA et le no-code en français avec Karim (MK-DEV)." },
      { property: "og:url", content: SITE.baseUrl },
      { property: "og:image", content: heroImg },
      { rel: "canonical", href: SITE.baseUrl } as never,
    ],
    links: [{ rel: "canonical", href: SITE.baseUrl }],
  }),
  component: HomePage,
});

const PILLARS = [
  { t: "IA générative", d: "ChatGPT, Claude, Midjourney : transformer un prompt en revenu." },
  { t: "No-Code", d: "Lovable, Bubble, Make : livrer des produits payants sans coder." },
  { t: "Automatisation", d: "n8n, Zapier : libérer 10h/semaine et facturer le temps gagné." },
  { t: "Vente & Offres", d: "Construire des offres irrésistibles et trouver des clients." },
  { t: "Communauté", d: "Le Cercle Baraka : entraide, calls hebdo, accountability." },
];

function HomePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: globalFaq.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-night" />
        <img src={heroImg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" width={1920} height={1080} />
        <HeroParticles />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center md:px-6 md:py-36">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            ★ Formation française · 1 200+ membres
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            Crée, vends et automatise <br className="hidden md:inline" />
            ton business avec <span className="text-gradient-gold">l'IA & le No-Code</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Baraka Business est une formation française fondée par Karim (MK-DEV, 6 ans d'expérience).
            Une méthode pas-à-pas pour générer ton premier revenu en 12 à 30 jours, même sans coder.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={SITE.purchaseUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]">
              Rejoindre la formation · 449€
            </a>
            <Link to="/ebooks" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 font-medium hover:bg-card">
              Voir les ebooks
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Paiement unique · Garantie 14 jours · Accès à vie</p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl text-gradient-gold md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PILIERS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">Le programme</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">5 piliers, une seule promesse</h2>
          <p className="mt-4 text-muted-foreground">
            Tout ce qu'il faut pour passer d'idée à premier revenu, sans détour ni jargon.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p, i) => (
            <div key={p.t} className="glass rounded-2xl p-6">
              <div className="font-display text-3xl text-gradient-gold">0{i + 1}</div>
              <h3 className="mt-3 font-display text-xl">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="glass relative overflow-hidden rounded-3xl p-8 text-center md:p-12">
          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
          <span className="relative inline-flex rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">Pack complet</span>
          <h2 className="relative mt-4 font-display text-3xl md:text-5xl">La formation Baraka Business</h2>
          <div className="relative mt-6 font-display text-6xl text-gradient-gold md:text-7xl">449€</div>
          <p className="relative mt-2 text-sm text-muted-foreground">Paiement unique — accès à vie</p>
          <ul className="relative mx-auto mt-8 max-w-md space-y-3 text-left text-sm">
            {[
              "Programme complet (8 modules vidéo)",
              "Cercle Baraka : communauté privée + calls hebdo",
              "Templates, prompts et automatisations clé en main",
              "Mises à jour à vie + bonus mensuels",
              "Garantie satisfait ou remboursé 14 jours",
            ].map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1 text-accent">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a href={SITE.purchaseUrl} target="_blank" rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center justify-center rounded-full bg-gradient-gold px-8 py-3.5 font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]">
            Rejoindre maintenant
          </a>
        </div>
      </section>

      {/* EBOOKS preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Ebooks</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Notre catalogue</h2>
          </div>
          <Link to="/ebooks" className="text-sm text-primary hover:underline">Tout voir →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ebooks.slice(0, 4).map((e) => <EbookCard key={e.slug} ebook={e} />)}
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <h2 className="text-center font-display text-3xl md:text-4xl">Ils ont rejoint Baraka</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass rounded-2xl p-6">
              <blockquote className="text-sm leading-relaxed text-foreground">« {t.quote} »</blockquote>
              <figcaption className="mt-4 text-xs text-muted-foreground">
                <strong className="text-foreground">{t.name}</strong> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* BLOG preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Le blog</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Derniers articles</h2>
          </div>
          <Link to="/blog" className="text-sm text-primary hover:underline">Tout voir →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articlesByDate.slice(0, 3).map((a) => <ArticleCard key={a.meta.slug} meta={a.meta} />)}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 md:px-6">
        <h2 className="text-center font-display text-3xl md:text-4xl">Questions fréquentes</h2>
        <div className="mt-10 divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/40">
          {globalFaq.map((qa) => (
            <details key={qa.q} className="group p-5">
              <summary className="cursor-pointer list-none font-medium marker:hidden">
                <span className="mr-2 text-primary">+</span>{qa.q}
              </summary>
              <p className="mt-3 pl-5 text-sm text-muted-foreground">{qa.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
