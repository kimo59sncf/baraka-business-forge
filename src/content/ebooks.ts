import ebookIaBusiness from "@/assets/ebook-ia-business.jpg";
import ebookNoCode from "@/assets/ebook-no-code.jpg";
import ebookMrr from "@/assets/ebook-mrr.jpg";
import ebookPrompts from "@/assets/ebook-prompts.jpg";
import { SITE } from "@/lib/site";

export type Ebook = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: "IA" | "No-Code" | "Business" | "Prompts";
  price: number; // 0 = gratuit (lead magnet)
  pages: number;
  hasMRR: boolean;
  cover: string;
  pdfPath: string; // /ebooks/files/...
  /** SHA-256(uppercase(code)) — see lib/ebook-access.ts */
  accessCodes: string[];
  purchaseUrl: string;
  updatedAt: string;
};

// Demo codes (à remplacer plus tard) — pour tester le flow :
//   "BARAKA2026" -> ia-business
//   "MRR-GOLD"   -> mrr-revente
//   "NOCODE-FR"  -> no-code-mvp
//   "FREE"       -> 50-prompts (gratuit, mais code ouvre aussi le téléchargement)
// Hashes générés via SHA-256 de l'uppercase du code.
const HASH = {
  BARAKA2026: "c61e5c6f8ec05fd9b4ffa3c2f0e943cb6ffaab8b980f4e57856779597e18d300",
  MRR_GOLD: "7662360a63b3475f6df1a1c8c019764f0365677e3c8669677248ca2f454eee93",
  NOCODE_FR: "ff2b68e400f15e5e77d9885a3087c993a586322fdf5f609084d869939a35df32",
  FREE: "19f1fa5ec989d121d8d2714dbed4db965eaaa6eef40df756c8a2526cedcbd0a3",
};

export const ebooks: Ebook[] = [
  {
    slug: "ia-business-2025",
    title: "IA Business — Le Guide Complet 2025",
    shortDescription:
      "Le playbook pour générer ton premier revenu avec l'IA en 30 jours.",
    longDescription:
      "Un guide pas-à-pas pour identifier les meilleurs services à vendre grâce à l'IA, choisir tes outils (ChatGPT, Claude, Midjourney, n8n), construire ton offre et trouver tes premiers clients sans communauté.",
    category: "IA",
    price: 27,
    pages: 84,
    hasMRR: true,
    cover: ebookIaBusiness,
    pdfPath: "/ebooks/files/ia-business-2025.pdf",
    accessCodes: [HASH.BARAKA2026],
    purchaseUrl: SITE.purchaseUrl,
    updatedAt: "2026-04-12",
  },
  {
    slug: "no-code-mvp",
    title: "Lance ton SaaS No-Code en 14 jours",
    shortDescription:
      "Méthode complète pour créer un produit qui se vend sans écrire une ligne de code.",
    longDescription:
      "De l'idée au MVP payant : validation, design, build (Lovable, Bubble, Softr, Make), pricing, paiements Stripe et premiers utilisateurs. Inclut les modèles de pages et le canevas de validation.",
    category: "No-Code",
    price: 37,
    pages: 102,
    hasMRR: true,
    cover: ebookNoCode,
    pdfPath: "/ebooks/files/no-code-mvp.pdf",
    accessCodes: [HASH.NOCODE_FR],
    purchaseUrl: SITE.purchaseUrl,
    updatedAt: "2026-03-20",
  },
  {
    slug: "mrr-revente",
    title: "MRR — Droits de Revente Maîtres",
    shortDescription:
      "Tout comprendre aux Master Resell Rights et bâtir un catalogue rentable et éthique.",
    longDescription:
      "Définitions, cadre légal, sources fiables, stratégies de pricing, tunnels de vente, livraison automatique. Le guide pour construire un revenu récurrent à partir de produits que tu peux légalement revendre.",
    category: "Business",
    price: 47,
    pages: 96,
    hasMRR: true,
    cover: ebookMrr,
    pdfPath: "/ebooks/files/mrr-revente.pdf",
    accessCodes: [HASH.MRR_GOLD],
    purchaseUrl: SITE.purchaseUrl,
    updatedAt: "2026-04-02",
  },
  {
    slug: "50-prompts",
    title: "50 Prompts d'Or — Spécial Entrepreneurs",
    shortDescription:
      "Lead magnet gratuit : 50 prompts ChatGPT testés pour vendre, écrire et automatiser.",
    longDescription:
      "Une bibliothèque condensée de 50 prompts copy-paste, classés par usage (offre, copywriting, support client, automatisation, productivité). Idéal pour démarrer et tester la pédagogie Baraka.",
    category: "Prompts",
    price: 0,
    pages: 28,
    hasMRR: false,
    cover: ebookPrompts,
    pdfPath: "/ebooks/files/50-prompts.pdf",
    accessCodes: [HASH.FREE],
    purchaseUrl: SITE.purchaseUrl,
    updatedAt: "2026-05-01",
  },
];

export function getEbook(slug: string) {
  return ebooks.find((e) => e.slug === slug);
}
