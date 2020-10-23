<template>
	<nav>
		<ul v-if="menu" class="navigation">
			<li
				v-for="link in menu.links"
				:key="link.id"
				class="navigation__item"
			>
				<nuxt-link :to="{ path: `/${link.slug.current}/` }">{{
					link.title
				}}</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: {
		menu: {
			type: Object,
			default: () => {},
			pages: {
				type: Array,
				default: () => [],
			},
		},
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

.navigation {
	list-style: none;
}

.navigation__item {
	font-size: var(--font-size-01);
	line-height: var(--font-line-height-01);

	@media (--media-min-desktop) {
		font-size: var(--font-size-02);
		line-height: var(--font-line-height-02);
	}
}
</style>
