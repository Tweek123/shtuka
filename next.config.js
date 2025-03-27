/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/shtuka',
  images: {
    domains: ['1shtuka.ru'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // If you also want to skip TypeScript errors
  },
};

module.exports = nextConfig;
