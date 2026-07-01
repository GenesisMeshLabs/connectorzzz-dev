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
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className={[
                "group relative flex min-h-72 overflow-hidden rounded-md border border-white/10 bg-[#0d0f0c] p-6 transition hover:border-[#d9ff61]/70",
                index === 0 ? "md:col-span-2 xl:col-span-2" : "",
              ].join(" ")}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#d9ff61]/80" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#d9ff61]/10 bg-[#d9ff61]/5 transition group-hover:bg-[#d9ff61]/10" />
              <div className="relative flex w-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#d9ff61]">
                      Article {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      {article.channel}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-zinc-950 transition group-hover:bg-[#d9ff61]">
                    <BrandIcon name="patreon" className="h-5 w-5" />
                  </div>
                </div>
                <h2
                  className={[
                    "mt-8 font-semibold text-white",
                    index === 0 ? "max-w-3xl text-3xl sm:text-4xl" : "text-xl",
                  ].join(" ")}
                >
                  {article.title}
                </h2>
                <p
                  className={[
                    "mt-4 text-zinc-400",
                    index === 0 ? "max-w-3xl text-base leading-7" : "text-sm leading-6",
                  ].join(" ")}
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
