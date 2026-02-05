import type { NextConfig } from 'next';
import withPWA from '@ducanh2912/next-pwa';

const nextConfig: NextConfig = {
  turbopack: {},
  output: 'standalone',
};

export default withPWA({
  dest: 'public',
  disable: false,
  register: true,
  workboxOptions: {
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
