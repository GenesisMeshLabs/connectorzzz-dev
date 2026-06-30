import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/brand-icons";
import { externalChannels, navItems, siteLinks } from "@/content/genesismesh";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070807]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/brand/logo-reverse.svg"
            alt="Connectorzzz Dev"
            width={34}
            height={34}
            priority
          />
          <span className="text-sm font-semibold tracking-wide text-white">Connectorzzz Dev</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={siteLinks.githubOrg}
          className="inline-flex h-10 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-zinc-950 transition hover:bg-[#d9ff61]"
          target="_blank"
          rel="noreferrer"
        >
          <BrandIcon name="github" className="h-4 w-4" />
          GitHub
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070807]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/brand/logo-reverse.svg" alt="" width={32} height={32} />
            <p className="font-semibold text-white">Genesis Mesh</p>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            Portable trust for sovereign systems. Open infrastructure for recognition,
            revocation, evidence, and protocol interoperability.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {externalChannels.map((channel) => (
            <a
              key={channel.href}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300 transition hover:border-[#d9ff61]/60 hover:text-white"
            >
              <BrandIcon name={channel.icon} className="h-4 w-4" />
              {channel.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#070807] text-white">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
