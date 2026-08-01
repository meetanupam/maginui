"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { SiteLogo } from "./site-logo";
import { ThemeToggle } from "./theme-toggle";
import { SearchCommand } from "./search-command";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return <header className="glass sticky top-0 z-50 border-b hairline">
    <div className="page-wrap flex h-16 items-center justify-between gap-6">
      <SiteLogo/>
      <nav aria-label="Primary navigation" className="hidden h-full items-center gap-1 xl:flex">
        {siteConfig.nav.map((item) => <Link aria-current={isActive(item.href) ? "page" : undefined} className={`focus-ring relative flex h-full items-center rounded-sm px-3 text-xs transition-colors ${isActive(item.href) ? "font-medium text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`} href={item.href} key={item.href}>{item.label}{isActive(item.href) && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[var(--ink)]"/>}</Link>)}
      </nav>
      <div className="ml-auto flex items-center gap-2"><SearchCommand/><ThemeToggle/><button onClick={() => setOpen(!open)} className="focus-ring grid size-9 place-items-center rounded-lg border hairline bg-[var(--raised)] xl:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">{open ? <X size={17}/> : <Menu size={17}/>}</button></div>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="page-wrap flex flex-col gap-1 border-t hairline py-3 xl:hidden">{siteConfig.nav.map((item) => <Link aria-current={isActive(item.href) ? "page" : undefined} className={`rounded-lg px-3 py-3 text-sm ${isActive(item.href) ? "nav-active" : "hover:bg-[var(--surface)]"}`} onClick={() => setOpen(false)} href={item.href} key={item.href}>{item.label}</Link>)}</nav>}
  </header>;
}
