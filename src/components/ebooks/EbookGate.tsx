import { useEffect, useState } from "react";
import { isUnlocked, markUnlocked, verifyCode } from "@/lib/ebook-access";
import type { Ebook } from "@/content/ebooks";

type Props = { ebook: Ebook };

/**
 * Gate complete pour la page produit ebook :
 * - bouton "Acheter" → Système.io (nouvel onglet)
 * - bouton "J'ai déjà un code" → champ + validation SHA-256
 * - une fois déverrouillé : bouton "Télécharger le PDF"
 * - persistance via localStorage
 * - cas spécial price === 0 : code "FREE" suffit (lead magnet)
 */
export function EbookGate({ ebook }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [showCodeForm, setShowCodeForm] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setUnlocked(isUnlocked(ebook.slug));
  }, [ebook.slug]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const ok = await verifyCode(code, ebook.accessCodes);
      if (!ok) {
        setError("Code invalide. Vérifie l'email reçu après ton achat.");
        return;
      }
      markUnlocked(ebook.slug);
      setUnlocked(true);
    } finally {
      setBusy(false);
    }
  }

  if (ebook.comingSoon) {
    return (
      <div className="glass rounded-2xl p-6">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-3xl text-gradient-gold">
            {ebook.price === 0 ? "Gratuit" : `${ebook.price}€`}
          </span>
          <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Bientôt disponible
          </span>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          Cet ebook est en cours de finalisation. Inscris-toi à la newsletter
          pour être prévenu·e dès sa sortie.
        </p>
        <a
          href={SITE_PURCHASE_FALLBACK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-card"
        >
          Voir la formation complète
        </a>
      </div>
    );
  }

  if (unlocked) {
    return (
      <div className="glass rounded-2xl p-6">
        <p className="text-sm text-accent">✓ Accès débloqué</p>
        <h3 className="mt-1 font-display text-2xl">Ton ebook est prêt</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Le lien restera disponible sur ce navigateur.
        </p>
        <a
          href={ebook.pdfPath}
          download
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-gold px-6 py-3 font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.01]"
        >
          ⬇ Télécharger le PDF ({ebook.pages} pages)
        </a>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-baseline justify-between">
        <span className="font-display text-3xl text-gradient-gold">
          {ebook.price === 0 ? "Gratuit" : `${ebook.price}€`}
        </span>
        <span className="text-xs text-muted-foreground">
          PDF · {ebook.pages} pages
        </span>
      </div>

      {ebook.price > 0 ? (
        <div className="mt-5 space-y-3">
          <a
            href={ebook.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-gold px-6 py-3 font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.01]"
          >
            Acheter sur Système.io
          </a>
          <button
            type="button"
            onClick={() => setShowCodeForm((v) => !v)}
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-card"
          >
            J'ai déjà un code d'accès
          </button>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          <p className="text-sm text-muted-foreground">
            Cet ebook est offert. Saisis le code <code className="rounded bg-card px-1.5 py-0.5 text-primary">FREE</code> pour
            débloquer le téléchargement immédiatement.
          </p>
          <button
            type="button"
            onClick={() => setShowCodeForm(true)}
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-gold px-6 py-3 font-semibold text-primary-foreground shadow-gold"
          >
            Débloquer le téléchargement
          </button>
        </div>
      )}

      {showCodeForm && (
        <form onSubmit={onSubmit} className="mt-5 space-y-3 border-t border-border pt-5">
          <label htmlFor="code" className="block text-sm font-medium">
            Code d'accès
          </label>
          <input
            id="code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={64}
            autoComplete="off"
            placeholder="Ex : BARAKA2026"
            className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 font-mono text-sm uppercase outline-none focus:border-primary"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={busy || code.trim().length < 3}
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background disabled:opacity-50"
          >
            {busy ? "Vérification…" : "Valider"}
          </button>
        </form>
      )}
    </div>
  );
}
