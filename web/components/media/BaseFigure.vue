<template>
	<figure>
		<BaseImage
			:v-if="asset"
			:asset="asset"
			:width="width"
			:height="height"
			:alt="alt"
		/>
		<figcaption :v-if="figcaption">{{ figcaption }}</figcaption>
	</figure>
</template>

<script>
import BaseImage from '~/components/media/BaseImage'

export default {
	components: {
		BaseImage,
	},
	props: {
		asset: {
			type: Object,
			required: true,
		},
		alt: {
			type: String,
			default: 'Missing alternative text',
		},
		width: {
			type: Number,
			default: undefined,
		},
		height: {
			type: Number,
			default: undefined,
		},
		auto: {
			default: 'format',
			type: String,
		},
		fit: {
			default: 'max',
			type: String,
		},
		figcaption: {
			type: String,
			default: undefined,
		},
	},
}
</script>

<style scoped>
figure {
	position: relative;
}
</style>
