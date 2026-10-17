import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import { GeoFAQ, type GeoFAQItem } from "@/app/_components/GeoFAQ";
import { Portrait } from "@/app/_components/Portrait";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import { PREGUNTAS } from "@/app/preguntas/catalogo";
import { BUSINESS_HOURS } from "@/lib/site";

const PILLAR = {
  href: "/fonoaudiologa-ninos-chillan",
  label: "Fonoaudióloga infantil en Chillán",
};

export function PreguntaArticle({
  path,
  crumb,
  title,
  answer,
  whatsappMessage,
  ctaLabel,
  related,
  faqs,
  tambien,
  children,
}: {
  path: string;
  crumb: string;
  title: string;
  answer: string;
  whatsappMessage: string;
  ctaLabel: string;
  related: { href: string; label: string }[];
  faqs: GeoFAQItem[];
  tambien: string[];
  children: React.ReactNode;
}) {
  const links = related.some((item) => item.href === PILLAR.href)
    ? related
    : [PILLAR, ...related];
  const otras = PREGUNTAS.filter(
    (item) => item.href !== path && tambien.includes(item.href),
  );
  const faqItems: GeoFAQItem[] = [{ question: title, answer }, ...faqs];

  return (
    <article className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Preguntas", href: "/preguntas" },
            { label: crumb },
          ]}
        />

        <header className="mb-8">
          <p className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
            Pregunta de padres · Chillán
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p
            data-speakable
            className="text-xl leading-relaxed text-gray-800"
          >
            {answer}
          </p>
        </header>

        <figure className="mb-8">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl bg-rose-100">
            <Portrait
              alt={`Retrato de Katia Domínguez, fonoaudióloga infantil en Chillán, junto a la respuesta: ${title}`}
              sizes="(max-width: 768px) 80vw, 320px"
            />
          </div>
          <figcaption className="mt-2 text-center text-sm text-gray-500">
            Katia Domínguez, fonoaudióloga infantil en Chillán.
          </figcaption>
        </figure>

        <WhatsAppCTA message={whatsappMessage}>{ctaLabel}</WhatsAppCTA>
        <p className="mt-3 text-sm text-gray-600">
          Atención presencial en Chillán, {BUSINESS_HOURS.daysLabel}, de{" "}
          {BUSINESS_HOURS.opens} a {BUSINESS_HOURS.closes}. Escribe la edad de
          tu hijo y qué te preocupa.
        </p>

        <div className="mt-10 text-lg leading-relaxed text-gray-700 [&_a]:font-medium [&_a]:text-rose-700 [&_a]:underline [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_li]:mb-2 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-4 [&_strong]:font-semibold [&_strong]:text-gray-900 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>

        <nav
          aria-label="Páginas relacionadas"
          className="mt-10 rounded-2xl border border-rose-200 bg-white p-5"
        >
          <p className="mb-3 text-sm font-semibold text-rose-800">
            Sigue con estas páginas
          </p>
          <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-medium text-rose-700 underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {otras.length > 0 ? (
          <nav aria-label="Otras preguntas" className="mt-8">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Otras preguntas de padres
            </h2>
            <ul className="space-y-2">
              {otras.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-medium text-rose-700 underline">
                    {item.question}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <GeoFAQ items={faqItems} className="mt-12" />

        <div className="mt-12">
          <WhatsAppCTA message={whatsappMessage}>{ctaLabel}</WhatsAppCTA>
        </div>
      </div>
    </article>
  );
}
