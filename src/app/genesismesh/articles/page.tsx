import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/brand-icons";
import { PageShell } from "@/components/site-shell";
import { siteLinks } from "@/content/genesismesh";
import { getPatreonArticles } from "@/lib/content-feeds";

export const metadata: Metadata = {
  title: "Genesis Mesh Articles | Connectorzzz Dev",
  description:
    "Genesis Mesh articles and long-form campaign writing on portable trust, sovereign systems, and verifiable trust state.",
  alternates: {
    canonical: "/genesismesh/articles",
  },
};

export default async function ArticlesPage() {
  const articles = await getPatreonArticles();

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">
            Patreon
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Genesis Mesh articles
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Long-form writing on portable trust, sovereign systems, recognition,
            revocation, and verifiable trust state.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-md border border-white/10 bg-[#0d0f0c] p-6 transition hover:border-[#d9ff61]/70"
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
        <div className="mt-10 rounded-md border border-white/10 bg-white/[0.04] p-6">
          <p className="text-lg font-semibold text-white">Follow the full article stream</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
            Patreon is the canonical publishing channel for articles and supporter updates.
            This site indexes the important entries and points readers to the source.
          </p>
          <a
            href={siteLinks.patreonPosts}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#d9ff61] px-5 text-sm font-bold text-zinc-950 transition hover:bg-white"
          >
            Open Patreon posts
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
