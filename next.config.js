/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
}

module.exports = ntConfigex
*/

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/pridumaem/' : '',
  images: {
    unoptimized: true,
  },
}