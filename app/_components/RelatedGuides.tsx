import Link from "next/link";

export type RelatedGuide = {
  href: string;
  title: string;
  note?: string;
};

export function RelatedGuides({
  items,
  intro,
}: {
  items: readonly RelatedGuide[];
  intro: string;
}) {
  return (
    <section
      className="not-prose my-10 rounded-2xl border border-gray-200 bg-white p-6"
      aria-labelledby="guias-relacionadas"
    >
      <h2 id="guias-relacionadas" className="text-2xl font-bold text-gray-900">
        Guías relacionadas
      </h2>
      <p className="mt-2 text-gray-600">{intro}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-semibold text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900"
            >
              {item.title}
            </Link>
            {item.note ? (
              <p className="text-sm text-gray-600">{item.note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
