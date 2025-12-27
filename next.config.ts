import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // Configuration pour GitHub Pages (mode export statique)
  ...(isGithubPages && {
    output: "export",
    basePath: "/taabohdss",
    images: { unoptimized: true },
    trailingSlash: true,
  }),
  
  // Configuration commune pour développement
  ...(!isGithubPages && {
    trailingSlash: false,
  }),
  
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
