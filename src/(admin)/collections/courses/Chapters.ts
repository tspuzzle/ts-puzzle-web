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
      label: 'Type',
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Text',
          value: 'text',
        },
        {
          label: 'Test',
          value: 'test',
        },
      ],
      defaultValue: 'text',
    },

    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      admin: {
        condition: (data) => {
          return data.type === 'text'
        },
      },
    },

    {
      name: 'questions',
      label: 'Questions',
      type: 'array',
      fields: [
        {
          name: 'question',
          type: 'richText',
          label: 'Question',
        },
        {
          name: 'type',
          type: 'select',
          label: 'Type',
          options: [
            {
              label: 'Single',
              value: 'single',
            },
            {
              label: 'Multiple',
              value: 'multiple',
            },
          ],
          defaultValue: 'single',
        },
        {
          name: 'answers',
          type: 'array',
          label: 'Answers',
          fields: [
            {
              name: 'answer',
              type: 'richText',
              label: 'Answer',
            },
            {
              name: 'isCorrect',
              type: 'checkbox',
              label: 'Is Correct?',
            },
          ],
        },
      ],
      admin: {
        condition: (data) => data.type === 'test',
      },
    },

    {
      name: 'order',
      type: 'number',
    },
  ],
}
