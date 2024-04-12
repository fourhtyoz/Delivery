import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured category name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'restaurant' }] }]
    }),
  ],
})
