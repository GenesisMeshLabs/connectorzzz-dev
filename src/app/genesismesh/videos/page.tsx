import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import { siteLinks } from "@/content/genesismesh";
import { getYoutubeVideos } from "@/lib/content-feeds";

export const metadata: Metadata = {
  title: "Genesis Mesh Videos",
  description:
    "Watch Genesis Mesh campaign videos about portable trust, sovereign systems, recognition, revocation, and protocol interoperability.",
  alternates: {
    canonical: "/genesismesh/videos",
  },
  openGraph: {
    title: "Genesis Mesh Videos",
    description:
      "Campaign videos about portable trust, sovereign systems, recognition, revocation, and protocol interoperability.",
    url: "/genesismesh/videos",
    siteName: "Connectorzzz Dev",
    images: [
      {
        url: "/images/marketing/social-card.png",
        width: 1200,
        height: 630,
        alt: "Genesis Mesh videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genesis Mesh Videos",
    description:
      "Campaign videos about portable trust, sovereign systems, recognition, revocation, and protocol interoperability.",
    images: ["/images/marketing/social-card.png"],
  },
};

export default async function VideosPage() {
  const videos = await getYoutubeVideos();

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9ff61]">
              YouTube
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Genesis Mesh videos
            </h1>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Campaign videos on portable trust, sovereign systems, recognition,
              revocation, and protocol interoperability.
            </p>
          </div>
          <a
            href={siteLinks.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#d9ff61] px-5 text-sm font-bold text-zinc-950 transition hover:bg-white"
          >
            Open channel
            <ExternalLink size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video.videoId}
              className="overflow-hidden rounded-md border border-white/10 bg-[#0d0f0c]"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative aspect-video">
                  <Image
                    src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#d9ff61] text-zinc-950">
                    <Play size={22} fill="currentColor" aria-hidden="true" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {video.published}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{video.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{video.summary}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
