export default function resolveProductionUrl(document) {
	const slug = document.slug?.current
	if (!slug) {
		return undefined
	}

	// Only show the preview option for documents for which a preview makes sense.
	if (document._type === 'textPage') {
		return `https://1e9-conference-2020.netlify.app/${document.slug.current}/?preview=true`
	}
	return undefined
}
