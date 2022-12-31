/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ignoring ESLint and TypeScript errors for now
  // Will address these in a later PR
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
