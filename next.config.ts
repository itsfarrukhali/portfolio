import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allowed image qualities for next/image `quality` prop
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

export default nextConfig;
