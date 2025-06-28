import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/shared"],
  devIndicators: false,
  images: {
    domains: [
      "localhost",
      "blissful-euler-mweg49rpx.storage.c2.liara.space",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["yjs"] = path.resolve(
        __dirname,
        "node_modules/yjs"
      );
    }
    return config;
  },
};

export default nextConfig;
