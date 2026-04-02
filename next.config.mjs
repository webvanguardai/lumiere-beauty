/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 300,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
