/** @type {import('next').NextConfig} */
// GITHUB_PAGES=true → serve with /reconcavoos prefix (GitHub Pages)
// Sem a variável → serve na raiz (K3s/Docker)
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isGitHubPages ? '/reconcavoos' : '',
  basePath: isGitHubPages ? '/reconcavoos' : '',
};

export default nextConfig;
