import imageUrlBuilder from '@sanity/image-url'
import Vue from 'vue'
import BlockContent from 'sanity-blocks-vue-component'

Vue.component('BlockContent', BlockContent)

const query = `{
	"pageOptions": *[_id == "pageOptions-singleton"][0] {
	  ..., image {..., asset->}
  },
  "mainMenu": *[_type == 'mainMenu' && _id == "mainMenu"]{links[]->{...,"id":_id}}[0]
}
`

export default ({ $sanity, store }, inject) => {
	// init image builder
	const builder = imageUrlBuilder($sanity.config)
	inject('builder', builder)

	// load global data
	return $sanity.fetch(query).then(({ pageOptions, mainMenu }) => {
		store.commit('setPageOptions', pageOptions)
		store.commit('setMainMenu', mainMenu)
	})
}
