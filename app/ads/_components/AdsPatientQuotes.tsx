export type AdsPatientQuote = {
  name: string;
  role: string;
  text: string;
};

type AdsPatientQuotesProps = {
  title?: string;
  quotes: AdsPatientQuote[];
};

export function AdsPatientQuotes({
  title = "Lo que cuentan pacientes atendidos",
  quotes,
}: AdsPatientQuotesProps) {
  return (
    <section className="border-y border-stone-200 bg-[#faf8f6]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h2 className="text-xl font-bold text-rose-950">{title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-stone-700">
                “{q.text}”
              </blockquote>
              <figcaption className="mt-3 text-xs">
                <span className="font-semibold text-stone-900">{q.name}</span>
                <span className="text-stone-500"> · {q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
