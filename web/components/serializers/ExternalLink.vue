<template>
	<a v-if="this.blank" :href="this.href" target="_blank" rel="noopener">
		<slot />
	</a>
	<a v-else :href="this.href"><slot /></a>
</template>

<script>
export default {
	// Define the block object properties this component receives as props
	props: {
		href: {
			type: String,
		},
		blank: {
			type: Boolean,
		},
	},
}
</script>
