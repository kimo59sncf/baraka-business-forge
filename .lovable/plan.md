## Vue d'ensemble

Site complet **BARAKA BUSINESS** (formation IA & No-Code par Karim / MK-DEV). Stack actuelle conservée : TanStack Start + Tailwind v4 + contenu statique (TS). Stratégie double **SEO Google + GEO** (citation par ChatGPT/Perplexity/Gemini). Achat formation/ebooks → `https://karim-dev59.systeme.io/school/course/baraka-business`.

## Direction artistique « Or & Nuit Tech »

Tokens dans `src/styles.css` (oklch) :
- `--background` #0A0A0F · `--card` #1A1A2E (glass) · `--foreground` #F5F0E8
- `--primary` or #D4AF37 · `--accent` émeraude #2ECC71
- Polices Google : **Cormorant Garamond** (titres), **DM Sans** (corps) — preconnect + `font-display: swap`
- Effets : particules canvas dorées (hero), glassmorphism cards, glow or au hover, scroll reveal léger (IntersectionObserver, pas de lib)
- **Logo** : copie de `user-uploads://IMG_4129.png` → `src/assets/baraka-logo.png` (header + favicon + JSON-LD `logo`)

## Architecture des routes

```
src/routes/
  __root.tsx          → shell, fonts preconnect, Header/Footer, JSON-LD Organization global, OG defaults
  index.tsx           → Landing : hero particules, 5 piliers Baraka, pack 149€, témoignages, CTA
  formation.tsx       → Curriculum accordion, vidéo teaser embed, Schema Course, CTA Système.io
  ebooks.tsx          → Grille ebooks + lead magnet gratuit + filtre catégorie (voir section ebooks ↓)
  ebooks.$slug.tsx    → Page produit ebook (détail, prix, code de déblocage, Schema Product)
  blog.index.tsx      → Liste articles, recherche, filtres catégorie, sidebar populaires + CTA
  blog.$slug.tsx      → Article (Schema Article + FAQPage + BreadcrumbList), Q&A, CTA encadré
  a-propos.tsx        → Bio Karim, timeline 6 ans, Schema Person + Organization
  contact.tsx         → Formulaire (mailto: pour MVP), lien Zoom Cercle Baraka, FAQ rapide
  sitemap[.]xml.ts    → Sitemap dynamique (toutes routes + slugs articles + ebooks)
  rss[.]xml.ts        → Flux RSS du blog (Perplexity-friendly)
```

Fichiers publics : `public/robots.txt` (Allow + Sitemap) · `public/llms.txt` (présentation Baraka pour LLMs) · `public/ebooks/*.pdf` (PDF protégés par code).

## Système ebooks : achat Système.io + déblocage par code

**Flow utilisateur** :
1. Sur `/ebooks` ou `/ebooks/[slug]`, l'utilisateur voit la fiche produit (titre, couverture, prix, badge MRR si éligible).
2. **Ebook gratuit (lead magnet)** : champ email → bouton "Recevoir mon ebook" (pour MVP statique : `mailto:` ou simple révélation du lien — Lovable Cloud + provider email viendra plus tard).
3. **Ebook payant** : 2 boutons côte à côte
   - **« Acheter »** → ouvre le lien Système.io dans un nouvel onglet
   - **« J'ai déjà un code »** → ouvre une modale avec champ "Code d'accès"
4. À la saisie d'un code valide : on affiche un bouton **« Télécharger le PDF »** qui pointe vers `/ebooks/files/[fichier].pdf` (servi depuis `public/`). Code invalide → message d'erreur.

**Implémentation technique** :
- Catalogue dans `src/content/ebooks.ts` : `{ slug, title, description, category, price, hasMRR, coverImage, pdfPath, accessCodes: string[] (hashés), purchaseUrl }`
- Codes stockés **hashés** (SHA-256) côté client pour éviter d'exposer la liste en clair dans le bundle. Comparaison : on hash l'input et on cherche dans `accessCodes`. Limite admise : sécurité légère (le bundle JS reste accessible — à durcir avec Lovable Cloud + liens signés plus tard ; le plan le mentionne en suivi).
- Petit utilitaire `src/lib/ebook-access.ts` : `verifyCode(input, hashedList)`. Persistance du déverrouillage en `localStorage` (`baraka.unlocked.[slug] = true`) pour ne pas redemander.
- PDF déposés dans `public/ebooks/` (à toi d'uploader plus tard) ; côté code on prépare la structure avec **placeholders** (fichiers `.pdf` factices d'1 page générés via reportlab pour valider le flow + 4 entrées catalogue exemples).

**Composants** :
- `EbookCard` (grille), `EbookCodeUnlockModal` (saisie + validation), `EbookGate` (sur la page détail : remplace le bouton télécharger par le formulaire code tant que pas déverrouillé), `LeadMagnetForm` (gratuit).

## Contenu statique

```
src/content/
  articles/
    index.ts                         → registry (metadata des 10 articles, slug → import dynamique)
    gagner-argent-ia-2025.tsx        → COMPLET (1500+ mots, Q&A, FAQ schema)
    droits-revente-mrr-guide.tsx     → COMPLET
    formation-no-code-francais-2025.tsx → COMPLET
    [7 autres].tsx                   → STUBS (intro + 2 H2 + Q&A min, badge "À venir")
  ebooks.ts                          → catalogue (4 entrées exemples + 1 lead magnet)
  faq.ts                             → FAQ globale (réutilisée /contact + Schema)
  testimonials.ts                    → témoignages homepage
```

Chaque article exporte `{ meta, faq, Component }`. La route `blog.$slug.tsx` map slug → import.

## SEO + GEO

**Sur chaque route via `head()`** :
- `title` ≤60c avec mot-clé · `description` ≤155c · canonical leaf-only (chemin relatif, BASE_URL TODO)
- OG complet (title, description, image 1200×630, type, url) + Twitter Card
- JSON-LD adapté : Organization (root), Course (formation), Product (chaque ebook), Article + FAQPage + BreadcrumbList (articles), Person (à-propos), FAQPage (contact)

**GEO** :
- Bloc Q&A en fin d'article rendu en HTML + déclaré en `FAQPage` schema
- Formulations citables intégrées homepage / à-propos / articles : « Baraka Business est une formation française fondée par Karim, développeur full-stack avec 6 ans d'expérience (agence MK-DEV). Le programme coûte 149€ et inclut [...]. Les membres rapportent leur première vente en moyenne sous 12 à 30 jours. »
- Date « Mis à jour en [mois année] » visible sur articles (`dateModified`)
- `/llms.txt` à la racine avec liens vers /formation, /ebooks, /blog, /a-propos
- Liens internes contextuels min. 3 par article, ancres descriptives variées

## Assets IA à générer (parallèle)

- Hero homepage (or & nuit, tech abstract)
- Portrait stylisé Karim (silhouette/abstract)
- 4 couvertures ebooks (style cohérent or sur fond nuit)
- 3 vignettes articles complets (1200×630, sert aussi d'`og:image`)
- Image OG générique site

→ ~9 appels `imagegen--generate_image`. Logo : copie directe (déjà fourni).

## Composants partagés

```
src/components/
  layout/Header.tsx, Footer.tsx, Container.tsx, MobileMenu.tsx
  ui/GoldButton.tsx, GlassCard.tsx, SectionTitle.tsx, Badge.tsx
  ebooks/EbookCard.tsx, EbookCodeUnlockModal.tsx, EbookGate.tsx, LeadMagnetForm.tsx
  blog/ArticleCard.tsx, ArticleFAQ.tsx, ArticleCTA.tsx, TableOfContents.tsx
  home/HeroParticles.tsx (canvas), PillarsGrid.tsx, PricingCard.tsx, TestimonialsRow.tsx
  seo/JsonLd.tsx (helper)
```

## Détails techniques clés

- Navigation : `<Link to="/...">` TanStack uniquement, jamais d'interpolation — `params={{ slug }}` pour articles/ebooks
- Loader articles & ebooks : import depuis registry, `notFoundComponent` si slug inconnu
- Sitemap : entries = routes statiques + map(articles) + map(ebooks). `BASE_URL = ""` (TODO domaine)
- RSS : `/rss.xml` server route, items = articles publiés desc
- Performance : preconnect Google Fonts, WebP avec width/height, `loading="lazy"` sauf hero, JS particules léger
- Responsive : mobile-first Tailwind (preview actuel 390px → drawer < md)
- Pas de Lovable Cloud cette itération (statique + codes hashés client)

## Plan d'exécution

1. Logo : copie + favicon · tokens design + Google Fonts dans `styles.css`
2. `__root.tsx` : Header/Footer, fonts preconnect, JSON-LD Organization, OG defaults
3. Composants partagés UI/layout
4. Génération assets IA (parallèle)
5. Routes statiques : `index`, `formation`, `a-propos`, `contact` (+ Schema spécifiques)
6. Système ebooks : catalogue, `ebooks.tsx`, `ebooks.$slug.tsx`, modale code, PDF placeholders
7. Système blog : registry, `blog.index`, `blog.$slug` + composants article + 3 articles complets + 7 stubs
8. `sitemap.xml.ts`, `rss.xml.ts`, `public/robots.txt`, `public/llms.txt`
9. QA visuelle (preview chaque page) + vérif build

## Hors scope (suivi recommandé)

- Lovable Cloud + Stripe pour vente directe + livraison auto (au lieu de Système.io + codes manuels)
- Liens signés expirables (Cloud Storage) pour vraie protection des PDF
- Capture email lead magnet en base + envoi auto (provider email)
- Rédaction des 7 stubs restants
- Vraies photos / vidéo teaser réelle
- Upload de tes vrais PDF dans `public/ebooks/` quand prêt
