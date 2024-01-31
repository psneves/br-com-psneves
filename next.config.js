/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
  }

  module.exports = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/index.html',
        },
      ]
    },
  }
  