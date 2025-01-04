import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // (optional) Set your desired output configuration
  distDir: "build",
  images: {
    unoptimized: true,
  },
};

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
    domains: ["firebasestorage.googleapis.com"]
  },
};

export default nextConfig;
