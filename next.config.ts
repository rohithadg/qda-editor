import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@tiptap/react'],
  },
  turbopack: {},
};

export default nextConfig;
