import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		kit: {		adapter: adapter({			fallback: '404.html'		}),		paths: {			base: process.argv.includes('dev') ? '' : process.env.BASE_PATHType 'string | undefined' is not assignable to type '"" | `/${string}` | undefined'.
  Type 'string' is not assignable to type '"" | `/${string}` | undefined'.2322Type 'string | undefined' is not assignable to type '"" | `/${string}` | undefined'.
  Type 'string' is not assignable to type '"" | `/${string}` | undefined'.		}	}};

	preprocess: [vitePreprocess({})]
};

export default config;
