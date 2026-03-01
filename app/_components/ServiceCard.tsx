import Link from "next/link";

interface ServiceCardProps {
  href: string;
  emoji: string;
  title: string;
  description: string;
  keywords?: string[];
}

export function ServiceCard({
  href,
  emoji,
  title,
  description,
  keywords,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border-2 border-rose-100 bg-white p-6 shadow-sm transition-all hover:border-rose-300 hover:shadow-lg"
    >
      <div className="mb-4 text-4xl">{emoji}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-rose-600">
        {title}
      </h3>
      <p className="mb-4 flex-1 text-gray-600">{description}</p>
      {keywords && keywords.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full bg-rose-50 px-3 py-1 text-xs text-rose-700"
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
      <span className="inline-flex items-center gap-2 text-sm font-medium text-rose-600">
        Ver más
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
}
