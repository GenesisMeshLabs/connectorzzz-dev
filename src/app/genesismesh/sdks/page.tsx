import type { Metadata } from "next";
import { ArrowUpRight, Code2, Star } from "lucide-react";
import { BrandIcon } from "@/components/brand-icons";
import { PageShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/ui";
import { sdkCards, siteLinks } from "@/content/genesismesh";
import { pageMetadata } from "@/content/metadata";
import { pageIntros } from "@/content/pages";

export const metadata: Metadata = pageMetadata({
  title: "Genesis Mesh SDKs",
  description:
    "Genesis Mesh SDKs for Go, TypeScript, and .NET developers integrating portable trust into real systems.",
  path: "/genesismesh/sdks",
  imageAlt: "Genesis Mesh SDKs",
});

export default function SdksPage() {
  return (
    <PageShell>
      <section className="page-section">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionIntro {...pageIntros.sdk} />
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a
              href={siteLinks.githubOrg}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d9ff61] px-5 text-sm font-bold text-zinc-950 transition hover:bg-white"
            >
              <BrandIcon name="github" className="h-5 w-5" />
              Open repositories
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={siteLinks.githubCoreStargazers}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 text-sm font-bold text-white transition hover:border-[#d9ff61]/60 hover:bg-white/15"
            >
              <Star size={17} aria-hidden="true" />
              Star on GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {sdkCards.map((sdk) => (
            <a
              key={sdk.href}
              href={sdk.href}
              target="_blank"
              rel="noreferrer"
              className="group link-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white text-zinc-950 transition group-hover:bg-[#d9ff61]">
                  <sdk.icon size={28} aria-hidden="true" />
                </div>
                <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-zinc-300">
                  {sdk.language}
                </span>
              </div>
              <h2 className="mt-6 text-xl font-semibold text-white">{sdk.name}</h2>
              <p className="mt-2 font-mono text-xs text-[#d9ff61]">{sdk.repo}</p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{sdk.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#d9ff61]">
                View repository
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        <div className="soft-card mt-10 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#d9ff61] text-zinc-950">
            <Code2 size={24} aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-xl font-semibold text-white">Protocol first, SDK assisted.</h2>
          <p className="muted-copy mt-3 max-w-3xl">
            The SDKs are entry points into the same trust API and evidence model. They should
            stay aligned with conformance, recognition, revocation, and audit semantics across
            languages.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
