/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/levels", destination: "/", permanent: true },
      { source: "/levels/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
