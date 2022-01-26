import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

import dotenv from 'dotenv'
dotenv.config()

// Vite Plugins
import Icons from 'unplugin-icons/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		target: 'body',
		vite: {
			plugins: [
				Icons({
					compiler: 'svelte',
					autoInstall: true
				})
			]
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	],

	methodOverride: ['PATCH', 'DELETE']
}

export default config
