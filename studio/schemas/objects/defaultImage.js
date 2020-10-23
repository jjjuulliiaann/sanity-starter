export default {
  name: 'defaultImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      title: 'Bildunterschrift',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternativtext',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      description: 'Wichtig für SEO und Barrierefreiheit.',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
