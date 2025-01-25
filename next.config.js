/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ENV: process.env.ENV,
  },
  basePath: process.env.ENV === "GH-PAGE" ? "/wedding" : "",
  assetPrefix: process.env.ENV === "GH-PAGE" ? "/wedding" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
