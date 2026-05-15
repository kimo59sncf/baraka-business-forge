import articleImg from "@/assets/article-mrr.jpg";
import { Link } from "@tanstack/react-router";

export const meta = {
  slug: "droits-revente-mrr-guide",
  title: "Droits de revente (MRR) : le guide complet 2026 en français",
  description:
    "Tout sur les Master Resell Rights : définition, cadre légal, sources fiables, stratégies de pricing et tunnel de vente. Le guide MRR de référence en français.",
  date: "2026-04-08",
  dateModified: "2026-05-12",
  category: "Business",
  readingTime: "9 min",
  keywords: [
    "MRR",
    "droits de revente",
    "master resell rights",
    "produits digitaux",
    "revenu passif",
  ],
  ogImage: articleImg,
  status: "complet" as const,
};

export const faq = [
  {
    q: "Qu'est-ce que les droits de revente (MRR) ?",
    a: "MRR signifie Master Resell Rights, ou droits de revente maîtres. C'est une licence qui te permet de revendre légalement un produit digital (ebook, formation, template) en conservant 100% des revenus, et parfois de transférer ce droit à tes propres clients.",
  },
  {
    q: "Le MRR est-il légal en France ?",
    a: "Oui, à condition d'acheter le produit auprès d'une source fiable disposant des droits originaux et de respecter les termes de la licence. Le MRR ne dispense pas des obligations légales (mentions, TVA, droit de rétractation, RGPD).",
  },
  {
    q: "Combien peut-on gagner avec un produit MRR ?",
    a: "Un produit MRR vendu entre 27€ et 97€, avec un tunnel de vente correct, génère couramment entre 500€ et 5 000€ par mois la première année, selon le trafic et la qualité du copywriting.",
  },
  {
    q: "Quelle différence entre MRR, PLR et droits classiques ?",
    a: "PLR (Private Label Rights) permet de modifier et signer le produit. MRR autorise la revente sans modification. Les droits classiques limitent à un usage personnel. Vérifie toujours la licence avant achat.",
  },
];

export function Component() {
  return (
    <>
      <p className="lead">
        Les droits de revente — ou <strong>MRR (Master Resell Rights)</strong> —
        sont une des stratégies business les plus puissantes pour bâtir un
        revenu digital sans créer son propre produit. Voici le guide complet,
        cadré pour le marché francophone.
      </p>

      <h2>Qu'est-ce que le MRR exactement ?</h2>
      <p>
        Le MRR est une licence commerciale attachée à un produit digital
        (ebook, formation, pack de templates). Elle te donne le droit de
        revendre le produit en conservant <strong>100% des revenus</strong>. La
        plupart des licences MRR autorisent aussi tes clients à revendre — un
        effet de levier rare.
      </p>

      <h2>MRR vs PLR vs droits classiques</h2>
      <ul>
        <li>
          <strong>PLR</strong> (Private Label Rights) : tu peux modifier,
          renommer, signer le produit comme le tien.
        </li>
        <li>
          <strong>MRR</strong> : revente du produit en l'état, en gardant
          100% des marges.
        </li>
        <li>
          <strong>Droits classiques</strong> : usage personnel uniquement,
          aucune revente.
        </li>
      </ul>

      <h2>Est-ce légal en France ?</h2>
      <p>
        Oui, dès lors que la licence est explicite et que la source dispose
        bien des droits originaux. Tu restes soumis aux obligations classiques :
        mentions légales, TVA, droit de rétractation européen (14 jours),
        RGPD pour la collecte d'emails.
      </p>

      <h2>Où acheter des produits MRR fiables ?</h2>
      <p>
        Privilégie les créateurs francophones reconnus, les places de marché
        spécialisées sérieuses et les producteurs qui publient leur licence
        complète. Évite les bundles trop bon marché : qualité et licence
        douteuses.
      </p>
      <p>
        Notre catalogue d'
        <Link to="/ebooks" className="text-primary hover:underline">
          ebooks Baraka
        </Link>{" "}
        inclut des produits sous licence MRR vérifiée, livrés avec leur kit de
        relance email.
      </p>

      <h2>Stratégie de pricing</h2>
      <p>
        Le sweet spot du MRR francophone se situe entre 27€ et 97€. En dessous,
        la perception de valeur baisse. Au-dessus, ton tunnel doit être très
        travaillé (vidéos, garanties, témoignages).
      </p>

      <h2>Tunnel de vente type</h2>
      <ol>
        <li>Page de capture (lead magnet : un mini-ebook gratuit).</li>
        <li>Séquence email 5 jours (problème → solution → preuve → offre).</li>
        <li>Page de vente (titre clair, bénéfices, FAQ, garantie 14 jours).</li>
        <li>Up-sell (formation à 149€ ou coaching).</li>
        <li>Livraison automatique + relance "as a service".</li>
      </ol>

      <h2>Erreurs fréquentes à éviter</h2>
      <ul>
        <li>Acheter en dessous de 20€ un produit "MRR" sans vérifier la licence.</li>
        <li>Vendre à perte pour gagner en volume — la marge MRR est ton actif.</li>
        <li>Ignorer la fiscalité : la micro-entreprise reste un excellent point de départ.</li>
      </ul>

      <p>
        Pour aller plus loin, le module MRR complet est inclus dans la{" "}
        <Link to="/formation" className="text-primary hover:underline">
          formation Baraka Business
        </Link>
        .
      </p>
    </>
  );
}
