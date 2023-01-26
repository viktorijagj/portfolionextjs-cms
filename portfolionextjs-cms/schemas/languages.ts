import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'languages',
  title: 'Languages/Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Language name',
      type: 'string',
    }),
    defineField({
      name: 'skilimg',
      title: 'Skill image',
      type: 'image',
      options: {
        hotspot:true,
      }
    }),
     defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})