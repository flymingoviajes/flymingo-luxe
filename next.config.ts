import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },

  async headers() {
    return [
      {
        // Cache de larga duración para todos los assets estáticos
        source: "/:path*\\.(jpg|jpeg|png|webp|avif|gif|svg|ico|mp4|woff2|woff|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  compress: true,
};

export default nextConfig;
