<template>
	<footer class="footer">
		<p>
			{{ pageOptions.name }}, ©
			<a href="https:julianschmidt.me" target="_blank">Julian Schmidt</a>
		</p>
	</footer>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'No title set',
		},
	},
	data() {
		if (!this.$store.state) {
			return
		}
		return {
			year: new Date().getFullYear(),
			pageOptions: this.$store.getters.getPageOptions,
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

.footer {
	position: relative;
	padding: 1rem;
	text-align: left;
	font-size: var(--font-size-01);
	line-height: var(--font-line-height-01);

	@media (--media-min-desktop) {
		font-size: var(--font-size-02);
		line-height: var(--font-line-height-02);
	}
}

.footer a {
	color: inherit;
	text-decoration: inherit;
}
</style>
