/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search',
        permanent: true,
      },
    ]
  },
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
