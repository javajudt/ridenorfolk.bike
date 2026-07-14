import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ridenorfolk.bike',
  build: {
    // Emit /rides/index.html style paths for clean URLs on Cloudflare Pages
    format: 'directory',
  },
});
