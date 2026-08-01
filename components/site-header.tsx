"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, LayoutGrid, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { SiteLogo } from "./site-logo";
import { ThemeToggle } from "./theme-toggle";
import { SearchCommand } from "./search-command";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="glass hairline sticky top-0 z-50 border-b">
      <div className="page-wrap flex h-16 items-center justify-between gap-6">
        <SiteLogo />
        <nav
          aria-label="Primary navigation"
          className="hidden h-full items-center gap-1 xl:flex"
        >
          {siteConfig.nav.map((item) => (
            <Link
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`focus-ring relative flex h-full items-center rounded-sm px-3 text-xs transition-colors ${isActive(item.href) ? "font-medium text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[var(--ink)]" />
              )}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <SearchCommand />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="focus-ring hairline grid size-9 place-items-center rounded-lg border bg-[var(--raised)] xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            {open ? <X size={17} /> : <LayoutGrid size={17} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="page-wrap absolute inset-x-0 top-[calc(100%+8px)] xl:hidden"
          >
            <div className="hairline overflow-hidden rounded-2xl border bg-[var(--paper)] p-2 shadow-[0_24px_80px_rgba(18,19,16,.16)]">
              <div className="px-4 pt-4 pb-5">
                <span className="section-kicker">Explore themaginui</span>
                <p className="muted mt-2 max-w-xs text-sm leading-6">
                  Crafted interactions, complete source, ready to copy.
                </p>
              </div>
              <nav
                aria-label="Mobile navigation"
                className="grid gap-1 sm:grid-cols-2"
              >
                {siteConfig.nav.map((item, index) => (
                  <Link
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm transition-colors ${isActive(item.href) ? "bg-[var(--ink)] text-[var(--paper)]" : "hover:bg-[var(--surface)]"}`}
                    onClick={() => setOpen(false)}
                    href={item.href}
                    key={item.href}
                  >
                    <span className="mono opacity-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{item.label}</span>
                    <ArrowUpRight
                      className="ml-auto opacity-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      size={14}
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
