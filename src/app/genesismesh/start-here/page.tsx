import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/ui";
import { pageMetadata } from "@/content/metadata";
import { pageIntros, startHerePoints } from "@/content/pages";

export const metadata: Metadata = pageMetadata({
  title: "Start Here: Genesis Mesh",
  description:
    "A short introduction to Genesis Mesh, portable trust, sovereign systems, recognition, revocation, and verifiable trust state.",
  path: "/genesismesh/start-here",
  imageAlt: "Start here with Genesis Mesh",
  twitterDescription: "A short introduction to Genesis Mesh and portable trust for sovereign systems.",
});

export default function StartHerePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionIntro {...pageIntros.startHere} className="max-w-4xl" />

        <div className="mt-10 grid gap-4">
          {startHerePoints.map((point) => (
            <div key={point} className="surface-card flex gap-4 p-5">
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
