/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'github-production-user-asset-6210df.s3.amazonaws.com',
    ],
  },
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'mdx'],
};

module.exports = nextConfig;
