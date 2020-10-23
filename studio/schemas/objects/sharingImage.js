export default {
  name: 'sharingImage',
  title: 'Bild',
  type: 'image',
  description: 'Bild für Social Media Vorschau etc. Breite von mindestens 1200px wird empfohlen.',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
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
