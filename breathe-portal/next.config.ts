import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/NASA-BREATHE-Portal",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
