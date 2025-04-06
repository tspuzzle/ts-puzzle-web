import { slugField } from '@/(admin)/fields/slug'
import type { CollectionConfig } from 'payload'

export const Challenges: CollectionConfig = {
  slug: 'challenges',
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
      name: 'solution',
      type: 'richText',
    },
    {
      name: 'order',
      type: 'number',
    },
  ],
}
