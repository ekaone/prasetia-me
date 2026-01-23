import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/cog",
        destination: "https://www.cognitia.space/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
