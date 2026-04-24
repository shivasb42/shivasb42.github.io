/** @type {import('next').NextConfig} */
// Set NEXT_BASE_PATH=/your-repo-name in CI for project sites (username.github.io/repo/).
// Omit for a user/org site repo named <owner>.github.io (served from domain root).
const basePath = process.env.NEXT_BASE_PATH?.trim() || undefined

const nextConfig = {
  output: 'export',
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
