import type { CollectionConfig } from 'payload'

export const ChallengeLabels: CollectionConfig = {
  slug: 'challengeLabels',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      index: true,
    },
  ],
}
