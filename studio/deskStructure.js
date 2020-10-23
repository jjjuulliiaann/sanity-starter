import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import { FiCompass, FiMoreHorizontal } from 'react-icons/fi/'

const url = 'https://1e9-conference-2020.netlify.app/'
const hiddenDocTypes = listItem =>
	!['textPage', 'mainMenu', 'event', 'about', 'pageOptions'].includes(listItem.getId())

// preview iframe
const WebPreview = ({ document }) => {
	const { displayed } = document
	const slug = displayed.slug?.current

	if (!slug) {
		return <h2>Please set a slug to see a preview</h2>
	}

	const targetURL = url + displayed.slug.current + `/?preview=true`
	return <iframe src={targetURL} frameBorder={0} width="100%" height="100%" />
}

export const getDefaultDocumentNode = ({ schemaType }) => {
	// Conditionally return a different configuration based on the schema type
	if (schemaType === 'textPage') {
		return S.document().views([
			S.view.form(),
			S.view.component(WebPreview).title('Web Preview')
		])
	}
}

// navigation structure
export default () =>
	S.list()
		.title('Inhalte')
		.items([
			S.listItem()
				.title('Programm')
				.schemaType('event')
				.child(
					S.documentTypeList('event')
						.title('Shows')
						.defaultOrdering([
							{ field: 'day', direction: 'asc' },
							{ field: 'time', direction: 'asc' }
						])
				),
			S.listItem()
				.title('Menü')
				.icon(FiCompass)
				.child(
					S.editor()
						.id('mainMenu')
						.title('Menü')
						.schemaType('mainMenu')
						.documentId('mainMenu')
				),
			S.listItem()
				.title('Unterseiten')
				.schemaType('textPage')
				.child(S.documentTypeList('textPage').title('Unterseiten')),
			S.listItem()
				.title('Optionen')
				.icon(FiMoreHorizontal)
				.child(
					S.editor()
						.id('pageOptions')
						.title('Optionen')
						.schemaType('pageOptions')
						.documentId('pageOptions-singleton')
				),
			// This returns an array of all the document types
			// defined in schema.js. We filter out those that we have
			// defined the structure above
			...S.documentTypeListItems().filter(hiddenDocTypes)
		])
