import {
  BookOpen,
  Boxes,
  Braces,
  Cable,
  CircleSlash,
  Code2,
  FileText,
  GitBranch,
  Globe2,
  KeyRound,
  LockKeyhole,
  Network,
  Play,
  RadioTower,
  ScrollText,
  ShieldCheck,
  TerminalSquare,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const siteLinks = {
  home: "https://dev.connectorzzz.com",
  genesisMesh: "https://genesismesh.connectorzzz.com/",
  githubOrg: "https://github.com/GenesisMeshLabs",
  githubCore: "https://github.com/GenesisMeshLabs/genesismesh",
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
  { label: "Genesis Mesh", href: "/genesismesh" },
  { label: "Videos", href: "/genesismesh/videos" },
  { label: "Articles", href: "/genesismesh/articles" },
  { label: "SDKs", href: "/genesismesh#sdks" },
];

export type ExternalChannel = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const externalChannels: ExternalChannel[] = [
  {
    name: "GitHub",
    href: siteLinks.githubOrg,
    description: "Source code, SDKs, releases, and open infrastructure.",
    icon: GitBranch,
  },
  {
    name: "YouTube",
    href: siteLinks.youtube,
    description: "Campaign videos and technical explainers.",
    icon: Video,
  },
  {
    name: "Patreon",
    href: siteLinks.patreon,
    description: "Articles, supporter updates, and public essays.",
    icon: BookOpen,
  },
  {
    name: "Product Site",
    href: siteLinks.genesisMesh,
    description: "Current Genesis Mesh public product surface.",
    icon: Globe2,
  },
];

export type Pillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    title: "Open infrastructure",
    description:
      "A protocol-oriented trust layer for systems, operators, SDKs, services, and agents that need to cooperate across boundaries.",
    icon: Network,
  },
  {
    title: "Sovereign systems",
    description:
      "Each operator keeps control of keys, policies, recognition, revocation, and trust decisions.",
    icon: KeyRound,
  },
  {
    title: "Verifiable trust state",
    description:
      "Recognition, revocation, disclosures, and decisions leave signed evidence that can be checked later.",
    icon: ShieldCheck,
  },
  {
    title: "Protocol interoperability",
    description:
      "Genesis Mesh is not tied to one runtime, cloud, or language. SDKs make the same trust artifacts usable from real software.",
    icon: Cable,
  },
];

export type SdkCard = {
  name: string;
  language: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const sdkCards: SdkCard[] = [
  {
    name: "SDK for Go",
    language: "Go",
    href: siteLinks.sdkGo,
    description: "Typed client for builders wiring trust checks into Go services and infrastructure.",
    icon: TerminalSquare,
  },
  {
    name: "SDK for TypeScript",
    language: "TypeScript",
    href: siteLinks.sdkTypeScript,
    description: "Client package for web apps, tools, server routes, and developer-facing integrations.",
    icon: Braces,
  },
  {
    name: ".NET SDK",
    language: "C#",
    href: siteLinks.sdkDotnet,
    description: "C# client for enterprise services and Microsoft-stack integration paths.",
    icon: Code2,
  },
];

export type Campaign = {
  title: string;
  message: string;
  image: string;
  icon: LucideIcon;
};

export const campaigns: Campaign[] = [
  {
    title: "Portable trust",
    message: "Trust should move between independent systems without one central owner.",
    image: "/images/marketing/marketing-hero-trust-fabric.png",
    icon: Boxes,
  },
  {
    title: "Recognition and revocation",
    message: "It is not enough to trust once. You must be able to cut trust off with proof.",
    image: "/images/marketing/marketing-provenance-chain.png",
    icon: CircleSlash,
  },
  {
    title: "Independent operators",
    message: "Organizations can cooperate without surrendering local authority.",
    image: "/images/marketing/marketing-independent-operators.png",
    icon: LockKeyhole,
  },
];

export type Video = {
  title: string;
  videoId: string;
  published: string;
  summary: string;
};

export const videos: Video[] = [
  {
    title: "Integration Without Authority Transfer",
    videoId: "Sj1-k7y5jhg",
    published: "2026-06-30",
    summary: "Enterprise integration without making one system the owner of all trust.",
  },
  {
    title: "Portable Trust Across Boundaries",
    videoId: "y3GBM5h-RdY",
    published: "2026-06-30",
    summary: "Why trust has to cross organizational boundaries without centralization.",
  },
  {
    title: "Genesis Mesh Portable Trust Layer",
    videoId: "fv1XebByCbE",
    published: "2026-06-30",
    summary: "The core framing for Genesis Mesh as portable trust for sovereign systems.",
  },
  {
    title: "Auditable Data Access Authorization",
    videoId: "kg_JsRjsxzU",
    published: "2026-06-30",
    summary: "How authorization evidence can travel with data-access decisions.",
  },
  {
    title: "Securing Supply Chain Authorization",
    videoId: "H41w_3mMrcE",
    published: "2026-06-30",
    summary: "Delegation, release gates, and trust revocation after compromise.",
  },
  {
    title: "Portable Trust for Edge Infrastructure",
    videoId: "J7OpYQy3ZkU",
    published: "2026-06-30",
    summary: "Trust paths for distributed devices, nodes, and operators.",
  },
  {
    title: "Cross-Boundary Trust for AI Agents",
    videoId: "hx_OZ6EsejI",
    published: "2026-06-30",
    summary: "Agent networks as one use case for identity, revocation, and provenance.",
  },
  {
    title: "Trust API and SDKs",
    videoId: "E2UQRM7c3Vo",
    published: "2026-06-30",
    summary: "Developer entry points for consuming Genesis Mesh trust primitives.",
  },
  {
    title: "Trust-Layer Protocol Interoperability",
    videoId: "v4ORssb6nLw",
    published: "2026-06-30",
    summary: "The protocol surface across languages, runtimes, and infrastructure.",
  },
  {
    title: "Auditable Trust State",
    videoId: "gp5yqnNQdZI",
    published: "2026-06-30",
    summary: "Trust decisions that leave evidence for later verification.",
  },
  {
    title: "Trust Recognition and Revocation",
    videoId: "PVOfYM48DYo",
    published: "2026-06-30",
    summary: "Signed lifecycle events for recognizing and withdrawing trust.",
  },
  {
    title: "Sovereign Trust Without Central Control",
    videoId: "OS9rGqOMkHY",
    published: "2026-06-30",
    summary: "Local authority, external recognition, and portable trust state.",
  },
];

export type Article = {
  title: string;
  href: string;
  channel: string;
  summary: string;
  icon: LucideIcon;
};

export const articles: Article[] = [
  {
    title: "Auditable Data Access Authorization",
    href: "https://www.patreon.com/GenesisMeshLabs/posts/auditable-data-162537779",
    channel: "Patreon",
    summary:
      "Data governance needs an enforcement layer that can prove access was authorized, scoped, and reviewable.",
    icon: ScrollText,
  },
  {
    title: "Genesis Mesh Articles",
    href: siteLinks.patreonPosts,
    channel: "Patreon",
    summary:
      "Follow the campaign essays as they move from positioning into technical and operational articles.",
    icon: FileText,
  },
  {
    title: "Campaign Videos",
    href: siteLinks.youtube,
    channel: "YouTube",
    summary:
      "Watch the article arguments as narrated campaign videos for builders, operators, and security teams.",
    icon: Play,
  },
];

export const seo = {
  title: "Genesis Mesh | Portable Trust for Sovereign Systems",
  description:
    "Genesis Mesh is open infrastructure for portable trust, sovereign systems, recognition, revocation, verifiable trust state, and protocol interoperability.",
};

export const heroStats = [
  { label: "Open-source repos", value: "6+" },
  { label: "SDK tracks", value: "3" },
  { label: "Campaign videos", value: "12" },
];

export const developerProof = [
  {
    label: "Trust API",
    value: "HTTP-first integration surface",
    icon: RadioTower,
  },
  {
    label: "Evidence",
    value: "Signed recognition and revocation state",
    icon: ScrollText,
  },
  {
    label: "SDKs",
    value: "Go, TypeScript, and .NET clients",
    icon: Code2,
  },
];
