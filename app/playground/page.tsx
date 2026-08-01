import type { Metadata } from "next";
import { Playground } from "@/components/playground";
export const metadata: Metadata = {
  title: "Playground",
  description: "Tune themaginui motion and visual tokens interactively.",
};
export default function PlaygroundPage() {
  return (
    <main>
      <div className="page-wrap pt-20">
        <span className="section-kicker">Interactive lab</span>
        <h1 className="section-title mt-6">
          Tune the
          <br />
          <i>feeling.</i>
        </h1>
        <p className="muted mt-7 max-w-lg text-lg leading-8">
          Adjust motion and appearance, inspect the generated source, then copy
          it into your project.
        </p>
      </div>
      <Playground />
    </main>
  );
}
