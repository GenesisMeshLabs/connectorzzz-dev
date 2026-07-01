import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/brand-icons";
import { PageShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/ui";
import { pageMetadata } from "@/content/metadata";
import { articlesFollowCta, pageIntros } from "@/content/pages";
import { getPatreonArticles } from "@/lib/content-feeds";

export const metadata: Metadata = pageMetadata({
  title: "Genesis Mesh Articles",
  description:
    "Genesis Mesh articles and long-form campaign writing on portable trust, sovereign systems, and verifiable trust state.",
  path: "/genesismesh/articles",
  imageAlt: "Genesis Mesh articles",
});

export default async function ArticlesPage() {
  const articles = await getPatreonArticles();

  return (
    <PageShell>
      <section className="page-section">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionIntro {...pageIntros.articles} />
          <a
            href={articlesFollowCta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d9ff61] px-5 text-sm font-bold text-zinc-950 transition hover:bg-white"
          >
            <BrandIcon name="patreon" className="h-5 w-5" />
            {articlesFollowCta.label}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex min-h-72 overflow-hidden rounded-md border border-white/10 bg-[#0d0f0c] p-6 transition hover:border-[#d9ff61]/70"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#d9ff61]/80" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#d9ff61]/12 bg-white/[0.035] transition group-hover:bg-[#d9ff61]/8" />
              <div className="absolute right-3 top-5 flex h-11 w-11 items-center justify-center rounded-md border border-[#d9ff61]/25 bg-[#d9ff61]/15 text-[#d9ff61] shadow-lg shadow-black/25 backdrop-blur-sm transition group-hover:bg-[#d9ff61]/25">
                <BrandIcon name="patreon" className="h-5 w-5" />
              </div>
              <div className="relative flex w-full flex-col">
                <div className="pr-12">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#d9ff61]">
                    Article {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {article.channel}
                  </p>
                </div>
                <h2
                  className="mt-8 text-xl font-semibold text-white"
                >
                  {article.title}
                </h2>
                <p
                  className="mt-4 text-sm leading-6 text-zinc-400"
                >
                  {article.summary}
                </p>
                <span className="mt-auto inline-flex pt-8 text-sm font-bold text-[#d9ff61]">
                  Read article
                  <ArrowUpRight className="ml-2" size={16} aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
