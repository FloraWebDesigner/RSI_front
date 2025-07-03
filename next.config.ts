import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react',
      'lucide-react'
    ],
    serverActions: { 
      bodySizeLimit: '2mb', 
      allowedOrigins: [] 
    }
  },
  serverExternalPackages: [
    'lodash',
    'mongoose',
    'aws-sdk'
  ],
  // Add headers configuration here:
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  }
};

export default nextConfig;