import Image from "next/image";

type PortraitProps = {
  alt: string;
  /** true solo en el retrato que es el LCP de la página. */
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Retrato de Katia. El archivo es 1400×1400.
 * Con `fill`, el contenedor padre define el recorte y `sizes` el ancho de descarga.
 * Sin `priority` carga diferida (lazy).
 */
export function Portrait({
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 400px",
  className = "object-cover object-top",
}: PortraitProps) {
  return (
    <Image
      src="/KatiaDominguezFonoaudiologa.jpg"
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      {...(priority
        ? { priority: true, fetchPriority: "high" as const }
        : { loading: "lazy" as const })}
    />
  );
}
