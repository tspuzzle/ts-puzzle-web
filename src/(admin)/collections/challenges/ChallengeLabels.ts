import type { CollectionConfig } from 'payload'
import { adminGroup } from './config'

export const ChallengeLabels: CollectionConfig = {
  slug: 'challengeLabels',
  admin: {
    useAsTitle: 'title',
    group: adminGroup,
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
