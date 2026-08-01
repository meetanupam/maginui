import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main className="grid-bg grid min-h-[70vh] place-items-center px-6 text-center">
      <div>
        <span className="display text-[10rem] leading-none text-transparent [-webkit-text-stroke:1px_var(--line)]">
          404
        </span>
        <h1 className="display text-5xl">This signal went quiet.</h1>
        <p className="muted my-6">
          The page moved, changed shape, or never existed.
        </p>
        <Link className="btn btn-primary" href="/">
          <ArrowLeft size={15} /> Return home
        </Link>
      </div>
    </main>
  );
}
