/** @type {import('next').NextConfig} */
const nextConfig = {
  // ให้ทุก URL ลงท้ายด้วย "/" เพื่อให้ static export ทำงานได้ดี
  trailingSlash: true,

  // สร้างเป็น static export สำหรับเอาไป deploy เป็นไฟล์ล้วน (เช่น S3, Netlify, etc.)
  output: 'export',

  // ใช้ next/image แบบ static ได้ โดยให้ build รูปแบบไม่ optimize ฝั่ง server
  images: {
    unoptimized: true,
  },

  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

module.exports = nextConfig;
