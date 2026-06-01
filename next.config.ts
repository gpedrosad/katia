import type { NextConfig } from "next";
import path from "path";

function apexToCanonical(source: string, destination: string) {
  return {
    source,
    has: [{ type: "host" as const, value: "katialafono.cl" }],
    destination: `https://www.katialafono.cl${destination}`,
    permanent: true,
  };
}

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async redirects() {
    return [
      // Evita cadenas apex -> www -> canónica final en URLs legacy de alto valor SEO.
      apexToCanonical(
        "/chillan/lenguaje-infantil",
        "/fonoaudiologa-ninos-chillan",
      ),
      apexToCanonical(
        "/fonoaudiologia-infantil-chillan",
        "/fonoaudiologa-ninos-chillan",
      ),
      apexToCanonical(
        "/especialista-lenguaje-infantil-chillan",
        "/fonoaudiologa-ninos-chillan",
      ),
      apexToCanonical(
        "/fonoaudiologo-pediatrico-chillan",
        "/fonoaudiologa-ninos-chillan",
      ),
      apexToCanonical(
        "/evaluacion-fonoaudiologica-infantil-chillan",
        "/servicios/evaluacion-fonoaudiologica",
      ),
      apexToCanonical(
        "/servicios/terapia-de-lenguaje-infantil-chillan",
        "/servicios/terapia-lenguaje-infantil",
      ),
      apexToCanonical(
        "/servicios/terapia-tea-comunicacion-chillan",
        "/servicios/tea-trastorno-espectro-autista",
      ),
      apexToCanonical(
        "/servicios/problemas-lectoescritura-chillan",
        "/servicios/dificultades-lectoescritura",
      ),
      apexToCanonical(
        "/agendar",
        "/agendar-hora-fonoaudiologo-infantil-chillan",
      ),
      {
        source: "/:path*",
        has: [{ type: "host", value: "katialafono.cl" }],
        destination: "https://www.katialafono.cl/:path*",
        permanent: true,
      },
      {
        source: "/chillan/lenguaje-infantil",
        destination: "/fonoaudiologa-ninos-chillan",
        permanent: true,
      },
      {
        source: "/agendar",
        destination: "/agendar-hora-fonoaudiologo-infantil-chillan",
        permanent: true,
      },
      {
        source: "/fonoaudiologia-infantil-chillan",
        destination: "/fonoaudiologa-ninos-chillan",
        permanent: true,
      },
      {
        source: "/especialista-lenguaje-infantil-chillan",
        destination: "/fonoaudiologa-ninos-chillan",
        permanent: true,
      },
      {
        source: "/fonoaudiologo-pediatrico-chillan",
        destination: "/fonoaudiologa-ninos-chillan",
        permanent: true,
      },
      {
        source: "/evaluacion-fonoaudiologica-infantil-chillan",
        destination: "/servicios/evaluacion-fonoaudiologica",
        permanent: true,
      },
      {
        source: "/servicios/terapia-de-lenguaje-infantil-chillan",
        destination: "/servicios/terapia-lenguaje-infantil",
        permanent: true,
      },
      {
        source: "/servicios/terapia-tea-comunicacion-chillan",
        destination: "/servicios/tea-trastorno-espectro-autista",
        permanent: true,
      },
      {
        source: "/servicios/problemas-lectoescritura-chillan",
        destination: "/servicios/dificultades-lectoescritura",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
