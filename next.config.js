/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAGICBELL_API_KEY: process.env.MAGICBELL_API_KEY,
    MAGICBELL_USER_EMAIL: process.env.MAGICBELL_USER_EMAIL,
  }
}

module.exports = nextConfig
