// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    experimental: {
        images: {
            unoptimized: true,
        },
    },
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
        }
    },
    i18n: {
        locales: ['pt'],
        defaultLocale: 'pt',
    },
}

module.exports = nextConfig
