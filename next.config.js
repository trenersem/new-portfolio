/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images: {
    // loader: "custom",
    unoptimized: true,
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, pages, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/resume": { page: "/resume" },
  //     "/crypto": { page: "/crypto" },
  //     "/halloween": { page: "/halloween" },
  //     "/imovie": { page: "/imovie" },
  //     "/lyricks": { page: "/lyricks" },
  //     "/modern": { page: "/modern" },
  //     "/plants": { page: "/plants" },
  //     "/_error": { page: "/404" },
  //     "/_error": { page: "/500" },
  //   };
  // },
}

module.exports = nextConfig
