import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';
import vercel from '@astrojs/vercel-adapter';

export default defineConfig({
    // providers: [
    //     GitHub({
    //         clientId: import.meta.env.GITHUB_CLIENT_ID,
    //         clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    //     }),
    // ],
    output: 'server',
    adapter: vercel(),
});