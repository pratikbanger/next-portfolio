import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  basePath: '/next-portfolio',
  assetPrefix: '/next-portfolio/',
  // distDir: "out", // Optional: Change output directory (default is "out")
  images: {
    unoptimized: true, // Needed if using `next/image`
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // If your repo is not at the root domain (like github.com/user/repo),
  // set the basePath and assetPrefix
};

export default nextConfig;
