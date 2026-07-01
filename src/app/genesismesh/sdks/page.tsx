import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
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

        <div className="soft-card mt-10 grid gap-6 p-6 lg:grid-cols-[.75fr_1fr] lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#d9ff61] text-zinc-950">
              <Code2 size={24} aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-white">
              Protocol first, SDK assisted.
            </h2>
            <p className="muted-copy mt-3">
              Each SDK is an entry point into the same trust API and evidence model.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Conformance stays shared", "Recognition stays portable", "Revocation stays verifiable"].map(
              (item) => (
                <div key={item} className="rounded-md border border-white/10 bg-[#070807] p-4">
                  <CheckCircle2 className="text-[#d9ff61]" size={18} aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-zinc-200">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
