import { createFileRoute } from "@tanstack/react-router";
import { articlesByDate } from "@/content/articles";
import { SITE } from "@/lib/site";

function esc(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: () => {
        const items = articlesByDate.map((a) => `
    <item>
      <title>${esc(a.meta.title)}</title>
      <link>${SITE.baseUrl}/blog/${a.meta.slug}</link>
      <guid>${SITE.baseUrl}/blog/${a.meta.slug}</guid>
      <pubDate>${new Date(a.meta.date).toUTCString()}</pubDate>
      <description>${esc(a.meta.description)}</description>
      <category>${esc(a.meta.category)}</category>
    </item>`).join("");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>${esc(SITE.name)} — Blog</title>
  <link>${SITE.baseUrl}/blog</link>
  <description>${esc(SITE.defaultDescription)}</description>
  <language>fr-FR</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
</channel></rss>`;
        return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
      },
    },
  },
});
