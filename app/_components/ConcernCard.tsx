"use client";

interface ConcernCardProps {
  emoji: string;
  title: string;
  description: string;
  /** Visual accent; defaults to rose to match existing pages */
  tone?: "rose" | "emerald";
}

const toneClasses = {
  rose: {
    card: "border-rose-100 hover:border-rose-200",
    icon: "bg-rose-50",
  },
  emerald: {
    card: "border-emerald-100 hover:border-emerald-200",
    icon: "bg-emerald-50",
  },
} as const;

export function ConcernCard({
  emoji,
  title,
  description,
  tone = "rose",
}: ConcernCardProps) {
  const t = toneClasses[tone];
  return (
    <div
      className={`flex items-start gap-4 rounded-xl border bg-white p-5 shadow-sm transition-all hover:shadow-md ${t.card}`}
    >
      <div
        className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-2xl ${t.icon}`}
      >
        {emoji}
      </div>
      <div className="flex-1">
        <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
}
