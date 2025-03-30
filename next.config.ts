import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos"
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com"
      },
      {
        hostname: "res.cloudinary.com"
      }
    ]
  }
};

export default nextConfig;
