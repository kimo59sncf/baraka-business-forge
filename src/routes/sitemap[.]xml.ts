import { createFileRoute } from "@tanstack/react-router";
import { articlesByDate } from "@/content/articles";
import { ebooks } from "@/content/ebooks";
import { SITE } from "@/lib/site";

const STATIC = ["", "/formation", "/ebooks", "/blog", "/a-propos", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = [
          ...STATIC.map((p) => ({ loc: `${SITE.baseUrl}${p}`, lastmod: today, prio: p === "" ? "1.0" : "0.8" })),
          ...articlesByDate.map((a) => ({
            loc: `${SITE.baseUrl}/blog/${a.meta.slug}`,
            lastmod: a.meta.dateModified,
            prio: "0.7",
          })),
          ...ebooks.map((e) => ({
            loc: `${SITE.baseUrl}/ebooks/${e.slug}`,
            lastmod: e.updatedAt,
            prio: "0.7",
          })),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.prio}</priority></url>`).join("\n")}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
