const withOptimizedImages = require("next-optimized-images");

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.mp4|\.mov$/,
      use: { loader: "file-loader" },
    });

    return config;
  },
});

module.exports = nextConfig;
