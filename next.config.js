/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    ENV: process.env.ENV || '',
    BASEPATH: process.env.BASEPATH || ''
  },
  basePath: process.env.ENV === 'GH_PAGE' ? '/wedding' : '',
  assetPrefix: process.env.ENV === 'GH_PAGE' ? '/wedding' : '',
  output: process.env.ENV === 'GH_PAGE' ? 'export' : undefined,
  images: {
    unoptimized: true,
    domains: ['tomnp.github.io'],
    path: process.env.ENV === 'GH_PAGE' ? 'https://tomnp.github.io/wedding' : ''
  },
  trailingSlash: true,
  distDir: process.env.ENV === 'GH_PAGE' ? 'dist' : '.next'
};

module.exports = nextConfig;
