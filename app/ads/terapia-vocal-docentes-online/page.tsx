import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Clock3,
  Presentation,
  Volume2,
} from "lucide-react";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import {
  AdsGoogleBadge,
  AdsGoogleReviews,
} from "@/app/ads/_components/AdsGoogleTrust";
import { AdsStickyCta } from "@/app/ads/_components/AdsStickyCta";
import { buildNoIndexMetadata } from "@/lib/seo";
import { BUSINESS_NAME } from "@/lib/site";

/** FAQ con JS solo cuando hace falta (acordeón). */
const AdsFaq = dynamic(
  () =>
    import("@/app/ads/_components/AdsFaq").then((m) => m.AdsFaq),
  {
    loading: () => (
      <div className="h-48 animate-pulse rounded-2xl border border-stone-200 bg-white" />
    ),
  },
);

export const metadata = buildNoIndexMetadata(
  "Terapia Vocal Docentes Online | Profesores Chile - Katia Domínguez",
);

const WA_MSG =
  "Hola, llegué por Google. Soy docente y quiero terapia vocal online.";

/** Foto Ads optimizada (~79 KB). No usar el PNG 6 MB del sitio. */
const HERO_IMAGE = "/katia-ads-hero.jpg";

/** Adulto/voz primero; resto para llenar grilla desktop (6 = 2x3). */
const REVIEW_INDEXES = [5, 4, 0, 1, 2, 3] as const;

const signals = [
  {
    icon: Clock3,
    title: "Terminas la jornada sin voz",
    desc: "Empiezas bien, pero al último bloque hablas forzando o carraspeando.",
  },
  {
    icon: Volume2,
    title: "Subes el volumen para que te escuchen",
    desc: "La sala, el ruido o las clases largas te llevan a exigir de más la voz.",
  },
  {
    icon: Presentation,
    title: "Ya hay disfonía, fatiga o nódulos",
    desc: "Necesitas una guía clara para cuidar tu voz sin pausar tu trabajo.",
  },
];

const steps = [
  {
    title: "Cuentas tu rutina docente",
    desc: "Revisamos carga vocal, horarios, cursos y qué pasa con tu voz durante la semana.",
  },
  {
    title: "Evaluación vocal online",
    desc: "Observamos cómo usas la voz y definimos qué trabajar primero.",
  },
  {
    title: "Plan aplicable en clases",
    desc: "Ejercicios, técnica y cuidados para hablar con menos esfuerzo.",
  },
];

const faqItems = [
  {
    question: "¿Sirve la terapia vocal online para docentes?",
    answer:
      "Sí. En adultos, la rehabilitación vocal por videollamada permite trabajar técnica, ejercicios y hábitos de uso vocal en vivo, adaptados a la rutina de clases.",
  },
  {
    question: "¿Atienden profesores de cualquier ciudad de Chile?",
    answer:
      "Sí. La atención es 100% online por videollamada, desde cualquier región de Chile.",
  },
  {
    question: "¿Qué hago si ya tengo disfonía o nódulos vocales?",
    answer:
      "Puedes escribirnos por WhatsApp para coordinar una evaluación vocal online. Si corresponde evaluación médica u ORL, se conversa de forma clara desde el inicio.",
  },
];

const CTA_CLASS =
  "ads-cta-press w-full max-w-md !rounded-2xl !px-6 !py-4 !text-base shadow-lg shadow-green-600/20 sm:!text-lg active:scale-[0.98]";

export default function AdsTerapiaVocalDocentesPage() {
  return (
    <main className="ads-landing bg-[#faf8f6]">
      {/* Hero: dolor docente + acción WhatsApp, foto sin fade para LCP. */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#ffe4e6_0%,_transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
            <div className="text-center md:text-left">
              <AdsGoogleBadge className="ads-rise mb-5" />
              <h1 className="ads-rise ads-rise-d1 text-4xl font-extrabold leading-[1.1] tracking-tight text-rose-950 sm:text-5xl">
                Terapia vocal online{" "}
                <span className="text-rose-700">para docentes</span>
              </h1>
              <p className="ads-rise ads-rise-d2 mx-auto mt-4 max-w-md text-lg leading-relaxed text-stone-600 md:mx-0">
                Si terminas haciendo clases con la voz ronca, cansada o con
                dolor, agenda orientación por videollamada en Chile.
              </p>
              <div
                id="ads-cta-hero"
                className="ads-cta-enter mt-7 flex flex-col items-center gap-2 md:items-start"
              >
                <WhatsAppCTA message={WA_MSG} className={CTA_CLASS}>
                  Quiero cuidar mi voz
                </WhatsAppCTA>
                <p className="text-xs text-stone-500">
                  Respuesta por WhatsApp · atención online en Chile
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[240px] md:max-w-none">
              <div className="ads-photo-settle relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-xl ring-1 ring-rose-200/60">
                <Image
                  src={HERO_IMAGE}
                  alt={`${BUSINESS_NAME}, fonoaudióloga - terapia vocal online para docentes`}
                  fill
                  className="object-cover object-top"
                  priority
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 768px) 240px, 320px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rose-950/85 to-transparent p-4 pt-10">
                  <p className="text-sm font-semibold text-white">
                    {BUSINESS_NAME}
                  </p>
                  <p className="text-xs text-rose-200/90">
                    Fonoaudióloga · atención vocal online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Señales: lista directa, sin cards decorativas. */}
      <section className="content-auto mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-rose-950">
          Cuando enseñar empieza a costarte la voz
        </h2>
        <ul className="mx-auto mt-8 max-w-2xl space-y-5">
          {signals.map((s) => (
            <li key={s.title} className="flex gap-4 text-left">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                <s.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-rose-950">{s.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-stone-600">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Cómo funciona: reduce fricción sin CTA intermedio. */}
      <section className="content-auto border-y border-stone-200/70 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-rose-950">
            Cómo funciona
          </h2>
          <ol className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-3 sm:max-w-none">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-950 text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <p className="mt-3 font-semibold text-rose-950">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-stone-600">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <p className="content-auto mx-auto max-w-2xl px-4 py-6 text-center text-sm leading-relaxed text-stone-600 sm:px-6">
        <span className="font-semibold text-rose-950">{BUSINESS_NAME}</span>
        , fonoaudióloga: terapia vocal online para docentes y profesores en
        Chile.
      </p>

      <div className="content-auto">
        <AdsGoogleReviews reviewIndexes={[...REVIEW_INDEXES]} />
      </div>

      <section className="content-auto mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <AdsFaq items={faqItems} />
      </section>

      <section
        id="ads-cta-final"
        className="border-t border-stone-200/80 bg-white"
      >
        <div className="mx-auto max-w-lg px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-rose-950 sm:text-3xl">
            Haz que tu voz aguante la semana
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-stone-600">
            Escríbenos y coordinamos una evaluación vocal online para tu rutina
            docente.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA message={WA_MSG} className={CTA_CLASS}>
              Empezar por WhatsApp
            </WhatsAppCTA>
          </div>
          <p className="mx-auto mt-8 max-w-xs text-[11px] leading-relaxed text-stone-400">
            Orientación clínica · no reemplaza urgencia ni evaluación ORL si
            corresponde
          </p>
        </div>
      </section>

      <AdsStickyCta message={WA_MSG} label="Quiero cuidar mi voz" />
    </main>
  );
}
