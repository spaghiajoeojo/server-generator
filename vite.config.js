import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';
import shebang from 'rollup-plugin-add-shebang';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      minify: false,
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        formats: ['cjs'],
        name: 'index',
        fileName: 'index',
      },
      rollupOptions: {
        plugins: [shebang(
          {
            include: 'dist/index.js',
          },
        )],
        external: [
          ...Object.keys(packageJson.dependencies),
          'child_process',
          'fs',
          'path',
        ],
      },
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
