/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
