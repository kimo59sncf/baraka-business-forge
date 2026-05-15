import ogImage from "@/assets/og-default.jpg";

export const meta = {
  slug: "creer-saas-no-code",
  title: "Créer un SaaS No-Code en 2026 : la méthode condensée",
  description:
    "Lance un micro-SaaS rentable sans coder, avec Lovable, Supabase et Stripe. Méthode condensée — version complète à venir.",
  date: "2026-05-02",
  dateModified: "2026-05-12",
  category: "No-Code",
  readingTime: "5 min",
  keywords: ["SaaS no-code", "lovable", "bubble", "stripe", "micro-saas"],
  ogImage,
  status: "stub" as const,
};

export const faq = [
  {
    q: "Combien coûte le lancement d'un SaaS no-code ?",
    a: "Entre 0€ et 200€ pour le MVP (plans gratuits Lovable + Supabase + Stripe test). Les coûts montent avec le trafic, généralement 50€ à 300€/mois à 100 clients.",
  },
];

export function Component() {
  return (
    <>
      <p className="lead">
        Résumé : un SaaS no-code rentable repose sur 3 piliers — un problème
        précis, un MVP livré en 14 jours, un canal d'acquisition unique.
      </p>
      <h2>1. Choisir le bon problème</h2>
      <p>Niche étroite, douleur récurrente, public solvable.</p>
      <h2>2. Construire le MVP</h2>
      <p>Lovable + Supabase + Stripe couvrent 95% des besoins en 2026.</p>
      <p><em>Article complet à venir.</em></p>
    </>
  );
}
