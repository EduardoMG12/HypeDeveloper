/** @type {import('next').NextConfig} */
const nextConfig = {    
    images: {
      domains: ['plus.unsplash.com', 'unsplash.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
    },
  };

module.exports = nextConfig
