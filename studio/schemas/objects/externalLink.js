import { FiLink2, FiExternalLink } from 'react-icons/fi/'

export default {
	name: 'externalLink',
	title: 'External Link',
	type: 'object',
	icon: FiLink2,
	collapsible: true,
	collapsed: true,
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title'
		},
		{
			name: 'url',
			type: 'url',
			title: 'URL',
			validation: Rule =>
				Rule.uri({
					allowRelative: true,
					scheme: ['https', 'http', 'mailto', 'tel']
				})
		},
		{
			name: 'target',
			type: 'boolean',
			title: 'Open in new window'
		}
	],
	preview: {
		select: {
			title: 'title',
			url: 'url',
			target: 'target'
		},
		prepare(selection) {
			const { title, url, target } = selection
			let media
			if (target == true) {
				media = FiExternalLink
			}
			return {
				title: title,
				subtitle: url,
				media: media
			}
		}
	}
}
