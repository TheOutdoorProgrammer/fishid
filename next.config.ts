import type { NextConfig } from 'next';
import withPWA from '@ducanh2912/next-pwa';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/fishid' : '';

const nextConfig: NextConfig = {
  turbopack: {},
  // Use 'export' for static site (GitHub Pages), 'standalone' for Docker
  output: 'export',
  // GitHub Pages deploys to /fishid/ subdirectory
  basePath,
  assetPrefix: isGitHubPages ? '/fishid/' : '',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default withPWA({
  dest: 'public',
  disable: false,
  register: true,
  workboxOptions: {
    importScripts: [`${basePath}/worker-custom.js`],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/upload\.wikimedia\.org\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'fish-images',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 604800,
          },
        },
      },
      {
        urlPattern: /^https:\/\/commons\.wikimedia\.org\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'wiki-commons',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 604800,
          },
        },
      },
      {
        urlPattern: /\/_next\/static\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'next-static',
          expiration: {
            maxEntries: 60,
            maxAgeSeconds: 2592000,
          },
        },
      },
      {
        urlPattern: /\/_next\/image\?.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'next-image',
          expiration: {
            maxEntries: 60,
            maxAgeSeconds: 2592000,
          },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 60,
            maxAgeSeconds: 2592000,
          },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'assets',
          expiration: {
            maxEntries: 60,
            maxAgeSeconds: 2592000,
          },
        },
      },
      {
        urlPattern: /\//,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'html',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 86400,
          },
        },
      },
    ],
  },
})(nextConfig);
