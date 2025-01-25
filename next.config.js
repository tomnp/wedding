/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    ENV: process.env.ENV || '',
    BASEPATH: process.env.BASEPATH || ''
  },
  basePath: process.env.ENV === 'GH_PAGE' && process.env.BASEPATH ? `/${process.env.BASEPATH}` : '',
  assetPrefix: process.env.ENV === 'GH_PAGE' && process.env.BASEPATH ? `/${process.env.BASEPATH}` : '',
  output: process.env.ENV === 'GH_PAGE' ? 'export' : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  trailingSlash: true,
  distDir: process.env.ENV === 'GH_PAGE' ? 'dist' : '.next'
};

module.exports = nextConfig;
