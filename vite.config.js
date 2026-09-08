import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const require = createRequire(import.meta.url);

function resolveSharedDependencies() {
  return {
    name: 'resolve-shared-deps',
    resolveId(source, importer) {
      if (importer && (importer.includes('shared') || importer.includes('shared\\src'))) {
        if (!source.startsWith('.') && !source.startsWith('/') && !source.startsWith('@')) {
          try {
            return require.resolve(source, { paths: [path.resolve(__dirname, 'node_modules')] });
          } catch (e) {
            // Ignore fallback
          }
        } else if (source.startsWith('@') && !source.startsWith('@/') && !source.startsWith('@admin') && !source.startsWith('@shared') && !source.startsWith('@api') && !source.startsWith('@components') && !source.startsWith('@hooks') && !source.startsWith('@lib') && !source.startsWith('@store') && !source.startsWith('@styles') && !source.startsWith('@utils') && !source.startsWith('@types')) {
          try {
            return require.resolve(source, { paths: [path.resolve(__dirname, 'node_modules')] });
          } catch (e) {
            // Ignore fallback
          }
        }
      }
      return null;
    }
  };
}

import fs from 'fs';

const getSharedPath = (subpath = '') => {
  const parentPath = path.resolve(__dirname, '../shared/src', subpath);
  const localPath = path.resolve(__dirname, './shared/src', subpath);
  return fs.existsSync(parentPath) ? parentPath : localPath;
};

export default defineConfig({
  plugins: [
    react(),
    resolveSharedDependencies(),
  ],

  resolve: {
    alias: {
      '@':           path.resolve(__dirname, './src'),
      '@admin':      path.resolve(__dirname, './src'),
      '@shared':     getSharedPath(''),
      '@api':        getSharedPath('api'),
      '@components': getSharedPath('components'),
      '@hooks':      getSharedPath('hooks'),
      '@lib':        getSharedPath('lib'),
      '@store':      getSharedPath('store'),
      '@styles':     getSharedPath('styles'),
      '@utils':      getSharedPath('utils'),
      '@types':      getSharedPath('types'),
    },
  },

  server: {
    port: 5174,
    proxy: {
      '/api': {
        target:       'http://localhost:3000',
        changeOrigin: true,
        secure:       false,
      },
      '/socket.io': {
        target:       'http://localhost:3000',
        ws:           true,
        changeOrigin: true,
        secure:       false,
      },
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          query:  ['@tanstack/react-query'],
          motion: ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
