import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  // distDir: "out", // Optional: Change output directory (default is "out")
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Needed if using `next/image`
  },
  // If your repo is not at the root domain (like github.com/user/repo),
  // set the basePath and assetPrefix
  basePath: '/next-portfolio',
  assetPrefix: '/next-portfolio/',
};

export default nextConfig;
