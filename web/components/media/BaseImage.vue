<template>
	<img
		:src="lqip"
		:data-src="imageSrc"
		:data-srcset="imageSrcSet"
		:alt="alt"
		:width="imageWidth"
		:height="imageHeight"
		data-sizes="auto"
		class="lazyload"
	/>
</template>

<script>
export default {
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
	},
	computed: {
		lqip() {
			if (this.asset.metadata) {
				if (this.asset.metadata.lqip) {
					return this.asset.metadata.lqip
				}
			}
			return undefined
		},
		imageSrc() {
			// check if image should get cropped
			if (this.width && this.height) {
				const ratio = (this.width / this.height).toFixed(2)
				return this.$builder
					.image(this.asset)
					.size(this.width, Math.floor(this.width / ratio))
					.auto(this.auto)
					.fit(this.fit)
			} else {
				return this.$builder
					.image(this.asset)
					.width(2000)
					.auto(this.auto)
					.fit(this.fit)
			}
		},
		imageSrcSet() {
			let srcSet = ''
			const widths = [250, 375, 500, 750, 1000, 1400, 2000, 3000]

			// check if image should get cropped
			if (this.width && this.height) {
				const ratio = (this.width / this.height).toFixed(2)

				widths.forEach((width, index) => {
					srcSet +=
						this.$builder
							.image(this.asset)
							.size(width, Math.floor(width / ratio))
							.auto(this.auto)
							.fit(this.fit) + ` ${width}w`
					if (index + 1 !== widths.length) {
						srcSet += ','
					}
					srcSet += ' '
				})
			} else {
				widths.forEach((width, index) => {
					srcSet +=
						this.$builder
							.image(this.asset)
							.width(width)
							.auto(this.auto)
							.fit(this.fit) + ` ${width}w`
					if (index + 1 !== widths.length) {
						srcSet += ','
					}
					srcSet += ' '
				})
			}
			return srcSet
		},
		imageWidth() {
			if (this.width) {
				return this.width
			}
			if (this.asset.metadata) {
				return this.asset.metadata.dimensions.width
			}
			return undefined
		},
		imageHeight() {
			if (this.height) {
				return this.height
			}
			if (this.asset.metadata) {
				return this.asset.metadata.dimensions.height
			}
			return undefined
		},
	},
}
</script>
<style scoped>
img {
	width: 100%;
	height: auto;
}

.lazyload,
.lazyloading {
	opacity: 0;
}

.lazyloaded {
	opacity: 1;
	transition: opacity 0.75s;
}
</style>
