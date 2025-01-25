/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/wedding" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
