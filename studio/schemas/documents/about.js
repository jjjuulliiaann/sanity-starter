export default {
  name: 'about',
  type: 'document',
  title: 'About',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'headline',
      type: 'text',
      rows: 2,
      title: 'Titel',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      type: 'bodyPortableText',
      title: 'Inhalt'
    }
  ]
}
