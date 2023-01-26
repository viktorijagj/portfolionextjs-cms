import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cv',
  title: 'Curriculum vitae',
  type: 'document',
  fields: [
     defineField({
      name: 'title',
      title: 'Qualification',
      type: 'text',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'education',
      title: 'Educational institution',
      type: 'text',
    }),
  ],
})