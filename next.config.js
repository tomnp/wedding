/** @type {import('next').NextConfig} */

// Debug logging
console.log('Environment Variables:');
console.log('ENV:', process.env.ENV);
console.log('BASEPATH:', process.env.BASEPATH);
console.log('Is GitHub Pages?:', process.env.ENV === 'GH_PAGE');

const isGithubPages = process.env.ENV === 'GH_PAGE';
const basePath = isGithubPages ? '/wedding' : '';

const nextConfig = {
  env: {
    ENV: process.env.ENV || '',
    BASEPATH: basePath
  },
  basePath: basePath,
  assetPrefix: basePath,
  output: isGithubPages ? 'export' : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tomnp.github.io',
        pathname: '/wedding/**'
      }
    ]
  },
  trailingSlash: true,
  distDir: isGithubPages ? 'dist' : '.next'
};

// Debug logging for final config
console.log('\nNext.js Config:');
console.log('basePath:', nextConfig.basePath);
console.log('assetPrefix:', nextConfig.assetPrefix);
console.log('output:', nextConfig.output);
console.log('distDir:', nextConfig.distDir);

module.exports = nextConfig;
