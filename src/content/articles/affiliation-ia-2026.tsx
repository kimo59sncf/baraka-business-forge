import ogImage from "@/assets/og-default.jpg";

export const meta = {
  slug: "affiliation-ia-2026",
  title: "Affiliation IA en 2026 : top des programmes francophones",
  description:
    "Quels programmes d'affiliation IA rapportent vraiment en 2026 ? Sélection commentée des outils francophones et internationaux.",
  date: "2026-04-28",
  dateModified: "2026-05-12",
  category: "Business",
  readingTime: "5 min",
  keywords: ["affiliation IA", "revenu passif", "chatgpt", "midjourney"],
  ogImage,
  status: "stub" as const,
};

export const faq = [
  {
    q: "Combien rapporte l'affiliation sur les outils IA ?",
    a: "Entre 20% et 40% de commission, souvent récurrente. Un site SEO bien positionné peut générer 1 000€ à 10 000€/mois sur ce créneau.",
  },
];

export function Component() {
  return (
    <>
      <p className="lead">L'affiliation IA est un des canaux passifs les plus rentables en 2026.</p>
      <h2>Programmes phares</h2>
      <p>Make, n8n cloud, Lemlist, Notion, Lovable. Chaque programme a ses subtilités à connaître.</p>
      <p><em>Article complet à venir.</em></p>
    </>
  );
}
