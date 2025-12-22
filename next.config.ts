import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // cho phép dùng <Image /> với ảnh online (sau này rất hay dùng)
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;