import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  // distDir: "out", // Optional: Change output directory (default is "out")
  images: {
    unoptimized: true, // Needed if using `next/image`
  },
};

export default nextConfig;
