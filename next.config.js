/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOST: process.env.HOST,
    HOST_API: process.env.HOST_API
  }
}

module.exports = nextConfig
