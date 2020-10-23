import { FiCalendar } from 'react-icons/fi/'
import { NumberOneIcon } from 'react-icons/md/'
import { NumberTwoIcon } from 'react-icons/md/'
import { NumberThreeIcon } from 'react-icons/md/'

// setup hours
let hour = 8
const hoursList = []
while (hour <= 24) {
	const fullHourItem = { title: `${hour !== 24 ? hour : '0'}:00`, value: parseInt(`${hour}00`) }
	hoursList.push(fullHourItem)
	const halfHourItem = { title: `${hour !== 24 ? hour : '0'}:30`, value: parseInt(`${hour}30`) }
	hoursList.push(halfHourItem)
	hour += 1
}

export default {
	name: 'event',
	type: 'document',
	title: 'Show',
	icon: FiCalendar,
	__experimental_actions: ['update', 'create', 'delete', 'publish'],
	initialValue: {
		day: '1',
		time: 800
	},
	fields: [
		{
			title: 'Tag',
			name: 'day',
			type: 'string',
			options: {
				list: [
					{ title: 'Tag 1', value: '1' },
					{ title: 'Tag 2', value: '2' },
					{ title: 'Tag 3', value: '3' }
				]
			},
			validation: Rule => Rule.required()
		},
		{
			title: 'Uhrzeit',
			name: 'time',
			type: 'number',
			options: {
				list: hoursList
			}
		},
		{
			name: 'title',
			type: 'string',
			title: 'Titel',
			validation: Rule => Rule.required()
		},
		{
			name: 'subtitle',
			type: 'string',
			title: 'Untertitel'
		},
		{
			name: 'description',
			type: 'bodyPortableText',
			title: 'Beschreibung'
		},
		{
			name: 'audio',
			type: 'mux.video',
			title: 'Audiodatei'
		}
	],
	orderings: [
		{
			title: 'Uhrzeit',
			name: 'timeanddate',
			by: [
				{ field: 'day', direction: 'asc' },
				{ field: 'time', direction: 'asc' }
			]
		}
	],
	preview: {
		select: {
			title: 'title',
			time: 'time',
			day: 'day'
		},
		prepare(selection) {
			const { title, time, day } = selection
			return {
				title: title,
				subtitle: `Tag ${day}, ${time
					.toString()
					.substring(0, time.toString().length - 2)}:${time.toString().slice(-2)}`,
				media:
					day === '1'
						? NumberOneIcon
						: day === '2'
						? NumberTwoIcon
						: day === '3'
						? NumberThreeIcon
						: ''
			}
		}
	}
}
