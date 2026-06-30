import type { Metadata } from "next";
import {
  ArticlePreviewSection,
  CampaignSection,
  ChannelStrip,
  HeroSection,
  PillarsSection,
  SdkSection,
  VideoPreviewSection,
} from "@/components/genesismesh-sections";
import { PageShell } from "@/components/site-shell";
import { seo, siteLinks } from "@/content/genesismesh";

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

export default function GenesisMeshPage() {
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
      <HeroSection />
      <ChannelStrip />
      <PillarsSection />
      <CampaignSection />
      <SdkSection />
      <VideoPreviewSection />
      <ArticlePreviewSection />
    </PageShell>
  );
}
