import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Start Here: Genesis Mesh",
  description:
    "A short introduction to Genesis Mesh, portable trust, sovereign systems, recognition, revocation, and verifiable trust state.",
  alternates: {
    canonical: "/genesismesh/start-here",
  },
  openGraph: {
    title: "Start Here: Genesis Mesh",
    description:
      "A short introduction to Genesis Mesh and portable trust for sovereign systems.",
    url: "/genesismesh/start-here",
    siteName: "Connectorzzz Dev",
    images: [
      {
        url: "/images/marketing/social-card.png",
        width: 1200,
        height: 630,
        alt: "Start here with Genesis Mesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Here: Genesis Mesh",
    description: "A short introduction to Genesis Mesh and portable trust for sovereign systems.",
    images: ["/images/marketing/social-card.png"],
  },
};

const points = [
  "Systems can connect, but trust usually stops at the boundary.",
  "Genesis Mesh carries trust decisions as signed, verifiable evidence.",
  "Each operator keeps control of its own keys, recognition, revocation, and policies.",
  "SDKs and protocol docs make the same trust model usable from real systems.",
];

export default function StartHerePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">
          Start here
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-white sm:text-5xl">
          Genesis Mesh is portable trust for sovereign systems.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          It is a protocol-oriented trust layer for systems that need to cooperate across
          organizational, runtime, and operator boundaries without handing trust decisions
          to one central owner.
        </p>

        <div className="mt-10 grid gap-4">
          {points.map((point) => (
            <div key={point} className="flex gap-4 rounded-md border border-white/10 bg-[#0d0f0c] p-5">
              <CheckCircle2 className="mt-1 shrink-0 text-[#d9ff61]" size={22} aria-hidden="true" />
              <p className="text-base leading-7 text-zinc-200">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/genesismesh"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d9ff61] px-6 text-sm font-bold text-zinc-950 transition hover:bg-white"
          >
            Explore Genesis Mesh
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="/genesismesh/docs"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-6 text-sm font-bold text-white transition hover:border-[#d9ff61]/70"
          >
            Read docs
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
