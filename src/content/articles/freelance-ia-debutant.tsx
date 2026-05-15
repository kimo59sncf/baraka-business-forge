import ogImage from "@/assets/og-default.jpg";

export const meta = {
  slug: "freelance-ia-debutant",
  title: "Devenir freelance IA débutant : feuille de route 30 jours",
  description:
    "De l'inscription à la première mission : la feuille de route condensée pour devenir freelance IA en 30 jours, même sans expérience.",
  date: "2026-04-18",
  dateModified: "2026-05-12",
  category: "IA",
  readingTime: "5 min",
  keywords: ["freelance IA", "débutant", "premier client", "malt"],
  ogImage,
  status: "stub" as const,
};

export const faq = [
  {
    q: "Faut-il un statut juridique avant la première mission ?",
    a: "Non. La micro-entreprise peut s'ouvrir en 5 minutes après acceptation de la mission. Mais ouvre-la avant la facturation.",
  },
];

export function Component() {
  return (
    <>
      <p className="lead">Plan condensé : positionnement, offre, prospection, livraison.</p>
      <h2>Semaine 1 : positionnement</h2>
      <p>Une niche, un livrable, un prix d'appel.</p>
      <p><em>Article complet à venir.</em></p>
    </>
  );
}
