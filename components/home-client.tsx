"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Braces, CheckCircle2, Users, Zap } from "lucide-react";
import { components } from "@/config/components";
import { ComponentPreview } from "./component-preview";
export function HomeClient() {
  return (
    <main>
      <section className="grid-bg relative min-h-[calc(100vh-64px)] overflow-hidden">
        <div className="page-wrap relative z-10 grid min-h-[calc(100vh-64px)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="section-kicker"
            >
              A considered component collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.08,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="display my-8 max-w-4xl text-[clamp(4.1rem,7.6vw,7.5rem)] leading-[.89]"
            >
              Interfaces people
              <br />
              <span className="font-normal text-[var(--muted)]">
                want to touch.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="muted max-w-lg text-lg leading-8"
            >
              A focused set of crafted React components where motion clarifies,
              interaction feels natural, and every detail has a reason.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.45 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link className="btn btn-primary" href="/components">
                Explore the collection <ArrowRight size={16} />
              </Link>
              <Link className="btn bg-[var(--raised)]" href="/docs">
                Read the docs
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.18,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hairline overflow-hidden rounded-2xl border bg-[var(--raised)] shadow-[var(--shadow)]"
          >
            <ComponentPreview item={components[0]} />
          </motion.div>
        </div>
      </section>
      <section className="page-wrap py-28 md:py-36">
        <div className="hairline flex flex-col justify-between gap-8 border-b pb-12 md:flex-row md:items-end">
          <div>
            <span className="section-kicker">01 / The collection</span>
            <h2 className="section-title mt-6">
              Fewer components.
              <br />
              <span className="text-[var(--muted)]">Deeper thinking.</span>
            </h2>
          </div>
          <p className="muted max-w-sm text-sm leading-7">
            No filler. Each component explores a distinct interaction idea and
            ships with readable source.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {components.map((item) => (
            <Link
              key={item.slug}
              href={`/components/${item.slug}`}
              className="focus-ring group hairline overflow-hidden rounded-xl border bg-[var(--raised)] transition-transform hover:-translate-y-0.5"
            >
              <ComponentPreview item={item} compact />
              <div className="hairline flex items-center justify-between border-t p-5">
                <span>
                  <small className="mono muted text-[8px] uppercase">
                    {item.category}
                  </small>
                  <b className="mt-1.5 block">{item.name}</b>
                </span>
                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={17}
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link className="btn" href="/components">
            View component documentation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <section className="bg-[#191a17] py-28 text-[#f5f4ef] md:py-36">
        <div className="page-wrap grid gap-16 lg:grid-cols-2">
          <div>
            <span className="section-kicker text-[#9a9c93]">
              02 / Principles
            </span>
            <h2 className="section-title mt-7">
              A system with
              <br />
              <span className="text-[#9a9c93]">clear opinions.</span>
            </h2>
          </div>
          <div>
            {[
              [
                Zap,
                "Purposeful motion",
                "Every transition explains relationship, hierarchy, or state.",
              ],
              [
                Braces,
                "Source is the product",
                "Readable TypeScript with composable APIs and no opaque runtime.",
              ],
              [
                CheckCircle2,
                "Inclusive by design",
                "Keyboard paths, focus states, semantics, and reduced motion are built in.",
              ],
              [
                Users,
                "Made for teams",
                "Tokens and variants scale from prototypes to product systems.",
              ],
            ].map(([Icon, title, copy]) => (
              <div
                key={String(title)}
                className="grid grid-cols-[42px_1fr] gap-3 border-t border-[#393a35] py-8"
              >
                <Icon className="text-[var(--lime)]" size={17} />
                <div>
                  <h3 className="text-lg font-medium">{title as string}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#a6a79f]">
                    {copy as string}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="page-wrap py-24 md:py-28">
        <div className="relative overflow-hidden rounded-2xl bg-[var(--lime)] px-6 py-20 text-center text-black md:py-28">
          <div className="relative">
            <span className="section-kicker !text-black/60">
              Ship your first component
            </span>
            <h2 className="display my-6 text-[clamp(3rem,7vw,6.5rem)] leading-[.92]">
              Source you can own.
            </h2>
            <p className="mb-8">
              Pick a component, copy its source, and make it unmistakably yours.
            </p>
            <Link
              className="btn max-w-full border-black/15 bg-black px-5 text-white"
              href="/components"
            >
              Browse copy-ready components <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
