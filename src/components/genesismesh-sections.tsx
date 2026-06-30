import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, GitBranch, Play } from "lucide-react";
import {
  articles,
  campaigns,
  developerProof,
  externalChannels,
  heroStats,
  pillars,
  sdkCards,
  siteLinks,
  videos,
} from "@/content/genesismesh";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/brand/background.png"
        alt=""
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#070807_0%,rgba(7,8,7,.86)_38%,rgba(7,8,7,.35)_100%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#d9ff61]/30 bg-[#d9ff61]/10 px-3 py-2 text-sm font-medium text-[#d9ff61]">
            Open infrastructure for portable trust
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Genesis Mesh
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-200">
            Portable trust for sovereign systems. Recognition, revocation, signed evidence,
            and protocol interoperability for independent operators.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteLinks.genesisMesh}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d9ff61] px-6 text-sm font-bold text-zinc-950 transition hover:bg-white"
            >
              Open Genesis Mesh
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href={siteLinks.githubCore}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-6 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/15"
            >
              <GitBranch size={18} aria-hidden="true" />
              View source
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="rounded-md border border-white/10 bg-[#0d0f0c]/90 p-6 shadow-2xl shadow-black/40">
            <div className="grid grid-cols-2 gap-3">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.title}
                  className="rounded-md border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#d9ff61] text-zinc-950">
                    <campaign.icon size={21} aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-white">{campaign.title}</p>
                  <p className="mt-2 text-sm leading-5 text-zinc-400">{campaign.message}</p>
                </div>
              ))}
              <div className="rounded-md border border-[#d9ff61]/30 bg-[#d9ff61]/10 p-4">
                <p className="text-sm font-semibold text-[#d9ff61]">Protocol surface</p>
                <p className="mt-2 text-sm leading-5 text-zinc-300">
                  Identity -&gt; recognition -&gt; revocation -&gt; audit.
                </p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 rounded-md border border-white/10 bg-[#10120f]/95 p-4 shadow-xl shadow-black/30">
              {developerProof.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-zinc-950">
                    <item.icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-sm leading-5 text-zinc-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ChannelStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
        {externalChannels.map((channel) => (
          <a
            key={channel.href}
            href={channel.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-md border border-white/10 bg-[#0d0f0c] p-4 transition hover:border-[#d9ff61]/70 hover:bg-[#121610]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-zinc-950 transition group-hover:bg-[#d9ff61]">
                <channel.icon size={22} aria-hidden="true" />
              </div>
              <ArrowUpRight className="text-zinc-500 transition group-hover:text-[#d9ff61]" size={18} />
            </div>
            <p className="mt-4 font-semibold text-white">{channel.name}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{channel.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function PillarsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">Core thesis</p>
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
  );
}

export function CampaignSection() {
  return (
    <section className="bg-[#f4f5ef] py-20 text-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#557000]">Marketing frame</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A product story for builders, operators, and security teams.
            </h2>
          </div>
          <Link
            href="/genesismesh/articles"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-950"
          >
            Read campaign articles
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <article key={campaign.title} className="overflow-hidden rounded-md bg-white shadow-sm">
              <Image
                src={campaign.image}
                alt=""
                width={900}
                height={640}
                className="aspect-[16/10] object-cover"
              />
              <div className="p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-zinc-950 text-[#d9ff61]">
                  <campaign.icon size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{campaign.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{campaign.message}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SdkSection() {
  return (
    <section id="sdks" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">SDKs</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Use the trust layer from the languages teams already ship.
        </h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
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
            <h3 className="mt-6 text-xl font-semibold text-white">{sdk.name}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{sdk.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function VideoPreviewSection() {
  const featured = videos.slice(0, 3);

  return (
    <section className="border-y border-white/10 bg-white/[0.03] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">Videos</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Campaign videos for the whole trust story.
            </h2>
          </div>
          <Link
            href="/genesismesh/videos"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:border-[#d9ff61]/70"
          >
            View all videos
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featured.map((video) => (
            <Link
              key={video.videoId}
              href="/genesismesh/videos"
              className="group overflow-hidden rounded-md border border-white/10 bg-[#0d0f0c] transition hover:border-[#d9ff61]/70"
            >
              <div className="relative aspect-video">
                <Image
                  src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#d9ff61] text-zinc-950">
                  <Play size={22} fill="currentColor" aria-hidden="true" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{video.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArticlePreviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">Articles</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          Long-form thinking lives on Patreon.
        </h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/10 bg-[#0d0f0c] p-6 transition hover:border-[#d9ff61]/70"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-zinc-950">
              <article.icon size={24} aria-hidden="true" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              {article.channel}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">{article.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{article.summary}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
