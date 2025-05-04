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
    serverActions: { // 改为对象形式配置
      bodySizeLimit: '2mb', // 默认值，可调整
      allowedOrigins: [] // 如果需要跨域控制
    }
  },
  serverExternalPackages: [
    'lodash',
    'mongoose',
    'aws-sdk'
  ]
};

export default nextConfig;