<template>
	<article>
		<section v-if="error.statusCode === 404">
			<h1>404 – page not found</h1>
			<p>
				Go back to
				<nuxt-link to="/" class="underline text-primary"
					>Home Page</nuxt-link
				>
			</p>
		</section>

		<section v-else>
			<h1>An error occurred</h1>
			<p>Error Code: {{ error.statusCode }}</p>
			<p>Error Message: {{ error.message }}</p>
			<nuxt-link to="/">Back home</nuxt-link>
		</section>
	</article>
</template>

<script>
export default {
	props: {
		error: {
			type: Object,
			default: () => {},
		},
	},
	head() {
		const { message, statusCode: code } = this.error
		return {
			title: `${code} – ${message}`,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: message,
				},
			],
		}
	},
}
</script>

<style scoped>
article {
	padding: 1rem;
}

h1 {
	font-size: var(--font-size-01);
	line-height: var(--font-line-height-01);
	margin-bottom: 2rem;

	@media (--media-min-desktop) {
		font-size: var(--font-size-02);
		line-height: var(--font-line-height-02);
	}
}
</style>
