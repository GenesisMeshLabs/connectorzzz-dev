import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Code2, GitBranch } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/ui";
import { siteLinks } from "@/content/genesismesh";
import { pageMetadata } from "@/content/metadata";
import { pageIntros } from "@/content/pages";

export const metadata: Metadata = pageMetadata({
  title: "Genesis Mesh Docs",
  description:
    "Documentation entry points for Genesis Mesh protocol concepts, source code, SDKs, and implementation notes.",
  path: "/genesismesh/docs",
  imageAlt: "Genesis Mesh documentation",
  twitterDescription: "Documentation entry points for Genesis Mesh protocol concepts and SDKs.",
});

const docsCards = [
  {
    title: "Protocol docs",
    href: siteLinks.githubCoreDocs,
    description: "Read the design, development, and protocol notes in the core repository.",
    icon: BookOpen,
  },
  {
    title: "Core source",
    href: siteLinks.githubCore,
    description: "Inspect the Network Authority implementation, APIs, tests, and examples.",
    icon: GitBranch,
  },
  {
    title: "SDK repositories",
    href: "/genesismesh/sdks",
    description: "Use the Go, TypeScript, and .NET SDKs as builder entry points.",
    icon: Code2,
  },
];

export default function DocsPage() {
  return (
    <PageShell>
      <section className="page-section">
        <SectionIntro {...pageIntros.docs} />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {docsCards.map((card) => {
            const external = card.href.startsWith("http");

            return (
              <a
                key={card.href}
                href={card.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group relative overflow-hidden rounded-md border border-white/10 bg-[#0d0f0c] p-6 transition hover:border-[#d9ff61]/70"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#d9ff61]/80" />
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#d9ff61]/25 bg-[#d9ff61]/15 text-[#d9ff61] transition group-hover:bg-[#d9ff61] group-hover:text-zinc-950">
                    <card.icon size={24} aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="text-[#d9ff61] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{card.description}</p>
              </a>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
