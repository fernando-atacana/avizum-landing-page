/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Suppress source map warnings in development
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = 'eval-source-map'
    }
    return config
  },
  // Disable source maps for production builds
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
