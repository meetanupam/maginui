import type { Metadata } from "next";
import { Catalog } from "@/components/catalog";
export const metadata: Metadata = {
  title: "Components",
  description:
    "Explore themaginui's focused collection of signature React components.",
};
export default function ComponentsPage() {
  return (
    <main>
      <div className="page-wrap py-16 md:py-24">
        <span className="section-kicker">The signature collection</span>
        <h1 className="section-title mt-6">
          Components that
          <br />
          <span className="text-[var(--muted)]">earn attention.</span>
        </h1>
        <p className="muted mt-7 max-w-xl text-base leading-7 md:text-lg md:leading-8">
          A small, deliberate set of production-ready interactions with
          thoughtful APIs, polished motion, and complete source.
        </p>
      </div>
      <Catalog />
    </main>
  );
}
