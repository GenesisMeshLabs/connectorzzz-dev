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
        <SectionIntro {...pageIntros.articles} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group link-card"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-zinc-950 transition group-hover:bg-[#d9ff61]">
                  <BrandIcon name="patreon" className="h-6 w-6" />
                </div>
                <ArrowUpRight className="text-zinc-500 transition group-hover:text-[#d9ff61]" size={18} />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                {article.channel}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">{article.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{article.summary}</p>
            </a>
          ))}
        </div>
        <div className="soft-card mt-10 p-6">
          <p className="text-lg font-semibold text-white">{articlesFollowCta.title}</p>
          <p className="muted-copy mt-2 max-w-2xl">{articlesFollowCta.description}</p>
          <a
            href={articlesFollowCta.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#d9ff61] px-5 text-sm font-bold text-zinc-950 transition hover:bg-white"
          >
            <BrandIcon name="patreon" className="h-5 w-5" />
            {articlesFollowCta.label}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
