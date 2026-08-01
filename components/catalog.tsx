"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, registry } from "@/registry/components";
import { ComponentPreview } from "./component-preview";

const PAGE_SIZE = 24;

export function Catalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [complexity, setComplexity] = useState("All");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const filtered = useMemo(() => registry.filter((item) =>
    (category === "All" || item.category === category) &&
    (complexity === "All" || item.complexity === complexity) &&
    `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(query.trim().toLowerCase()),
  ), [query, category, complexity]);

  const hasFilters = query || category !== "All" || complexity !== "All";

  return <>
    <div className="sticky top-16 z-30 border-y hairline glass">
      <div className="page-wrap flex flex-col gap-2 py-3 sm:flex-row">
        <label className="focus-within:ring-2 focus-within:ring-[var(--violet)] flex h-11 flex-1 items-center gap-2 rounded-lg border hairline bg-[var(--raised)] px-3">
          <Search size={15}/><span className="sr-only">Search components</span>
          <input value={query} onChange={(event) => { setQuery(event.target.value); setLimit(PAGE_SIZE); }} className="w-full bg-transparent text-sm outline-none" placeholder="Search components..."/>
          {query && <button onClick={() => setQuery("")} aria-label="Clear search" className="rounded p-1 muted hover:text-[var(--ink)]"><X size={14}/></button>}
        </label>
        <label className="flex h-11 items-center gap-2 rounded-lg border hairline bg-[var(--raised)] px-3">
          <SlidersHorizontal size={14}/><span className="sr-only">Complexity</span>
          <select value={complexity} onChange={(event) => { setComplexity(event.target.value); setLimit(PAGE_SIZE); }} className="min-w-32 bg-transparent text-xs outline-none">
            <option value="All">All levels</option><option>Primitive</option><option>Composite</option><option>Section</option>
          </select>
        </label>
        <label className="flex h-11 items-center rounded-lg border hairline bg-[var(--raised)] px-3 lg:hidden">
          <span className="sr-only">Category</span><select value={category} onChange={(event) => { setCategory(event.target.value); setLimit(PAGE_SIZE); }} className="w-full bg-transparent text-xs outline-none"><option>All</option>{categories.map((name) => <option key={name}>{name}</option>)}</select>
        </label>
      </div>
    </div>

    <div className="page-wrap grid gap-12 py-12 lg:grid-cols-[210px_1fr]">
      <aside className="hidden lg:block"><div className="sticky top-36 max-h-[calc(100vh-10rem)] space-y-1 overflow-auto pr-3">
        {["All", ...categories].map((name) => <button key={name} onClick={() => { setCategory(name); setLimit(PAGE_SIZE); }} aria-pressed={category === name} className={`focus-ring w-full rounded-md px-3 py-2 text-left text-xs transition-colors ${category === name ? "nav-active" : "muted hover:bg-[var(--surface)] hover:text-[var(--ink)]"}`}>{name}<span className="float-right mono text-[9px]">{name === "All" ? registry.length : registry.filter((item) => item.category === name).length}</span></button>)}
      </div></aside>
      <section aria-live="polite">
        <div className="mb-6 flex items-center justify-between gap-4"><p className="text-sm"><b>{filtered.length}</b> results {category !== "All" && <span className="muted">in {category}</span>}</p>{hasFilters && <button onClick={() => { setQuery(""); setCategory("All"); setComplexity("All"); }} className="text-xs muted hover:text-[var(--ink)]">Clear filters</button>}</div>
        {filtered.length ? <div className="grid gap-4 xl:grid-cols-2">{filtered.slice(0, limit).map((item) => <Link key={item.slug} href={`/components/${item.slug}`} className="focus-ring group overflow-hidden rounded-xl border hairline bg-[var(--raised)] transition-transform hover:-translate-y-0.5">
          <ComponentPreview item={item} compact/><div className="flex min-h-32 items-start justify-between gap-4 border-t hairline p-5"><div><span className="mono text-[8px] uppercase muted">{item.category} · {item.complexity}</span><h2 className="mt-2 font-semibold">{item.name}</h2><p className="mt-2 max-w-sm text-xs leading-5 muted">{item.description}</p></div>{item.tag && <span className="pill mono text-[8px]">{item.tag}</span>}</div>
        </Link>)}</div> : <div className="rounded-xl border hairline py-24 text-center"><Search className="mx-auto muted"/><h2 className="mt-4 font-semibold">No matching components</h2><p className="mt-2 text-sm muted">Try a broader term or clear the current filters.</p></div>}
        {limit < filtered.length && <div className="pt-10 text-center"><button className="btn" onClick={() => setLimit((value) => value + PAGE_SIZE)}>Load {Math.min(PAGE_SIZE, filtered.length - limit)} more</button></div>}
      </section>
    </div>
  </>;
}
