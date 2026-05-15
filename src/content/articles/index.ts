import type { ComponentType } from "react";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified: string;
  category: string;
  readingTime: string;
  keywords: string[];
  ogImage: string;
  status: "complet" | "stub";
};

export type ArticleFAQ = { q: string; a: string }[];

export type ArticleModule = {
  meta: ArticleMeta;
  faq: ArticleFAQ;
  Component: ComponentType;
};

import * as iaMoney from "./gagner-argent-ia-2025";
import * as mrrGuide from "./droits-revente-mrr-guide";
import * as noCode from "./formation-no-code-francais-2025";
import * as stubProspection from "./automatiser-prospection-ia";
import * as stubSaaS from "./creer-saas-no-code";
import * as stubAffiliate from "./affiliation-ia-2026";
import * as stubFreelance from "./freelance-ia-debutant";
import * as stubCommunaute from "./construire-communaute-discord";
import * as stubVideo from "./creer-video-ia-tiktok";
import * as stubEmail from "./email-marketing-ia";

export const articles: ArticleModule[] = [
  iaMoney,
  mrrGuide,
  noCode,
  stubProspection,
  stubSaaS,
  stubAffiliate,
  stubFreelance,
  stubCommunaute,
  stubVideo,
  stubEmail,
] as unknown as ArticleModule[];

export function getArticle(slug: string): ArticleModule | undefined {
  return articles.find((a) => a.meta.slug === slug);
}

export const articlesByDate = [...articles].sort(
  (a, b) => +new Date(b.meta.date) - +new Date(a.meta.date),
);
