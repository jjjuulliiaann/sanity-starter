import { FiLink2, FiExternalLink } from 'react-icons/fi/'
import React from 'react'

export default {
	name: 'iconLink',
	title: 'Icon Link',
	type: 'object',
	icon: FiLink2,
	fields: [
		{
			name: 'link',
			type: 'externalLink',
			title: 'URL'
		},
		{
			name: 'icon',
			type: 'svgUploadPreview',
			title: 'Icon'
		}
	],
	preview: {
		select: {
			title: 'link.title',
			url: 'link.url',
			icon: 'icon'
		},
		prepare(selection) {
			const { title, url, icon } = selection
			const styledIcon = icon.replace('<svg', "<svg style='width: 25px; height: 25px'")
			let styles = {
				position: 'relative',
				width: '35px',
				height: '35px',
				padding: '5px',
				overflow: 'hidden',
				boxSizing: 'border-box'
			}
			return {
				title: title,
				subtitle: url,
				media: <div style={styles} dangerouslySetInnerHTML={{ __html: styledIcon }} />
			}
		}
	}
}
