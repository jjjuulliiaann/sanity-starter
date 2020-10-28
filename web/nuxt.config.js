import pkg from './package'

export default {
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		titleTemplate: '…',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description,
			},
			{
				hid: 'msapplication-TileColor',
				name: 'msapplication-TileColor',
				content: '#ffffff',
			},
			{
				hid: 'msapplication-config',
				name: 'msapplication-config',
				content: '/favicons/browserconfig.xml',
			},
			{
				hid: 'theme-color',
				name: 'theme-color',
				content: '#ffffff',
			},
			{
				property: 'og:image',
				content:
					'https://1e9-conference-2020.netlify.app/favicons/sharing.jpg',
			},
		],
		link: [
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/favicons/apple-touch-icon.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicons/favicon-32x32.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicons/favicon-16x16.png',
			},
			{
				rel: 'mask-icon',
				href: '/favicons/safari-pinned-tab.svg',
				color: '#000000',
			},
			{
				rel: 'shortcut icon',
				href: '/favicons/favicon.ico',
			},
		],
	},

	/*
	 ** PWA Web Manifest
	 */
	pwa: {
		manifest: {
			name: '',
			lang: 'de',
			short_name: '',
			icons: [
				{
					src: '/favicons/android-chrome-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/favicons/android-chrome-256x256.png',
					sizes: '256x256',
					type: 'image/png',
				},
			],
			theme_color: '#ffffff',
			background_color: '#ffffff',
			display: 'standalone',
		},
	},

	router: {
		trailingSlash: true,
	},

	sitemap: {
		// hostname: 'https://www.mywebsite.com',
		trailingSlash: true,
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [{ src: '~/styles/reset.css' }, { src: '~/styles/global.css' }],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		'~/plugins/sanity.js',
		'~/plugins/lazysizes.client.js',
		'~/plugins/preview.client.js',
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/sanity',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		postcss: {
			plugins: {
				'postcss-import': {},
				'postcss-preset-env': {
					stage: 3,
					features: {
						'color-mod-function': { unresolved: 'warn' },
						'nesting-rules': true,
						'custom-media-queries': {
							preserve: false,
						},
						'custom-properties': {
							preserve: false,
						},
					},
				},
			},
		},

		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx, { isClient, loaders: { vue } }) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				})
			}
			// Handle data-src for lazysizes
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		},

		extend(config, { isDev, isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		},
	},

	generate: {
		fallback: true,
	},

	sanity: {
		projectId: 'vnxsnwyh',
		dataset: 'production',
		withCredentials: true,
		useCdn: true,
	},
}
