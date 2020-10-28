<template>
	<h1 v-if="this.styling === 'h1'"><slot /></h1>
	<h2 v-else-if="this.styling === 'h2'"><slot /></h2>
	<h3 v-else-if="this.styling === 'h3'"><slot /></h3>
	<h4 v-else-if="this.styling === 'h4'"><slot /></h4>
	<h5 v-else-if="this.styling === 'h5'"><slot /></h5>
	<span
		v-else-if="this.styling === 'small' && this.isListItem"
		class="text--small"
	>
		<slot />
	</span>
	<p v-else-if="this.styling === 'small'" class="text--small"><slot /></p>
	<p v-else><slot /></p>
</template>

<script>
export default {
	// Define the block object properties this component receives as props
	props: {
		_sanityProps: Object,
	},

	computed: {
		styling() {
			return this._sanityProps.node.style
		},
		isListItem() {
			return (
				this._sanityProps.node.listItem === 'bullet' ||
				this._sanityProps.node.listItem === 'number'
			)
		},
	},
}
</script>
