/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  }
}

module.exports = nextConfig
