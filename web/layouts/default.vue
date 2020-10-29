<template>
	<div>
		<client-only>
			<aside
				v-if="$store.state.showDrafPreviewBanner"
				class="preview-banner"
			>
				<p class="font-semibold">
					Draft Preview.
					<button
						class="font-semibold underline"
						@click="$nuxt.refresh()"
					>
						Click here to refresh
					</button>
				</p>
			</aside>
		</client-only>
		<Header />
		<main><nuxt /></main>
		<Footer />
	</div>
</template>

<script>
import Header from '~/components/parts/Header.vue'
import Footer from '~/components/parts/Footer.vue'

export default {
	components: {
		Header,
		Footer,
	},
	data() {
		return {
			pageOptions: this.$store.getters.getPageOptions,
		}
	},
	computed: {
		keywords() {
			return this.pageOptions.metaKeywords
				? this.pageOptions.metaKeywords.join(',')
				: ''
		},
	},
	head() {
		return {
			titleTemplate: (title) =>
				title === '' || title === '…'
					? this.pageOptions.name
					: `${this.pageOptions.name} – ${title}`,
			meta: [
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.pageOptions.name,
				},
				{
					hid: 'og:site_name',
					name: 'og:site_name',
					content: this.pageOptions.name,
				},
				{
					hid: 'description',
					name: 'description',
					content: this.pageOptions.metaDescription,
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: this.pageOptions.metaDescription,
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: this.keywords,
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content: this.pageOptions.image
						? this.pageOptions.image.asset.url
						: '',
				},
			],
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

main {
	position: relative;
	min-height: 80vh;
}

.preview-banner {
	position: sticky;
	top: 0.5rem;
	width: 80%;
	max-width: 20rem;
	margin: 0 auto;
	padding: 0.5rem;
	border-radius: 1rem;
	text-align: center;
	background: var(--color-accent);
	color: var(--color-white);
	box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.2);
}

.preview-banner button {
	font-weight: 700;
}
</style>
