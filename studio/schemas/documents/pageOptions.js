export default {
	name: 'pageOptions',
	type: 'document',
	title: 'Page Options',
	__experimental_actions: ['update', /* 'create',  'delete', */ 'publish'],
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Seitentitel',
			validation: Rule => Rule.required()
		},
		{
			name: 'metaDescription',
			type: 'text',
			title: 'Meta Beschreibung',
			description: 'Beschreibung für Sucherergebnisse und Social Media Links',
			validation: Rule => Rule.required()
		},
		{
			name: 'image',
			type: 'sharingImage',
			title: 'Sharing Bild'
		},
		{
			name: 'metaKeywords',
			type: 'array',
			title: 'Meta Schlüsselwörter',
			description: 'Schlüsselwörter für Suchergebnisse',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags'
			}
		},
		{
			name: 'metaLanguage',
			type: 'array',
			title: 'Meta Sprache',
			description: 'Sprache der Seite',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags'
			},
			validation: Rule => Rule.required()
		}
	],
	initialValue: {
		metaLanguage: ['deutsch', 'de']
	}
}
