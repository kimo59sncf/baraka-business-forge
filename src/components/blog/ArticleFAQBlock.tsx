import type { ArticleFAQ } from "@/content/articles";

export function ArticleFAQBlock({ faq }: { faq: ArticleFAQ }) {
  if (!faq?.length) return null;
  return (
    <section className="mt-16 rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
      <h2 className="font-display text-2xl">Questions fréquentes</h2>
      <div className="mt-5 divide-y divide-border/60">
        {faq.map((qa) => (
          <details key={qa.q} className="group py-4">
            <summary className="cursor-pointer list-none text-base font-medium text-foreground marker:hidden">
              <span className="mr-2 text-primary">+</span>
              {qa.q}
            </summary>
            <p className="mt-3 pl-5 text-sm text-muted-foreground">{qa.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
