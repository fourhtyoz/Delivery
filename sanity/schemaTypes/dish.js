import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of the dish',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price of the dish in USD',
      type: 'number',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
    }),
  ],
})
