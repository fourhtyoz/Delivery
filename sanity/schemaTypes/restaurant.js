import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(300)
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
        name: 'rating',
        title: 'Enter a rating from 1-5',
        type: 'number',
        validation: (Rule) => Rule.required().min(1).max(5).error('Please enter a value between 1 and 5')
      }),
    defineField({
        name: 'type',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category'}]
    }),
    defineField({
        name: 'dishes',
        title: 'Dishes',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'dish' }] }]
    }),
  ],
})
