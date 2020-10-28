// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document types
import textPage from './documents/textPage'
import event from './documents/event'
import about from './documents/about'
import pageOptions from './documents/pageOptions'
import mainMenu from './documents/mainMenu'

// Object types
import defaultImage from './objects/defaultImage'
import sharingImage from './objects/sharingImage'
import bodyPortableText from './objects/bodyPortableText'
import svgUploadPreview from 'sanity-plugin-inline-svg'
import externalLink from './objects/externalLink'
import iconLink from './objects/iconLink'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'event',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    event,
    about,
    textPage,
    mainMenu,
    pageOptions,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    defaultImage,
    sharingImage,
    bodyPortableText,
    externalLink,
    iconLink,
    svgUploadPreview,
  ]),
})
