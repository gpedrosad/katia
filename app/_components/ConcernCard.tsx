"use client";

interface ConcernCardProps {
  emoji: string;
  title: string;
  description: string;
}

export function ConcernCard({ emoji, title, description }: ConcernCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-rose-100 bg-white p-5 shadow-sm transition-all hover:border-rose-200 hover:shadow-md">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-50 text-2xl">
        {emoji}
      </div>
      <div className="flex-1">
        <h3 className="mb-1 font-semibold text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </div>
  );
}
