/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NEXT_PUBLIC_ENV === 'GH_PAGE';
const basePath = isGithubPages ? '/wedding' : '';

const nextConfig = {
  env: {
    ENV: process.env.NEXT_PUBLIC_ENV || '',
    BASEPATH: basePath
  },
  basePath: basePath,
  assetPrefix: basePath,
  output: isGithubPages ? 'export' : undefined,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  distDir: isGithubPages ? 'dist' : '.next'
};

module.exports = nextConfig;
