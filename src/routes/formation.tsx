import { createFileRoute } from "@tanstack/react-router";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

const MODULES = [
  { t: "Module 1 — Mindset & positionnement", d: "Choisir une niche solvable, formuler son offre, fixer un prix d'appel.", h: "2h30" },
  { t: "Module 2 — IA générative", d: "ChatGPT, Claude, Midjourney : prompts pros et workflows quotidiens.", h: "3h45" },
  { t: "Module 3 — No-Code essentiel", d: "Lovable, Bubble, Softr : livrer un produit payant en moins de 14 jours.", h: "5h" },
  { t: "Module 4 — Automatisations", d: "n8n & Make : 12 automatisations clé en main pour PME.", h: "4h15" },
  { t: "Module 5 — Tunnels de vente", d: "Lead magnet → email → page de vente → upsell. Modèles fournis.", h: "3h" },
  { t: "Module 6 — Prospection IA", d: "Apollo + ChatGPT API : 200 prospects qualifiés/jour.", h: "2h45" },
  { t: "Module 7 — Produits MRR", d: "Choisir, packager et vendre des produits sous droits de revente.", h: "2h30" },
  { t: "Module 8 — Scaling & équipe", d: "Du freelance à l'agence : recrutement, process, retainers.", h: "3h" },
];

export const Route = createFileRoute("/formation")({
  head: () => ({
    meta: [
      { title: "Formation Baraka Business 149€ — IA & No-Code en français" },
      { name: "description", content: "Programme complet 8 modules, communauté privée et accès à vie. Apprends à créer un business IA & no-code rentable en français pour 149€." },
      { property: "og:title", content: "Formation Baraka Business 149€" },
      { property: "og:description", content: "8 modules, Cercle Baraka, mises à jour à vie." },
      { property: "og:url", content: `${SITE.baseUrl}/formation` },
    ],
    links: [{ rel: "canonical", href: `${SITE.baseUrl}/formation` }],
  }),
  component: FormationPage,
});

function FormationPage() {
  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Baraka Business — Formation IA & No-Code",
    description: "Formation française complète pour créer, vendre et automatiser un business digital avec l'IA et le no-code.",
    provider: { "@type": "Organization", name: SITE.name, sameAs: SITE.baseUrl },
    inLanguage: "fr",
    offers: {
      "@type": "Offer",
      price: SITE.pricing.formation,
      priceCurrency: "EUR",
      url: SITE.purchaseUrl,
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT27H",
    },
  };

  return (
    <>
      <JsonLd data={courseLd} />
      <section className="mx-auto max-w-5xl px-4 py-20 text-center md:px-6 md:py-28">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">Formation principale</span>
        <h1 className="mt-5 font-display text-4xl md:text-6xl">
          Le programme <span className="text-gradient-gold">Baraka Business</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          8 modules vidéo, le Cercle Baraka, des templates et automatisations prêts à l'emploi.
          Une formation française, par Karim, pour générer ton premier revenu IA &amp; no-code.
        </p>
        <div className="mt-8">
          <a href={SITE.purchaseUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 font-semibold text-primary-foreground shadow-gold">
            Rejoindre · 149€
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 md:px-6">
        <h2 className="font-display text-3xl md:text-4xl">Le curriculum</h2>
        <div className="mt-8 space-y-3">
          {MODULES.map((m, i) => (
            <details key={m.t} className="group glass rounded-xl p-5" open={i === 0}>
              <summary className="flex cursor-pointer items-start justify-between gap-4 list-none marker:hidden">
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary">Module {i + 1}</div>
                  <div className="mt-1 font-display text-lg">{m.t.split("—")[1]?.trim()}</div>
                </div>
                <div className="shrink-0 text-xs text-muted-foreground">{m.h}</div>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{m.d}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h3 className="font-display text-2xl">Tout est inclus pour 149€</h3>
          <p className="mt-2 text-sm text-muted-foreground">Paiement unique · accès à vie · garantie 14 jours</p>
          <a href={SITE.purchaseUrl} target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-gradient-gold px-7 py-3 font-semibold text-primary-foreground shadow-gold">
            Rejoindre maintenant
          </a>
        </div>
      </section>
    </>
  );
}
