import React from 'react'
import { SizeIcon } from 'react-icons/md/'

const quoteRender = props => (
	<span style={{ paddingLeft: '2rem', display: 'block', fontStyle: 'italic' }}>
		{props.children}
	</span>
)
const smallRender = props => <span style={{ fontSize: '0.75rem' }}>{props.children}</span>

export default {
	name: 'bodyPortableText',
	type: 'array',
	title: 'Post body',
	of: [
		{
			type: 'block',
			title: 'Block',
			// Styles let you set what your user can mark up blocks with. These
			// corrensponds with HTML tags, but you can set any title or value
			// you want and decide how you want to deal with it where you want to
			// use your content.
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'Überschrift', value: 'h3' },
				{ title: 'Unterüberschrift', value: 'h4' },
				{
					title: 'Quote',
					value: 'blockquote',
					blockEditor: {
						render: quoteRender
					}
				}
			],
			lists: [
				{ title: 'Bullet', value: 'bullet' },
				{ title: 'Number', value: 'number' }
			],
			// Marks let you mark up inline text in the block editor.
			marks: {
				// Decorators usually describe a single property – e.g. a typographic
				// preference or highlighting by editors.
				decorators: [
					{
						title: 'Klein',
						value: 'small',
						blockEditor: {
							icon: SizeIcon,
							render: smallRender
						}
					}
				],
				// Annotations can be any object structure – e.g. a link or a footnote.
				annotations: [
					{
						name: 'link',
						type: 'object',
						title: 'Externer Link',
						fields: [
							{
								title: 'URL',
								name: 'href',
								type: 'url',
								validation: Rule =>
									Rule.uri({ scheme: ['tel', 'mailto', 'http', 'https'] })
							},
							{
								title: 'In neuem Tab öffnen',
								name: 'blank',
								type: 'boolean'
							}
						]
					}
				]
			}
		}
		// additional types
	]
}
