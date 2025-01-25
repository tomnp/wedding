/** @type {import('next').NextConfig} */

const isGithubPages = process.env.ENV === 'GH_PAGE';
const basePath = isGithubPages && process.env.BASEPATH ? `/${process.env.BASEPATH}` : '';

const nextConfig = {
  env: {
    ENV: process.env.ENV || '',
    BASEPATH: process.env.BASEPATH || '',
  },
  basePath,
  assetPrefix: basePath,
  output: isGithubPages ? 'export' : undefined,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable trailing slashes for consistent routing
  trailingSlash: true,
  distDir: isGithubPages ? 'dist' : '.next',
  // Handle public assets
  publicRuntimeConfig: {
    basePath: process.env.ENV === 'GH_PAGE' && process.env.BASEPATH ? `/${process.env.BASEPATH}` : '',
  },
};

module.exports = nextConfig;
