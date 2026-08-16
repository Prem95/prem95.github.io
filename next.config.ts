import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves directories, not extensionless files — without this,
  // /blog would need to resolve blog.html and a blog/ directory also exists.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
