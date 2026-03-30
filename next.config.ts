import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/how-long-do-veneers-last", destination: "/porcelain-veneers", permanent: true },
      { source: "/image-assets", destination: "/", permanent: true },
      { source: "/new-page", destination: "/", permanent: true },
      { source: "/new-page-1", destination: "/", permanent: true },
      { source: "/new-page-90", destination: "/veneers", permanent: true },
      { source: "/template", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
