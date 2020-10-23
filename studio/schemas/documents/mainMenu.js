export default {
  name: 'mainMenu',
  type: 'document',
  title: 'Menü',
  __experimental_actions: ['update', 'create', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      layout: 'grid',
      editModal: 'popover',
      of: [{
        type: 'reference',
        to: [
          {type: 'textPage'}
        ]
      }]
    }
  ]
}
