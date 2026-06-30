import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, FileText, Play } from "lucide-react";
import { BrandIcon } from "@/components/brand-icons";
import { PageShell } from "@/components/site-shell";
import { developerProof, pillars, seo, siteLinks } from "@/content/genesismesh";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: "/genesismesh",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/genesismesh",
    siteName: "Connectorzzz Dev",
    images: [
      {
        url: "/images/marketing/social-card.png",
        width: 1200,
        height: 630,
        alt: "Genesis Mesh portable trust for sovereign systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/marketing/social-card.png"],
  },
};

const routeCards = [
  {
    title: "SDKs",
    href: "/genesismesh/sdks",
    text: "Use Genesis Mesh from Go, TypeScript, and .NET.",
    icon: Code2,
  },
  {
    title: "Videos",
    href: "/genesismesh/videos",
    text: "Watch the current public campaign video library.",
    icon: Play,
  },
  {
    title: "Articles",
    href: "/genesismesh/articles",
    text: "Read long-form campaign writing from Patreon.",
    icon: FileText,
  },
];

export default function GenesisMeshPage() {
  const TrustIcon = developerProof[0].icon;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: "Genesis Mesh",
    description: seo.description,
    codeRepository: siteLinks.githubCore,
    url: siteLinks.genesisMesh,
    programmingLanguage: ["Python", "Go", "TypeScript", "C#"],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/images/brand/background.png"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070807_0%,rgba(7,8,7,.94)_48%,rgba(7,8,7,.62)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:min-h-[680px] lg:grid-cols-[1fr_.95fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-md border border-[#d9ff61]/25 bg-[#d9ff61]/10 px-3 py-2 text-sm font-semibold text-[#d9ff61]">
              Portable trust for sovereign systems
            </p>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.02] text-white sm:text-6xl">
              Genesis Mesh
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Open infrastructure for recognition, revocation, signed evidence, and
              protocol interoperability across independent operators.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteLinks.genesisMesh}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d9ff61] px-6 text-sm font-bold text-zinc-950 transition hover:bg-white"
              >
                Open product site
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                href={siteLinks.githubCore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-6 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/15"
              >
                <BrandIcon name="github" className="h-5 w-5" />
                View source
              </a>
            </div>
          </div>
          <div className="relative rounded-md border border-white/10 bg-[#0d0f0c]/90 p-6 shadow-2xl shadow-black/40">
            <div className="absolute -inset-8 -z-10 rounded-full border border-[#d9ff61]/10" />
            <div className="grid gap-4">
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d9ff61]">
                      Trust lifecycle
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Recognize, verify, revoke.
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#d9ff61] text-zinc-950">
                    <TrustIcon size={24} aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {["Identity", "Evidence", "Revocation"].map((label, index) => (
                    <div key={label} className="rounded-md border border-white/10 bg-[#070807] p-3">
                      <div className="mb-3 h-1.5 rounded-full bg-[#d9ff61]" style={{ width: `${55 + index * 18}%` }} />
                      <p className="text-xs font-semibold text-white">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {developerProof.map((item) => (
                  <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-zinc-950">
                      <item.icon size={20} aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-2 text-xs leading-5 text-zinc-400">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-md border border-white/10 bg-[#070807] p-4">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                  {[
                    ["Operator", "keeps local authority"],
                    ["Signed treaty", "carries recognition"],
                    ["Verifier", "checks trust offline"],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-md bg-white/[0.04] p-4">
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">{text}</p>
                      <div className="mt-4 h-1.5 w-16 rounded-full bg-[#d9ff61]" />
                    </div>
                  ))}
                  <ArrowRight className="hidden text-[#d9ff61] sm:block" size={18} aria-hidden="true" />
                  <ArrowRight className="hidden text-[#d9ff61] sm:block" size={18} aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">
            Core thesis
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Trust should move without authority transfer.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#d9ff61] text-zinc-950">
                <pillar.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {routeCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-md border border-white/10 bg-[#0d0f0c] p-6 transition hover:border-[#d9ff61]/70"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-zinc-950 transition group-hover:bg-[#d9ff61]">
                    <card.icon size={24} aria-hidden="true" />
                  </div>
                  <ArrowRight className="text-zinc-500 transition group-hover:text-[#d9ff61]" size={18} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{card.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
