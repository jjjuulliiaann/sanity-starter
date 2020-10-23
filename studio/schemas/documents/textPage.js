import { FiFile } from 'react-icons/fi/'

export default {
	name: 'textPage',
	type: 'document',
	title: 'Seite',
	icon: FiFile,
	__experimental_actions: ['update', 'create', 'delete', 'publish'],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Titel',
			validation: Rule => Rule.required()
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 200, // will be ignored if slugify is set
				slugify: input =>
					input
						.toLowerCase()
						.replace(/\s+/g, '-')
						.slice(0, 200)
			},
			validation: Rule => Rule.required()
		},
		{
			name: 'content',
			type: 'bodyPortableText',
			title: 'Inhalt'
		}
	]
}
