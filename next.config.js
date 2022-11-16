/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'standalone',
  experimental: {
    outputStandalone: true,
  }
}

module.exports = nextConfig
