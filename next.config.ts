import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour les images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false, // Laisse Next.js optimiser les images
  },
  // Configuration pour Vercel
  output: 'standalone',
};

export default nextConfig;
