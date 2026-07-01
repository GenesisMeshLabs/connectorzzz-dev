export const siteConfig = {
  name: "Connectorzzz Dev",
  url: "https://dev.connectorzzz.com",
  organization: "GenesisMesh Labs",
  description:
    "Developer and product hub for Connectorzzz systems, starting with Genesis Mesh portable trust infrastructure.",
  socialCard: "/images/marketing/social-card.png",
  socialCardAlt: "Connectorzzz Dev and Genesis Mesh portable trust infrastructure",
};

export const siteLinks = {
  home: siteConfig.url,
  genesisMesh: "https://genesismesh.connectorzzz.com/",
  githubOrg: "https://github.com/GenesisMeshLabs",
  githubCore: "https://github.com/GenesisMeshLabs/genesismesh",
  githubCoreDocs: "https://github.com/GenesisMeshLabs/genesismesh/tree/main/docs",
  sdkGo: "https://github.com/GenesisMeshLabs/sdk-go",
  sdkTypeScript: "https://github.com/GenesisMeshLabs/sdk-typescript",
  sdkDotnet: "https://github.com/GenesisMeshLabs/sdk-dotnet",
  youtube: "https://www.youtube.com/@GenesisMeshLabs",
  patreon: "https://www.patreon.com/GenesisMeshLabs",
  patreonPosts: "https://www.patreon.com/cw/GenesisMeshLabs/posts",
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Genesis Mesh", href: "/genesismesh" },
  { label: "SDKs", href: "/genesismesh/sdks" },
  { label: "Docs", href: "/genesismesh/docs" },
  { label: "Videos", href: "/genesismesh/videos" },
  { label: "Articles", href: "/genesismesh/articles" },
];

export type ExternalChannel = {
  name: string;
  href: string;
  description: string;
  icon: "github" | "youtube" | "patreon" | "product";
};

export const externalChannels: ExternalChannel[] = [
  {
    name: "GitHub",
    href: siteLinks.githubOrg,
    description: "Source code, SDKs, releases, and open infrastructure.",
    icon: "github",
  },
  {
    name: "YouTube",
    href: siteLinks.youtube,
    description: "Campaign videos and technical explainers.",
    icon: "youtube",
  },
  {
    name: "Patreon",
    href: siteLinks.patreon,
    description: "Articles, supporter updates, and public essays.",
    icon: "patreon",
  },
  {
    name: "Product Site",
    href: siteLinks.genesisMesh,
    description: "Current Genesis Mesh public product surface.",
    icon: "product",
  },
];

export const sitemapRoutes = [
  { path: "/", priority: 1 },
  { path: "/genesismesh", priority: 0.9 },
  { path: "/genesismesh/start-here", priority: 0.85 },
  { path: "/genesismesh/sdks", priority: 0.8 },
  { path: "/genesismesh/docs", priority: 0.8 },
  { path: "/genesismesh/videos", priority: 0.8 },
  { path: "/genesismesh/articles", priority: 0.8 },
] as const;
