/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (served from https://habibsabir1998.github.io/)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
