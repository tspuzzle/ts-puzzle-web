import { slugField } from '@/(admin)/fields/slug'
import type { CollectionConfig } from 'payload'
import { adminGroup } from './config'
import { revalidateTag } from 'next/cache'

export const Lessons: CollectionConfig = {
  slug: 'lessons',
  admin: {
    useAsTitle: 'title',
    group: adminGroup,
  },
  hooks: {
    beforeChange: [
      async () => {
        revalidateTag('course-lesson')
      },
      async ({ data, req: { payload } }) => {
        const course = await payload.findByID({
          collection: 'courses',
          id: data.course,
        })
        return { ...data, courseSlug: course.slug }
      },
    ],
  },
  fields: [
    {
      name: 'course',
      type: 'relationship',
      relationTo: 'courses',
      hasMany: false,
      required: true,
    },
    {
      name: 'courseSlug',
      type: 'text',
      index: true,
      admin: { hidden: true },
    },

    ...slugField('title', { slugOverrides: { required: true } }),
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'description',
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
