import { defineConfig } from 'vitest/config';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/ai-studio-csp/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    reporters: [
      'default',
      'vitest-sonar-reporter',
    ],
    outputFile: './coverage/sonar.xml',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'lcovonly'],
      reportsDirectory: './coverage',
    },
    environment: 'jsdom',
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
