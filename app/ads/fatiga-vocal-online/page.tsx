import Image from "next/image";
import dynamic from "next/dynamic";
import {
  BatteryLow,
  Clock3,
  Mic,
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
  "Tratamiento Fatiga Vocal Online | Voz Cansada — Katia Domínguez",
);

const WA_MSG =
  "Hola, llegué por Google. Quiero tratamiento de fatiga vocal online.";

/** Foto Ads optimizada (~79 KB). No usar el PNG 6 MB del sitio. */
const HERO_IMAGE = "/katia-ads-hero.jpg";

/** Adulto/voz primero; resto para llenar grilla desktop (6 = 2×3). */
const REVIEW_INDEXES = [5, 4, 0, 1, 2, 3] as const;

const signals = [
  {
    icon: BatteryLow,
    title: "La voz se agota antes que tú",
    desc: "Empiezas bien y a media jornada ya no proyectas ni te escuchan igual.",
  },
  {
    icon: Mic,
    title: "Hablar te cuesta esfuerzo",
    desc: "Notas tensión, carraspeo o ardor después de reuniones o clases.",
  },
  {
    icon: Clock3,
    title: "El descanso no alcanza",
    desc: "Duermes o callas un rato y al volver a hablar vuelve el cansancio.",
  },
];

const steps = [
  {
    title: "Evaluación por videollamada",
    desc: "Revisamos cómo usas la voz en tu día y qué gatilla la fatiga.",
  },
  {
    title: "Plan para tu carga vocal",
    desc: "Técnica, pausas y ejercicios según tu rutina de trabajo o estudio.",
  },
  {
    title: "Sesiones online",
    desc: "Avanzas desde casa o la oficina, sin traslados.",
  },
];

const faqItems = [
  {
    question: "¿El tratamiento de fatiga vocal online funciona?",
    answer:
      "Sí. En adultos, la rehabilitación vocal por videollamada permite trabajar técnica, respiración y hábitos de uso en vivo, con resultados comparables a la presencial cuando hay un protocolo claro.",
  },
  {
    question: "¿Atienden en todo Chile?",
    answer:
      "Sí. La atención es 100% por videollamada, desde cualquier región de Chile.",
  },
  {
    question: "¿Cuál es el primer paso?",
    answer:
      "Escríbenos por WhatsApp. Coordinamos una evaluación vocal online y un plan según tu fatiga y tu rutina.",
  },
];

const CTA_CLASS =
  "ads-cta-press w-full max-w-md !rounded-2xl !px-6 !py-4 !text-base shadow-lg shadow-green-600/20 sm:!text-lg active:scale-[0.98]";

export default function AdsFatigaVocalPage() {
  return (
    <main className="ads-landing bg-[#faf8f6]">
      {/* Hero — LCP: foto sin fade opacity; motion copy + scale */}
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
                Tratamiento de{" "}
                <span className="text-rose-700">fatiga vocal</span> online
              </h1>
              <p className="ads-rise ads-rise-d2 mx-auto mt-4 max-w-md text-lg leading-relaxed text-stone-600 md:mx-0">
                Si terminas el día con la voz cansada o débil, agenda
                orientación por videollamada en Chile.
              </p>
              <div
                id="ads-cta-hero"
                className="ads-cta-enter mt-7 flex flex-col items-center gap-2 md:items-start"
              >
                <WhatsAppCTA message={WA_MSG} className={CTA_CLASS}>
                  Quiero tratar mi fatiga vocal
                </WhatsAppCTA>
                <p className="text-xs text-stone-500">
                  Te respondemos hoy · sin compromiso
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[240px] md:max-w-none">
              <div className="ads-photo-settle relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-xl ring-1 ring-rose-200/60">
                <Image
                  src={HERO_IMAGE}
                  alt={`${BUSINESS_NAME}, fonoaudióloga — tratamiento fatiga vocal online`}
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
                    Fonoaudióloga · atención online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Señales — lista, sin cards (distill) */}
      <section className="content-auto mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-rose-950">
          Señales de fatiga vocal
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

      {/* Cómo funciona — secuencia numerada (sin CTA intermedio) */}
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

      {/* Credencial breve — confianza antes de reseñas */}
      <p className="content-auto mx-auto max-w-2xl px-4 py-6 text-center text-sm leading-relaxed text-stone-600 sm:px-6">
        <span className="font-semibold text-rose-950">{BUSINESS_NAME}</span>
        , fonoaudióloga: tratamiento de fatiga vocal por videollamada en todo
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
            ¿Listo para aliviar tu fatiga vocal?
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-stone-600">
            Escríbenos y coordinamos tu evaluación online.
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

      <AdsStickyCta message={WA_MSG} label="Quiero tratar mi fatiga vocal" />
    </main>
  );
}
