import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="focus-ring flex items-center gap-2.5 rounded-md font-semibold"
      aria-label="themaginui home"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={32}
        height={32}
        className="size-8 shrink-0 object-contain"
        priority
        unoptimized
      />
      <span className="tracking-[-.035em]">themaginui</span>
    </Link>
  );
}
