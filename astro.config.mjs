import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  site: 'https://martin-ratti.github.io',
  base: '/Landing-Zenith',
  vite: {
    plugins: [tailwindcss()]
  }
});