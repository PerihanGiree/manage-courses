/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
}

module.exports = withImages({...nextConfig});
