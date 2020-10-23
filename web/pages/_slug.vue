<template>
	<article class="main-article textpage">
		<section>
			<h2>{{ content.title }}</h2>
			<BaseFigure
				v-if="content.image"
				:asset="content.image.asset"
				:alt="content.image.alt"
				:figcaption="content.image.caption"
			/>
		</section>
		<section :v-if="content.length > 0" class="text">
			<BlockContent
				:blocks="content.content"
				:serializers="serializers"
			/>
		</section>
	</article>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import gsap from 'gsap'
import BaseFigure from '~/components/media/BaseFigure'

const query = groq`*[_type == 'textPage' && slug.current == $slug]| order(_updatedAt desc)[0]{
		..., 
		image { ..., asset->}, 
		content[]{
			..., 
			_type == "defaultImage" => {
				asset->
			},
			markDefs[]{
				...,
				_type == "internalLink" => {
					"slug": @.reference->slug
				}
			}
			
		}
	}`

export default {
	components: {
		BaseFigure,
	},

	validate({ params, store, query }) {
		// If FALSE redirect to 404 page
		return (
			query.preview === 'true' ||
			store.state.pagesSlugs.includes(params.slug)
		)
	},

	async asyncData({ $sanity, params }) {
		try {
			const content = await $sanity.fetch(query, params)
			return {
				content,
			}
		} catch (error) {
			console.error(error)
		}
	},

	data() {
		return {
			content: {},
			serializers: {
				types: {
					defaultImage: BaseFigure,
				},
				marks: {
					link: ({ mark, children }) => {
						const { blank, href } = mark
						return blank ? (
							<a href={href} target="_blank" rel="noopener">
								{children}
							</a>
						) : (
							<a href={href}>{children}</a>
						)
					},
					internalLink: ({ mark, children }) => {
						const { slug = {} } = mark
						const href = `/${slug.current}`
						return <a href={href}>{children}</a>
					},
				},
			},
		}
	},
	transition: {
		css: false,
		beforeEnter(el) {
			gsap.set(el, { opacity: 0 })
		},
		enter(el, done) {
			gsap.to(el, {
				duration: 0.2,
				autoAlpha: 1,
				onComplete: done,
			})
		},
		leave(el, done) {
			gsap.to(el, {
				duration: 0.2,
				autoAlpha: 0,
				onComplete: done,
			})
		},
	},
	head() {
		return {
			title: this.title,
		}
	},
}
</script>

<style scoped>
@import '~/styles/variables.css';

h1 {
	font-size: var(--font-size-01);
	line-height: var(--font-line-height-01);
	margin-bottom: 2rem;

	@media (--media-min-desktop) {
		font-size: var(--font-size-02);
		line-height: var(--font-line-height-02);
	}
}

.text {
	margin: 5rem 0;
}

.text ul {
	list-style-type: disc;
	padding: 1rem 0 1rem 1rem;
}

.text a {
	text-decoration: underline;
}

.text figure {
	padding: 1rem 0;
}

/deep/ figure {
	max-width: 30rem;
}
</style>
