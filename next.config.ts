import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.poecalc.tools" }],
        destination: "https://poecalc.tools/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
