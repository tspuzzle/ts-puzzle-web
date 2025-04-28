import { slugField } from '@/(admin)/fields/slug'
import type { CollectionConfig } from 'payload'
import { adminGroup } from './config'
import { revalidateTag } from 'next/cache'

export const Courses: CollectionConfig = {
  slug: 'courses',
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
    ...slugField('title', { slugOverrides: { required: true } }),
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'lessons',
      type: 'join',
      collection: 'lessons',
      on: 'course',
      defaultSort: 'order',
    },
  ],
}
