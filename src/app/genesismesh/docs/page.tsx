import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Code2, GitBranch } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { siteLinks } from "@/content/genesismesh";

export const metadata: Metadata = {
  title: "Genesis Mesh Docs",
  description:
    "Documentation entry points for Genesis Mesh protocol concepts, source code, SDKs, and implementation notes.",
  alternates: {
    canonical: "/genesismesh/docs",
  },
  openGraph: {
    title: "Genesis Mesh Docs",
    description:
      "Documentation entry points for Genesis Mesh protocol concepts, source code, SDKs, and implementation notes.",
    url: "/genesismesh/docs",
    siteName: "Connectorzzz Dev",
    images: [
      {
        url: "/images/marketing/social-card.png",
        width: 1200,
        height: 630,
        alt: "Genesis Mesh documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genesis Mesh Docs",
    description: "Documentation entry points for Genesis Mesh protocol concepts and SDKs.",
    images: ["/images/marketing/social-card.png"],
  },
};

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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">
            Docs
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Read the protocol and implementation notes.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Start with the repository documentation, then move into the core source and
            SDKs when you are ready to integrate.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {docsCards.map((card) => {
            const external = card.href.startsWith("http");

            return (
              <a
                key={card.href}
                href={card.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group rounded-md border border-white/10 bg-[#0d0f0c] p-6 transition hover:border-[#d9ff61]/70"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-zinc-950 transition group-hover:bg-[#d9ff61]">
                    <card.icon size={24} aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="text-zinc-500 transition group-hover:text-[#d9ff61]" size={18} />
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
