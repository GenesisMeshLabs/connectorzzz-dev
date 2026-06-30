import type { Metadata } from "next";
import { HomeHub } from "@/components/home-hub";
import { PageShell } from "@/components/site-shell";
import { siteLinks } from "@/content/genesismesh";

export const metadata: Metadata = {
  title: "Connectorzzz Dev | Open Infrastructure for Sovereign Systems",
  description:
    "Connectorzzz Dev is the developer hub for Genesis Mesh, SDKs, campaign videos, and articles about portable trust for sovereign systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Connectorzzz Dev",
    description:
      "Developer resources, protocols, SDKs, videos, and articles for portable trust across independent operators.",
    url: "/",
    siteName: "Connectorzzz Dev",
    images: [
      {
        url: "/images/marketing/social-card.png",
        width: 1200,
        height: 630,
        alt: "Connectorzzz Dev and Genesis Mesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connectorzzz Dev",
    description: "Open infrastructure for sovereign systems.",
    images: ["/images/marketing/social-card.png"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GenesisMesh Labs",
    url: siteLinks.githubOrg,
    sameAs: [siteLinks.githubOrg, siteLinks.youtube, siteLinks.patreon, siteLinks.genesisMesh],
  };

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
