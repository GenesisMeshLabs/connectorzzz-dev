import type { Metadata } from "next";
import { HomeHub } from "@/components/home-hub";
import { PageShell } from "@/components/site-shell";
import { pageMetadata } from "@/content/metadata";
import { siteConfig, siteLinks } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: `${siteConfig.name} | Open Infrastructure for Sovereign Systems`,
  description:
    "Connectorzzz Dev is the developer hub for Genesis Mesh, SDKs, campaign videos, and articles about portable trust for sovereign systems.",
  path: "/",
  imageAlt: "Connectorzzz Dev and Genesis Mesh",
  twitterTitle: siteConfig.name,
  twitterDescription: "Open infrastructure for sovereign systems.",
});

export default function HomePage() {
  const jsonLd = [
    {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GenesisMesh Labs",
    url: siteLinks.githubOrg,
    sameAs: [siteLinks.githubOrg, siteLinks.youtube, siteLinks.patreon, siteLinks.genesisMesh],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description:
        "Developer resources, protocols, SDKs, videos, and articles for portable trust across independent operators.",
      publisher: {
        "@type": "Organization",
        name: "GenesisMesh Labs",
        url: siteLinks.githubOrg,
      },
    },
  ];

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHub />
    </PageShell>
  );
}
