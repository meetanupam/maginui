"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { components } from "@/config/components";
export function SearchCommand() {
  const [open, setOpen] = useState(false),
    [query, setQuery] = useState("");
  const router = useRouter();
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    addEventListener("keydown", key);
    return () => removeEventListener("keydown", key);
  }, []);
  const results = useMemo(
    () =>
      components.filter((x) =>
        (x.name + x.category).toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );
  function go(slug: string) {
    setOpen(false);
    router.push(`/components/${slug}`);
  }
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="focus-ring hairline muted hidden h-9 min-w-48 items-center gap-2 rounded-lg border bg-[var(--raised)] px-3 text-xs md:flex">
          <Search size={14} />
          Search components...<kbd className="mono ml-auto text-[10px]">⌘K</kbd>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-90 bg-black/40 backdrop-blur-sm" />
        <Dialog.Content className="glass hairline fixed top-[16vh] left-1/2 z-100 w-[min(620px,92vw)] -translate-x-1/2 rounded-xl border p-3 shadow-2xl">
          <Dialog.Title className="sr-only">Search themaginui</Dialog.Title>
          <div className="hairline flex items-center gap-3 border-b px-3">
            <Search size={17} />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the collection..."
              className="h-14 w-full bg-transparent text-sm outline-none"
            />
            <Dialog.Close className="rounded p-1">
              <X size={16} />
            </Dialog.Close>
          </div>
          <div className="max-h-90 overflow-auto py-2">
            {results.map((x) => (
              <button
                key={x.slug}
                onClick={() => go(x.slug)}
                className="hover:surface flex w-full items-center justify-between rounded-lg px-3 py-3 text-left"
              >
                <span>
                  <b className="block text-sm">{x.name}</b>
                  <small className="muted">{x.description}</small>
                </span>
                <span className="mono muted text-[9px]">{x.category}</span>
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
