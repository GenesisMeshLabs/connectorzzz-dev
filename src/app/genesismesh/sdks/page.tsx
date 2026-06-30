import type { Metadata } from "next";
import { ArrowUpRight, Code2 } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { sdkCards, siteLinks } from "@/content/genesismesh";

export const metadata: Metadata = {
  title: "Genesis Mesh SDKs | Connectorzzz Dev",
  description:
    "Genesis Mesh SDKs for Go, TypeScript, and .NET developers integrating portable trust into real systems.",
  alternates: {
    canonical: "/genesismesh/sdks",
  },
};

export default function SdksPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">
              SDKs
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Build against the trust layer.
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Genesis Mesh SDKs keep the protocol accessible from the languages teams
              already use for services, tools, infrastructure, and enterprise systems.
            </p>
          </div>
          <a
            href={siteLinks.githubOrg}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d9ff61] px-5 text-sm font-bold text-zinc-950 transition hover:bg-white"
          >
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
              className="group rounded-md border border-white/10 bg-[#0d0f0c] p-6 transition hover:border-[#d9ff61]/70"
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
              <p className="mt-3 text-sm leading-6 text-zinc-400">{sdk.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#d9ff61]">
                View repository
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-md border border-white/10 bg-white/[0.04] p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#d9ff61] text-zinc-950">
            <Code2 size={24} aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-xl font-semibold text-white">Protocol first, SDK assisted.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
            The SDKs are entry points into the same trust API and evidence model. They should
            stay aligned with conformance, recognition, revocation, and audit semantics across
            languages.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
