import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration Next.js
  experimental: {
    appDir: true,
  },
  // Configuration pour les images
  images: {
    domains: [],
    unoptimized: true, // Pour Vercel
  },
};

export default nextConfig;
