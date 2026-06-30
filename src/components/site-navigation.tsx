"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { BrandIcon } from "@/components/brand-icons";
import { navItems, siteLinks } from "@/content/genesismesh";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href;
}

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 text-sm text-zinc-300 md:flex">
      {navItems.map((item) => {
        const active = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={[
              "rounded-md px-3 py-2 transition",
              active
                ? "bg-[#d9ff61] text-zinc-950"
                : "hover:bg-white/10 hover:text-white",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <details className="group relative md:hidden">
      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 bg-white/10 text-white transition hover:border-[#d9ff61]/70 [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open navigation menu</span>
        <Menu size={20} aria-hidden="true" />
      </summary>
      <div className="absolute right-0 top-12 w-64 rounded-md border border-white/10 bg-[#0d0f0c] p-2 shadow-2xl shadow-black/50">
        <nav className="grid gap-1">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "rounded-md px-3 py-3 text-sm font-semibold transition",
                  active
                    ? "bg-[#d9ff61] text-zinc-950"
                    : "text-zinc-200 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a
          href={siteLinks.githubOrg}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center justify-between rounded-md bg-white px-3 py-3 text-sm font-bold text-zinc-950 transition hover:bg-[#d9ff61]"
        >
          <span className="inline-flex items-center gap-2">
            <BrandIcon name="github" className="h-4 w-4" />
            GitHub
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </details>
  );
}
