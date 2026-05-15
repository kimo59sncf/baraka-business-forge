import { createFileRoute, Link } from "@tanstack/react-router";
import { JsonLd } from "@/components/seo/JsonLd";
import portrait from "@/assets/karim-portrait.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Karim, fondateur de Baraka Business" },
      { name: "description", content: "Karim, développeur full-stack avec 6 ans d'expérience et fondateur de l'agence MK-DEV, a créé Baraka Business pour rendre l'IA et le no-code accessibles aux francophones." },
      { property: "og:title", content: "À propos — Karim · Baraka Business" },
      { property: "og:image", content: portrait },
      { property: "og:url", content: `${SITE.baseUrl}/a-propos` },
    ],
    links: [{ rel: "canonical", href: `${SITE.baseUrl}/a-propos` }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { y: "2020", t: "Premiers pas en développement web freelance." },
  { y: "2022", t: "Création de l'agence MK-DEV (sites & apps sur mesure)." },
  { y: "2024", t: "Spécialisation IA générative et automatisations no-code." },
  { y: "2025", t: "Lancement de Baraka Business · 1 200+ membres en 12 mois." },
  { y: "2026", t: "Ouverture du Cercle Baraka et catalogue d'ebooks MRR." },
];

function AboutPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Karim",
    jobTitle: "Fondateur de Baraka Business · CEO MK-DEV",
    description: SITE.founder.bio,
    image: `${SITE.baseUrl}${portrait}`,
    url: `${SITE.baseUrl}/a-propos`,
    sameAs: [SITE.socials.tiktok, SITE.socials.instagram],
    worksFor: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <JsonLd data={personLd} />
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr,1.2fr] md:items-center">
          <img
            src={portrait}
            alt="Portrait stylisé de Karim"
            width={896}
            height={1088}
            className="mx-auto aspect-[4/5] w-full max-w-[400px] rounded-2xl object-cover"
          />
          <div>
            <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              À propos
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl">
              Salam. Moi, c'est <span className="text-gradient-gold">Karim</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Développeur full-stack avec 6 ans d'expérience, fondateur de l'agence{" "}
              <strong className="text-foreground">MK-DEV</strong>. J'ai créé{" "}
              <strong className="text-foreground">Baraka Business</strong> pour
              transmettre la méthode qui m'a permis de passer de freelance solo à
              agence rentable, en utilisant l'IA et le no-code comme leviers.
            </p>
            <p className="mt-4 text-muted-foreground">
              La promesse est simple : pas de blabla, pas de hype. Une feuille de
              route claire, des outils éprouvés et une communauté qui te tire vers
              le haut.
            </p>
            <div className="mt-7 flex gap-3">
              <Link to="/formation" className="rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold">
                Voir la formation
              </Link>
              <Link to="/contact" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-card">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 md:px-6">
        <h2 className="font-display text-3xl md:text-4xl">Le parcours</h2>
        <ol className="mt-10 space-y-6 border-l border-border pl-6">
          {TIMELINE.map((e) => (
            <li key={e.y} className="relative">
              <span className="absolute -left-[31px] mt-1 inline-flex h-3 w-3 rounded-full bg-gradient-gold shadow-gold" />
              <div className="font-display text-2xl text-gradient-gold">{e.y}</div>
              <p className="mt-1 text-muted-foreground">{e.t}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 glass rounded-2xl p-8">
          <h3 className="font-display text-2xl">Pourquoi « Baraka » ?</h3>
          <p className="mt-3 text-muted-foreground">
            Baraka, en arabe, c'est la bénédiction qui multiplie l'effort. C'est
            exactement la promesse : tu apportes le travail, la méthode démultiplie
            les résultats. Un cadre, des outils, et une communauté qui partage la
            même éthique : créer de la valeur réelle, sans raccourci douteux.
          </p>
        </div>
      </section>
    </>
  );
}
