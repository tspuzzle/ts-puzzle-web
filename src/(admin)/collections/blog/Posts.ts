import { slugField } from '@/(admin)/fields/slug'
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    ...slugField('title', { slugOverrides: { required: true } }),
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },

    {
      name: 'order',
      type: 'number',
    },
  ],
  timestamps: true,
}
