/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
};

export default nextConfig;
