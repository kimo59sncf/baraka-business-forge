import ogImage from "@/assets/og-default.jpg";

export const meta = {
  slug: "email-marketing-ia",
  title: "Email marketing dopé à l'IA : tactiques qui convertissent",
  description:
    "Comment l'IA transforme l'email marketing en 2026 : segmentation, personnalisation, A/B testing automatique.",
  date: "2026-03-22",
  dateModified: "2026-05-12",
  category: "Business",
  readingTime: "5 min",
  keywords: ["email marketing", "IA", "personnalisation", "automation"],
  ogImage,
  status: "stub" as const,
};

export const faq = [
  {
    q: "Quels outils d'email IA en 2026 ?",
    a: "Lemlist, Instantly, Klaviyo, Mailmodo. Tous intègrent désormais des couches IA pour la personnalisation et l'A/B testing.",
  },
];

export function Component() {
  return (
    <>
      <p className="lead">L'IA fait passer le taux d'ouverture de 22% à 38% en moyenne sur les séquences bien construites.</p>
      <p><em>Article complet à venir.</em></p>
    </>
  );
}
