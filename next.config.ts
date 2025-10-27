import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.coinpaprika.com",
        port: "",
        pathname: "/coin/**",
      },
    ],
  },
};

export default nextConfig;
