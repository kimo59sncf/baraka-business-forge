import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { globalFaq } from "@/content/faq";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Baraka Business" },
      { name: "description", content: "Une question sur la formation, les ebooks ou un partenariat ? Écris-nous, réponse sous 48h ouvrées." },
      { property: "og:title", content: "Contact — Baraka Business" },
      { property: "og:url", content: `${SITE.baseUrl}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE.baseUrl}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
    `[Baraka] Message de ${name || "anonyme"}`,
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: globalFaq.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <section className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28">
        <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          Contact
        </span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">
          Une question ? <span className="text-gradient-gold">Écris-nous.</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Réponse sous 48h ouvrées. Pour les membres, le Cercle Baraka reste le
          canal le plus rapide.
        </p>

        <form
          className="mt-10 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto;
          }}
        >
          <div>
            <label htmlFor="name" className="text-sm font-medium">Nom</label>
            <input
              id="name"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-card/40 px-4 py-3 outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-card/40 px-4 py-3 outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea
              id="message"
              required
              maxLength={1000}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-card/40 px-4 py-3 outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-gold px-6 py-3 font-semibold text-primary-foreground shadow-gold sm:w-auto"
          >
            Envoyer le message
          </button>
        </form>

        <div className="mt-16">
          <h2 className="font-display text-2xl">Questions fréquentes</h2>
          <div className="mt-6 divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/40">
            {globalFaq.map((qa) => (
              <details key={qa.q} className="p-5">
                <summary className="cursor-pointer list-none font-medium marker:hidden">
                  <span className="mr-2 text-primary">+</span>{qa.q}
                </summary>
                <p className="mt-3 pl-5 text-sm text-muted-foreground">{qa.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
