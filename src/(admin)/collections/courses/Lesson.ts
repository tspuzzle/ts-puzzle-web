import { slugField } from '@/(admin)/fields/slug'
import type { CollectionConfig } from 'payload'
import { adminGroup } from './config'

export const Lessons: CollectionConfig = {
  slug: 'lessons',
  admin: {
    useAsTitle: 'title',
    group: adminGroup,
  },
  fields: [
    {
      name: 'course',
      type: 'relationship',
      relationTo: 'courses',
      hasMany: false,
      required: true,
    },

    ...slugField('title', { slugOverrides: { required: true } }),
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'order',
      type: 'number',
    },

    {
      name: 'chapters',
      type: 'join',
      collection: 'chapters',
      on: 'lesson',
      defaultSort: 'order',
    },
  ],
}
