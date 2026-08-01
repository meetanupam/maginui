import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { docs } from "@/config/docs";

export function DocsShell({ doc }: { doc: (typeof docs)[number] }) {
  const index = docs.findIndex((item) => item.slug === doc.slug);
  const prev = docs[index - 1];
  const next = docs[index + 1];
  const href = (slug: string) => `/docs${slug ? `/${slug}` : ""}`;

  return <main className="page-wrap py-8 lg:grid lg:grid-cols-[210px_minmax(0,760px)_180px] lg:gap-12 xl:gap-16">
    <details className="mb-10 rounded-lg border hairline bg-[var(--raised)] p-3 lg:hidden">
      <summary className="flex list-none items-center justify-between text-sm font-medium">{doc.title}<ChevronDown size={15}/></summary>
      <nav className="mt-3 grid gap-1 border-t hairline pt-3">{docs.map((item) => <Link aria-current={item.slug === doc.slug ? "page" : undefined} className={`rounded-md px-3 py-2 text-xs ${item.slug === doc.slug ? "nav-active" : "muted"}`} href={href(item.slug)} key={item.slug}>{item.title}</Link>)}</nav>
    </details>

    <aside className="hidden lg:block"><nav aria-label="Documentation" className="sticky top-28 max-h-[calc(100vh-9rem)] space-y-1 overflow-auto pr-3"><span className="section-kicker mb-4 block px-3">Documentation</span>{docs.map((item) => <Link aria-current={item.slug === doc.slug ? "page" : undefined} className={`focus-ring block rounded-md px-3 py-2 text-xs transition-colors ${item.slug === doc.slug ? "nav-active" : "muted hover:bg-[var(--surface)] hover:text-[var(--ink)]"}`} href={href(item.slug)} key={item.slug}>{item.title}</Link>)}</nav></aside>

    <article className="prose-flux min-w-0 pb-20">
      <span className="section-kicker">Guide {String(index + 1).padStart(2, "0")} / {String(docs.length).padStart(2, "0")}</span>
      <h1 className="display mt-5 text-5xl leading-[.95] md:text-7xl">{doc.title}</h1>
      <p className="mt-6 border-b hairline pb-10 text-lg text-[var(--muted)]">{doc.description}</p>
      {doc.sections.map(([title, copy], sectionIndex) => <section id={`section-${sectionIndex + 1}`} key={title}><h2>{title}</h2><p>{copy}</p>{title === "Initialize" && <pre><code>pnpm dlx themaginui init{"\n"}pnpm dlx themaginui add magnetic-button</code></pre>}</section>)}
      <div className="mt-20 grid gap-3 border-t hairline pt-6 sm:grid-cols-2">{prev ? <Link className="focus-ring rounded-lg border hairline p-4 text-sm transition-colors hover:bg-[var(--surface)]" href={href(prev.slug)}><small className="mono block text-[8px] uppercase muted">Previous</small><span className="mt-2 flex items-center gap-1"><ChevronLeft size={14}/>{prev.title}</span></Link> : <span/>}{next && <Link className="focus-ring rounded-lg border hairline p-4 text-right text-sm transition-colors hover:bg-[var(--surface)]" href={href(next.slug)}><small className="mono block text-[8px] uppercase muted">Next</small><span className="mt-2 flex items-center justify-end gap-1">{next.title}<ChevronRight size={14}/></span></Link>}</div>
    </article>

    <aside className="hidden xl:block"><nav aria-label="On this page" className="sticky top-28 border-l hairline pl-5"><span className="section-kicker mb-4 block">On this page</span>{doc.sections.map(([title], index) => <a className="mb-3 block text-xs muted hover:text-[var(--ink)]" href={`#section-${index + 1}`} key={title}>{title}</a>)}</nav></aside>
  </main>;
}
