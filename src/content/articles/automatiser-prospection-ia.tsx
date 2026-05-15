import ogImage from "@/assets/og-default.jpg";

export const meta = {
  slug: "automatiser-prospection-ia",
  title: "Automatiser sa prospection avec l'IA : guide pratique 2026",
  description:
    "Comment construire une machine de prospection qui tourne 24/7 grâce à l'IA et au no-code (Make, n8n, ChatGPT). Article en cours de rédaction.",
  date: "2026-05-05",
  dateModified: "2026-05-12",
  category: "IA",
  readingTime: "6 min",
  keywords: ["prospection IA", "automatisation", "no-code", "n8n", "make"],
  ogImage,
  status: "stub" as const,
};

export const faq = [
  {
    q: "Quels outils utiliser pour automatiser sa prospection avec l'IA ?",
    a: "La combinaison la plus efficace en 2026 : Make ou n8n pour les workflows, ChatGPT/Claude via API pour la rédaction personnalisée, Apollo ou LinkedIn Sales Navigator pour les leads.",
  },
];

export function Component() {
  return (
    <>
      <p className="lead">
        Cet article approfondi est en cours de rédaction. En attendant, voici
        un résumé des points clés pour automatiser ta prospection avec l'IA.
      </p>
      <h2>Pourquoi automatiser sa prospection ?</h2>
      <p>
        La prospection manuelle plafonne vite : 20 à 30 contacts qualifiés par
        jour. Avec une stack IA + no-code bien construite, on monte à 200+ par
        jour, tout en personnalisant chaque message.
      </p>
      <h2>La stack recommandée</h2>
      <p>
        Apollo (sourcing) → Make (orchestration) → ChatGPT API (personnalisation)
        → Lemlist ou Instantly (envoi) → Notion (CRM léger). À détailler dans
        la version complète.
      </p>
      <p>
        <em>Article complet à venir. Reste informé via le Cercle Baraka.</em>
      </p>
    </>
  );
}
