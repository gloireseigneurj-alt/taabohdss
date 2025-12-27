import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  // Configuration pour GitHub Pages
  ...(isGithubPages && {
    output: "export",
    basePath: "/taabo-hdss",
    images: { unoptimized: true },
    skipTrailingSlashRedirect: true,
  }),
  
  // Configuration commune
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;