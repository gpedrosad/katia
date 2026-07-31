import Image from "next/image";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  CalendarClock,
  ClipboardList,
  Mic,
  TrendingDown,
  Video,
} from "lucide-react";
import { WhatsAppCTA } from "@/app/_components/WhatsAppCTA";
import {
  AdsGoogleBadge,
  AdsGoogleReviews,
} from "@/app/ads/_components/AdsGoogleTrust";
import { AdsPatientQuotes } from "@/app/ads/_components/AdsPatientQuotes";
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
  "Terapia de Voz Online | Tratamiento Disfonía — Katia Domínguez",
);

const WA_MSG =
  "Hola, llegué por Google. Quiero terapia de voz / tratamiento de disfonía online.";

/** Foto Ads optimizada (~79 KB). No usar el PNG 6 MB del sitio. */
const HERO_IMAGE = "/katia-ads-hero.jpg";

const signals = [
  {
    icon: TrendingDown,
    title: "Sin volumen al final del día",
    desc: "Amaneces bien y en la tarde tu voz está áspera o débil.",
  },
  {
    icon: Mic,
    title: "Dolor o tensión al hablar",
    desc: "Sientes el cuello apretado en reuniones o clases.",
  },
  {
    icon: CalendarClock,
    title: "Ronquera que no se va",
    desc: "Más de dos semanas ronca sin un resfriado que lo explique.",
  },
];

const steps = [
  {
    icon: Video,
    title: "Evaluación por videollamada",
    desc: "Escuchamos tu voz y cómo la usas en tu día a día.",
  },
  {
    icon: ClipboardList,
    title: "Plan para tu voz",
    desc: "Ejercicios y técnica según tu disfonía o fatiga.",
  },
  {
    icon: ArrowRight,
    title: "Sesiones online",
    desc: "Avanzas desde tu casa, sin traslados.",
  },
];

const patientQuotes = [
  {
    name: "María José E.",
    role: "Docente · terapia online",
    text: "Llegaba a casa sin voz después de hacer clases. Con terapia online aprendí a usarla sin lastimarme. No tenía tiempo para ir a consultas.",
  },
  {
    name: "Roberto V.",
    role: "Ventas · nódulos",
    text: "Me diagnosticaron nódulos y temía la cirugía. Con el tratamiento online rehabilité mis cuerdas. Katia guía los ejercicios con mucha claridad.",
  },
  {
    name: "Sofía M.",
    role: "Profesora · fatiga vocal",
    text: "Sufría fatiga vocal constante. Pensaba suspender el semestre. Online me dio protocolos de calentamiento que uso en el colegio. Mi voz revivió.",
  },
];

const faqItems = [
  {
    question: "¿La terapia de voz online funciona igual que la presencial?",
    answer:
      "En adultos, la rehabilitación vocal por videollamada con un protocolo claro muestra resultados comparables a la presencial. Trabajas ejercicios en vivo, sin traslados.",
  },
  {
    question: "¿Qué problemas de voz se pueden tratar online?",
    answer:
      "Disfonía, fatiga vocal, voz ronca persistente y nódulos en fase conservadora. En la evaluación vemos si tu caso aplica a teleterapia.",
  },
  {
    question: "¿Atienden en todo Chile?",
    answer:
      "Sí. La atención es 100% por videollamada, desde cualquier región de Chile.",
  },
  {
    question: "¿Cuál es el primer paso?",
    answer:
      "Escríbenos por WhatsApp. Coordinamos una evaluación vocal online y un plan según tu voz y tu rutina.",
  },
  {
    question: "¿Necesito ver a un otorrino antes?",
    answer:
      "No siempre. Si hay señales de alarma o ya tienes indicación médica, lo consideramos en la evaluación. La terapia no reemplaza una urgencia ni una evaluación ORL cuando corresponde.",
  },
];

export default function AdsVozDisfoniaPage() {
  return (
    <main className="bg-[#faf8f6]">
      {/* Hero — LCP: imagen liviana + priority */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#ffe4e6_0%,_transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 sm:pt-14">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
            <div className="animate-fade-up text-center md:text-left">
              <AdsGoogleBadge className="mb-5" />
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-rose-950 sm:text-5xl">
                Terapia de voz online,{" "}
                <span className="text-rose-700">tratamiento de disfonía</span>
              </h1>
              <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-stone-600 md:mx-0">
                ¿Tu voz falla a mitad del día o te duele hablar? Atención por
                videollamada en todo Chile.
              </p>
              <div className="mt-7 flex flex-col items-center gap-2 md:items-start">
                <WhatsAppCTA
                  message={WA_MSG}
                  className="w-full max-w-md !rounded-2xl !px-6 !py-4 !text-base shadow-lg shadow-green-600/20 sm:!text-lg"
                >
                  Evaluar mi voz por WhatsApp
                </WhatsAppCTA>
                <p className="text-xs text-stone-500">
                  Te respondemos hoy · sin compromiso
                </p>
              </div>
            </div>

            <div
              className="animate-fade-in mx-auto w-full max-w-[240px] md:max-w-none"
              style={{ animationDelay: "120ms" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-rose-100 shadow-xl ring-1 ring-rose-200/60">
                <Image
                  src={HERO_IMAGE}
                  alt={`${BUSINESS_NAME}, fonoaudióloga — terapia de voz online`}
                  fill
                  className="object-cover object-top"
                  priority
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 768px) 240px, 320px"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-rose-950/85 to-transparent p-4 pt-10">
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

      {/* Señales */}
      <section className="content-auto mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-rose-950">
          Señales de que tu voz pide ayuda
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {signals.map((s, i) => (
            <div
              key={s.title}
              className="animate-fade-up rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              style={{ animationDelay: `${80 + i * 80}ms` }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                <s.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <p className="mt-3 font-semibold text-rose-950">{s.title}</p>
              <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="content-auto border-y border-stone-200/70 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-rose-950">
            Cómo funciona
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="animate-fade-up flex flex-col items-center text-center"
                style={{ animationDelay: `${80 + i * 80}ms` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-rose-50 text-rose-700 ring-1 ring-rose-200">
                  <step.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <p className="mt-3 font-semibold text-rose-950">{step.title}</p>
                <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <WhatsAppCTA
              message={WA_MSG}
              className="!rounded-2xl !px-6 !py-3.5 !text-sm sm:!text-base"
            >
              Empezar hoy
            </WhatsAppCTA>
          </div>
        </div>
      </section>

      <div className="content-auto">
        <AdsPatientQuotes quotes={patientQuotes} />
      </div>

      <div className="content-auto">
        <AdsGoogleReviews reviewIndexes={[5, 4]} />
      </div>

      {/* FAQ — client diferido */}
      <section className="content-auto mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <AdsFaq items={faqItems} />
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-b from-rose-100 to-rose-50">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-rose-950 sm:text-3xl">
            Empieza tu terapia de voz online
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-stone-600">
            Un mensaje basta. Orientación y agenda por WhatsApp.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA
              message={WA_MSG}
              className="w-full max-w-md !rounded-2xl !px-6 !py-4 !text-base shadow-lg shadow-green-600/20 sm:!text-lg"
            >
              WhatsApp ahora
            </WhatsAppCTA>
          </div>
          <p className="mt-4 text-xs text-stone-500">
            No reemplaza urgencia médica ni evaluación ORL si corresponde.
          </p>
        </div>
      </section>
    </main>
  );
}
