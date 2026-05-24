import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  async redirects() {
    return [
      { source: "/lipodem", destination: "/lipodem-nedir", permanent: true },
      { source: "/lipedema", destination: "/lipodem-nedir", permanent: true },
      { source: "/lipodem-ameliyat", destination: "/lipodem-tedavisi", permanent: true },
      { source: "/lipodem-diyet", destination: "/lipodem-beslenme", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
