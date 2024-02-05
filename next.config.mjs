/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'r2.artijo.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'ghost.artijo.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '**',
          },
        ],
      },
    
};

export default nextConfig;
