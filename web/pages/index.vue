<template>
	<section class="section">
		<!-- content -->
	</section>
</template>

<script>
import groq from 'groq'

const query = groq`*[_id == "pageOptions-singleton"][0]`

export default {
	components: {},

	async fetch() {
		this.test = await this.$sanity.fetch(query)
	},

	data() {
		return {
			test: '',
			pageOptions: this.$store.getters.getPageOptions,
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

.header {
	padding: 0 1.5rem;
	text-align: center;
}

.title + p + .dates {
	margin-bottom: 0;
	font-weight: 600;
}

.title + p + .dates + .venue {
	font-size: var(--font-small-size);
	line-height: var(--font-small-line-height);
	margin-bottom: 5rem;
}

figure {
	margin: 0 0 3em;
}

figcaption {
	font-size: var(--font-small-size);
	line-height: var(--font-small-line-height);
	padding: 0.25rem 1.5rem;
}

.mainImage {
	width: 100%;
	vertical-align: top;
}

.sessionListTitle {
	text-align: center;
	font-weight: 600;
	font-size: var(--font-title2-size);
	line-height: var(--font-title2-line-height);
	margin: 0 0 3rem;

	@media (--media-min-medium) {
		font-size: var(--font-title1-size);
		line-height: var(--font-title1-line-height);
	}
}

.sessionListContainer {
	max-width: var(--width-small);
	margin: 0 auto;
	padding: 0 1.5rem;
	box-sizing: border-box;
}
</style>
