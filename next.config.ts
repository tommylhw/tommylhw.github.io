import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.glb$/,
  //     use: {
  //       loader: "file-loader",
  //       options: {
  //         publicPath: "/_next/static/",
  //         outputPath: "static/",
  //         name: "[name].[hash].[ext]",
  //       },
  //     },
  //   });
  //   return config;
  // },
  // images: {
  //   domains: ["picsum.photos", "assets.aceternity.com", "api.microlink.io"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: isProd ? "/tommylhw.github.io/" : "",
  basePath: isProd ? "/tommylhw.github.io" : "",
  output: isProd ? "export" : "standalone",
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
};

export default nextConfig;
