import type { ReactNode } from "react";

type HandMarkProps = {
  children: ReactNode;
  variant?: "circle" | "underline";
  className?: string;
};

export function HandMark({
  children,
  variant = "underline",
  className = "",
}: HandMarkProps) {
  return (
    <span
      className={["tea-handmark", "tea-handmark-" + variant, className].join(
        " ",
      )}
    >
      <span className="tea-handmark-text">{children}</span>
      {variant === "circle" ? (
        <svg viewBox="0 0 180 74" preserveAspectRatio="none" aria-hidden="true">
          <path d="M11 38C14 13 53 5 96 7c45 2 76 13 74 33-3 23-45 30-91 27C36 65 7 57 11 38Z" />
          <path d="M16 41c8 19 46 25 88 22 35-2 61-10 64-24" />
        </svg>
      ) : (
        <svg viewBox="0 0 210 28" preserveAspectRatio="none" aria-hidden="true">
          <path d="M5 17c42-8 74 4 112-1 34-4 57-3 88 1" />
          <path d="M9 22c49-5 78 3 122-1 27-2 49-2 71 1" />
        </svg>
      )}
    </span>
  );
}
