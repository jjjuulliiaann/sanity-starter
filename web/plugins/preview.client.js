// plugins/preview.client.js
export default function ({ query, enablePreview, store }) {
	if (query.preview) {
		enablePreview()
		store.commit('showBanner')
	}
}
