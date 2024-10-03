/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    AUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  darkMode: "false",
};

module.exports = nextConfig;
