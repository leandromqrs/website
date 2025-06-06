// @ts-check
import { defineConfig } from 'astro/config';
import { paraglideVitePlugin } from "@inlang/paraglide-js";

// https://astro.build/config
export default defineConfig({
    site: 'https://leandromqrs.dev',
    i18n: {
        locales: ['en', 'pt-br'],
        defaultLocale: 'en',
    },
    vite: {
		plugins: [
			paraglideVitePlugin({
				project: "./project.inlang",
				outdir: "./src/paraglide",
			}),
		],
    },
});
