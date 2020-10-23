<template>
	<header class="header">
		<h1>
			<n-link to="/">{{ pageOptions.name }}</n-link>
		</h1>
		<Navigation :menu="mainMenu" />
	</header>
</template>

<script>
import Navigation from '~/components/blocks/Navigation'

export default {
	components: {
		Navigation,
	},
	props: {
		title: {
			type: String,
			default: 'No title set',
		},
	},
	data() {
		return {
			pageOptions: this.$store.getters.getPageOptions,
			mainMenu: this.$store.getters.getMainMenu,
		}
	},
	methods: {},
}
</script>

<style scoped>
@import '~/styles/variables.css';

header {
	padding: 1rem;
}

h1 {
	margin: 0;
	text-align: left;
	font-size: var(--font-size-01);
	line-height: var(--font-line-height-01);

	@media (--media-min-desktop) {
		font-size: var(--font-size-02);
		line-height: var(--font-line-height-02);
	}
}

header a {
	color: inherit;
	text-decoration: inherit;
}
</style>
