import ogImage from "@/assets/og-default.jpg";

export const meta = {
  slug: "creer-video-ia-tiktok",
  title: "Créer des vidéos TikTok 100% IA : pipeline 2026",
  description:
    "Pipeline complet pour produire des TikToks IA de qualité (script, voix, visuels, montage) en moins de 30 minutes par vidéo.",
  date: "2026-04-01",
  dateModified: "2026-05-12",
  category: "IA",
  readingTime: "5 min",
  keywords: ["tiktok IA", "vidéo générative", "elevenlabs", "midjourney"],
  ogImage,
  status: "stub" as const,
};

export const faq = [
  {
    q: "Quels outils IA pour produire des vidéos TikTok ?",
    a: "ChatGPT pour le script, ElevenLabs pour la voix, Midjourney ou Runway pour les visuels, CapCut pour le montage. Pipeline complet en 30 minutes.",
  },
];

export function Component() {
  return (
    <>
      <p className="lead">Pipeline : script → voix → visuels → montage → publication.</p>
      <p><em>Article complet à venir.</em></p>
    </>
  );
}
