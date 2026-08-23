import Link from "next/link";
import { AdsLayoutBadge } from "@/app/ads/_components/AdsLayoutBadge";
import { BUSINESS_NAME } from "@/lib/site";

export default function AdsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#faf8f6] text-stone-900">
      <header className="border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-rose-900"
          >
            {BUSINESS_NAME}
          </Link>
          <AdsLayoutBadge />
        </div>
      </header>
      {children}
    </div>
  );
}
