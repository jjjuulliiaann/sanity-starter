export default {
	widgets: [
		{
			name: 'netlify',
			layout: {
				width: 'medium',
				height: 'small'
			},
			options: {
				title: 'Deploy Website',
				description:
					'Auf „Deploy“ klicken, um eine neue (statische) Version der Webseite zu erzeugen.',
				sites: [
					{
						title: 'The_Conference 2020',
						apiId: '0ed4061b-2380-4ab8-a5e1-aab4ad37964b',
						buildHookId: '5f904e37512842010f1f294d',
						name: '1e9-conference-2020'
					}
				]
			}
		}
	]
}
