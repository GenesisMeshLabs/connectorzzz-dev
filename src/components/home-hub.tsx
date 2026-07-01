import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, Code2, FileText, Network, Play, ShieldCheck } from "lucide-react";
import { BrandIcon } from "@/components/brand-icons";
import { ButtonLink, SectionIntro } from "@/components/ui";
import { homeHubContent } from "@/content/pages";

const featureStrip = [
  { title: "Portable Trust", text: "Trust that travels across boundaries.", icon: ShieldCheck },
  { title: "Sovereign Systems", text: "No central authority over operators.", icon: Network },
  { title: "Verifiable Evidence", text: "Every decision leaves a trail.", icon: Boxes },
  { title: "Developer First", text: "Open protocol, source, and SDKs.", icon: Code2 },
];

const hubCards = [
  {
    title: "Genesis Mesh",
    href: "/genesismesh",
    text: "Portable trust infrastructure for sovereign systems, operators, services, and agents.",
    icon: Network,
  },
  {
    title: "Start here",
    href: "/genesismesh/start-here",
    text: "A short explainer for people new to the Genesis Mesh thesis.",
    icon: ShieldCheck,
  },
  {
    title: "SDKs",
    href: "/genesismesh/sdks",
    text: "Go, TypeScript, and .NET client paths for real integration work.",
    icon: Code2,
  },
  {
    title: "Videos",
    href: "/genesismesh/videos",
    text: "All public campaign videos from the GenesisMesh Labs YouTube channel.",
    icon: Play,
  },
  {
    title: "Articles",
    href: "/genesismesh/articles",
    text: "Long-form campaign articles and founder notes.",
    icon: FileText,
  },
];

export function HomeHub() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <Image
          src="/images/brand/background.png"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(217,255,97,.14),transparent_34%),linear-gradient(90deg,#070807_0%,rgba(7,8,7,.92)_45%,rgba(7,8,7,.72)_100%)]" />
        <div className="site-container relative grid items-center gap-12 py-16 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1fr_.92fr] lg:items-start lg:pt-28">
          <div className="max-w-3xl">
            <p className="inline-flex max-w-full rounded-md border border-[#d9ff61]/45 bg-[#d9ff61]/18 px-3 py-2 text-sm font-bold text-[#d9ff61] shadow-lg shadow-black/20">
              {homeHubContent.hero.eyebrow}
            </p>
            <h1 className="mt-7 max-w-full hyphens-none text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {homeHubContent.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              {homeHubContent.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={homeHubContent.hero.primaryCta.href}>
                {homeHubContent.hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={homeHubContent.hero.secondaryCta.href}
                external
                variant="secondary"
                icon={<BrandIcon name="github" className="h-5 w-5" />}
              >
                {homeHubContent.hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="relative hidden pt-2 lg:block">
            <div className="absolute -inset-8 rounded-full border border-[#d9ff61]/10" />
            <div className="relative rounded-md border border-white/10 bg-[#0d0f0c]/90 p-6 shadow-2xl shadow-black/40">
              <div className="grid min-h-[430px] grid-cols-2 gap-4">
                {homeHubContent.trustNodes.map(([title, text], index) => (
                  <div
                    key={title}
                    className={[
                      "relative rounded-md border border-white/10 bg-white/[0.04] p-5",
                      index === 1 || index === 2 ? "translate-y-10" : "",
                    ].join(" ")}
                  >
                    <div className="mb-8 h-1.5 w-14 rounded-full bg-[#d9ff61]" />
                    <p className="text-lg font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
                  </div>
                ))}
              </div>
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9ff61]/30 bg-[#d9ff61]/10" />
              <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#d9ff61] shadow-lg shadow-black/30" />
              <span className="absolute left-1/2 top-[calc(50%+2.25rem)] -translate-x-1/2 rounded-md border border-[#d9ff61]/30 bg-[#10120f]/95 px-3 py-1.5 text-xs font-semibold text-[#d9ff61] shadow-lg shadow-black/30">
                {homeHubContent.trustStateLabel}
              </span>
              {homeHubContent.trustLabels.map(
                ({ label, className }) => (
                  <span
                    key={label}
                    className={[
                      "absolute rounded-md border border-white/10 bg-[#10120f]/95 px-3 py-2 text-xs font-semibold text-zinc-100 shadow-lg shadow-black/30",
                      className,
                    ].join(" ")}
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="site-container grid gap-0 py-6 md:grid-cols-4">
          {featureStrip.map((item) => (
            <div key={item.title} className="flex gap-4 border-white/10 py-4 md:border-r md:px-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#d9ff61] text-zinc-950">
                <item.icon size={22} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                <p className="mt-1 text-sm leading-5 text-zinc-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <SectionIntro
          eyebrow={homeHubContent.sectionIntro.eyebrow}
          title={homeHubContent.sectionIntro.title}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {hubCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group link-card"
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
      </section>
    </>
  );
}
