import { slugField } from '@/(admin)/fields/slug'
import type { CollectionConfig } from 'payload'
import { adminGroup } from './config'
import { revalidateTag } from 'next/cache'

export const Chapters: CollectionConfig = {
  slug: 'chapters',
  admin: {
    useAsTitle: 'title',
    group: adminGroup,
  },
  hooks: {
    beforeChange: [
      async () => {
        revalidateTag('course-lesson')
      },
    ],
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
      name: 'content',
      type: 'richText',
      label: 'Content',
    },

    {
      name: 'order',
      type: 'number',
    },
  ],
}
