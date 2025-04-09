import { slugField } from '@/(admin)/fields/slug'
import type { CollectionConfig } from 'payload'
import { adminGroup } from './config'

export const Chapters: CollectionConfig = {
  slug: 'chapters',
  admin: {
    useAsTitle: 'title',
    group: adminGroup,
  },
  fields: [
    {
      name: 'lesson',
      type: 'relationship',
      relationTo: 'lessons',
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
  ],
}
