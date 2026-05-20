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
    ];
  },
};

export default nextConfig;
