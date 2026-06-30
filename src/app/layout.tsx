import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.connectorzzz.com"),
  title: {
    default: "Connectorzzz Dev",
    template: "%s | Connectorzzz Dev",
  },
  description:
    "Developer and product hub for Connectorzzz systems, starting with Genesis Mesh portable trust infrastructure.",
  applicationName: "Connectorzzz Dev",
  authors: [{ name: "GenesisMesh Labs", url: "https://github.com/GenesisMeshLabs" }],
  creator: "GenesisMesh Labs",
  publisher: "GenesisMesh Labs",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "Genesis Mesh",
    "Connectorzzz",
    "portable trust",
    "sovereign systems",
    "recognition",
    "revocation",
    "verifiable trust state",
    "trust API",
    "SDKs",
  ],
  openGraph: {
    type: "website",
    siteName: "Connectorzzz Dev",
    title: "Connectorzzz Dev",
    description:
      "Developer and product hub for Connectorzzz systems, starting with Genesis Mesh portable trust infrastructure.",
    url: "https://dev.connectorzzz.com",
    images: [
      {
        url: "/images/marketing/social-card.png",
        width: 1200,
        height: 630,
        alt: "Connectorzzz Dev and Genesis Mesh portable trust infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connectorzzz Dev",
    description:
      "Developer and product hub for Connectorzzz systems, starting with Genesis Mesh portable trust infrastructure.",
    images: ["/images/marketing/social-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
