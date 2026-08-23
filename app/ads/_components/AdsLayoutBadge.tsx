"use client";

import { usePathname } from "next/navigation";

/**
 * Chip del header Ads: online vs presencial según la ruta.
 */
export function AdsLayoutBadge() {
  const pathname = usePathname();
  const presencial = pathname.includes("presencial");

  return (
    <span className="text-xs font-medium text-stone-500">
      {presencial ? "Presencial · Chillán" : "Online · Chile"}
    </span>
  );
}
