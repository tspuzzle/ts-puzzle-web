import { slugField } from '@/(admin)/fields/slug'
import type { CollectionConfig } from 'payload'
import { adminGroup } from './config'

export const Challenges: CollectionConfig = {
  slug: 'challenges',
  admin: {
    useAsTitle: 'title',
    group: adminGroup,
  },
  fields: [
    ...slugField('title', { slugOverrides: { required: true } }),
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'difficulty',
      type: 'select',
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Easy', value: 'easy' },
        { label: 'Medium', value: 'medium' },
        { label: 'Hard', value: 'hard' },
        { label: 'Extreme', value: 'extreme' },
      ],
      required: true,
    },
    {
      name: 'labels',
      type: 'relationship',
      relationTo: 'challengeLabels',
      hasMany: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'testCases',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'task',
          type: 'richText',
        },
        {
          name: 'expected',
          type: 'richText',
        },
        {
          name: 'test',
          type: 'text',
        },
      ],
    },
    {
      name: 'solution',
      type: 'richText',
    },
    {
      name: 'template',
      type: 'text',
    },

    {
      name: 'order',
      type: 'number',
    },
  ],
}
