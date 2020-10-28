export default {
  name: 'defaultImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
    metadata: ['lqip'],
  },
  fields: [
    {
      title: 'Image Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternate Text',
      validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
      description: 'Important for SEO and Accessibility.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}
