import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async redirects() {
    return [
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
