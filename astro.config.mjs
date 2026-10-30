import { defineConfig } from 'astro/config';
const site = process.env.SITE_URL || process.env.CF_PAGES_URL;
export default defineConfig({ output: 'static', ...(site ? { site } : {}) });
