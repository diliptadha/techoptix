/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "imagedelivery.net", "drive.google.com"],
  },
};

export default nextConfig;
