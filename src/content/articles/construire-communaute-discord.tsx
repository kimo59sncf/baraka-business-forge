import ogImage from "@/assets/og-default.jpg";

export const meta = {
  slug: "construire-communaute-discord",
  title: "Construire une communauté Discord rentable en 2026",
  description:
    "Les fondamentaux pour bâtir une communauté Discord engagée et monétisable. Méthode condensée — version complète à venir.",
  date: "2026-04-10",
  dateModified: "2026-05-12",
  category: "Business",
  readingTime: "5 min",
  keywords: ["discord", "communauté", "monétisation", "membership"],
  ogImage,
  status: "stub" as const,
};

export const faq = [
  {
    q: "Combien de membres pour rentabiliser une communauté ?",
    a: "À 50 membres payants à 19€/mois, on dépasse déjà 950€ de MRR. Le seuil de rentabilité dépend du temps que tu investis.",
  },
];

export function Component() {
  return (
    <>
      <p className="lead">Une communauté Discord vivante repose sur 3 leviers : rituels, valeur, modération.</p>
      <p><em>Article complet à venir.</em></p>
    </>
  );
}
