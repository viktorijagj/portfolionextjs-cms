import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Projects title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'The projects url',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'The projects image/video',
      type: 'image',
      options: {
        hotspot:true,
      }
    }),
      defineField({
      name: 'languages',
      title: 'Languages/Skills',
      type: 'array',
      of:[{type:'reference', to: {type:'languages'}}]
    }),
  ],
})