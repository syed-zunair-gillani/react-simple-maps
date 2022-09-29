/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['tur', 'fr'],
    defaultLocale: 'tur',
  },
}

module.exports = nextConfig
