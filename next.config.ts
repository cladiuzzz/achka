import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ESTO SOLUCIONA EL ERROR 400
  },
  // Si tienes la línea "output: 'export'", asegúrate de que esté comentada para Vercel
  // output: 'export', 
};

export default nextConfig;