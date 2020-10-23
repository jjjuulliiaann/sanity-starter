export const state = () => ({
	pageOptions: {
		name: '',
	},
	mainMenu: {},
	pagesSlugs: [],
	showDrafPreviewBanner: false,
})

export const getters = {
	getPageOptions(state) {
		return state.pageOptions
	},
	getMainMenu(state) {
		return state.mainMenu
	},
}

export const mutations = {
	setPageOptions(state, options) {
		state.pageOptions = options
	},
	setMainMenu(state, menu) {
		state.mainMenu = menu
	},
	setPagesSlugs(state, slugs) {
		state.pagesSlugs = slugs
	},
	showBanner(state) {
		state.showDrafPreviewBanner = true
	},
}

// get all page slugs on server init
export const actions = {
	async nuxtServerInit({ commit }, { $sanity }) {
		const pagesSlugs = await $sanity
			.fetch('*[_type == "textPage"].slug.current')
			.catch((e) => console.error(e))

		commit('setPagesSlugs', pagesSlugs)
	},
}
