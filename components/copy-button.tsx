"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
export function CopyButton({
  value,
  label = "Copy",
}: {
  value: string;
  label?: string;
}) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(value);
        setDone(true);
        setTimeout(() => setDone(false), 1600);
      }}
      className="focus-ring btn text-xs"
    >
      {done ? <Check size={14} /> : <Copy size={14} />}{" "}
      {done ? "Copied" : label}
    </button>
  );
}
