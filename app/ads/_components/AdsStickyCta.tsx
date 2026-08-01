"use client";

import { useEffect, useState } from "react";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";

const DEFAULT_HIDE_SELECTORS = ["#ads-cta-hero", "#ads-cta-final"] as const;

type AdsStickyCtaProps = {
  message: string;
  label?: string;
  /**
   * Selectores de CTAs en página. Si alguno está visible, se oculta la barra
   * para no mostrar dos WhatsApp a la vez.
   */
  hideWhenAnyVisible?: readonly string[];
};

/**
 * Barra fija solo mobile. Solo aparece cuando ningún CTA en-página está a la vista.
 * El spacer del flujo evita hueco vacío al pie cuando la barra está oculta.
 */
export function AdsStickyCta({
  message,
  label = "Quiero ayuda con mi voz",
  hideWhenAnyVisible = DEFAULT_HIDE_SELECTORS,
}: AdsStickyCtaProps) {
  /** Empieza oculta para no flash-ear junto al CTA del hero al cargar. */
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const targets = hideWhenAnyVisible
      .map((sel) => document.querySelector(sel))
      .filter((el): el is Element => el != null);

    if (targets.length === 0) {
      setHidden(false);
      return;
    }

    const visible = new Map<Element, boolean>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target, entry.isIntersecting);
        }
        setHidden([...visible.values()].some(Boolean));
      },
      {
        root: null,
        rootMargin: "0px 0px -72px 0px",
        threshold: 0.15,
      },
    );

    for (const el of targets) {
      visible.set(el, false);
      io.observe(el);
    }

    return () => io.disconnect();
  }, [hideWhenAnyVisible]);

  return (
    <>
      {/* Reserva espacio solo mientras la barra está visible */}
      <div
        className={`md:hidden transition-[height] duration-200 ease-out motion-reduce:transition-none ${
          hidden ? "h-0" : "h-[4.75rem]"
        }`}
        aria-hidden
      />
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-transform duration-200 ease-out md:hidden motion-reduce:transition-none ${
          hidden ? "translate-y-full" : "translate-y-0"
        }`}
        aria-hidden={hidden}
      >
        <div
          className={`border-t border-stone-200/90 bg-[#faf8f6]/95 px-3 pt-2 shadow-[0_-10px_28px_-14px_rgb(28_25_23/0.25)] backdrop-blur-sm ${
            hidden ? "pointer-events-none" : "pointer-events-auto"
          }`}
          style={{
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
          }}
        >
          <WhatsAppCTA
            message={message}
            className="ads-cta-press w-full !rounded-2xl !px-5 !py-3.5 !text-base shadow-lg shadow-green-600/20 active:scale-[0.98]"
            tabIndex={hidden ? -1 : undefined}
          >
            {label}
          </WhatsAppCTA>
        </div>
      </div>
    </>
  );
}
