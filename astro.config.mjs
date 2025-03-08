// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import auth from 'auth-astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: 'https://tckw-jukentaikenki.github.io',
    integrations: [mdx(), sitemap()],
    output: 'server',
    // integrations: [mdx(), sitemap(), auth()],
    // adapter: node({
    //     mode: 'standalone',
    // }),
});