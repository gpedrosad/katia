import Link from "next/link";

const COUNTRIES = [
  {
    href: "/voz-online/mexico",
    label: "terapeuta de lenguaje online en México",
  },
  {
    href: "/voz-online/colombia",
    label: "fonoaudióloga online en Colombia",
  },
  {
    href: "/voz-online/peru",
    label: "terapia de lenguaje y voz online en Perú",
  },
] as const;

/** Enlaces a las páginas de país hispanohablante. Omite la página actual. */
export function LatamVoiceLinks({ omitHref }: { omitHref?: string }) {
  const items = COUNTRIES.filter((country) => country.href !== omitHref);

  return (
    <p>
      La misma sesión, por videollamada y en español, también está descrita para{" "}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.href}>
            {index > 0 ? (isLast ? " y " : ", ") : null}
            <Link href={item.href}>{item.label}</Link>
          </span>
        );
      })}
      .
    </p>
  );
}
