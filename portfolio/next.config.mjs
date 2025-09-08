/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_PAGES === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1] || '';

const nextConfig = {
  output: 'export',            // gera site estático em /out
  trailingSlash: true,         // importante para GitHub Pages
  images: { unoptimized: true },
  // Para Pages: https://<user>.github.io/<repo>/
  basePath: isPages && repo ? `/${repo}` : '',
  assetPrefix: isPages && repo ? `/${repo}/` : '',
  experimental: { typedRoutes: true }
};

export default nextConfig;
