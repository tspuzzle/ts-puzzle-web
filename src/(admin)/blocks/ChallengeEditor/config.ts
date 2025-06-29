import type { Block } from 'payload'
import { limitedLexical } from '../limitedLexical'

export const ChallengeEditor: Block = {
  slug: 'challengeEditor',
  interfaceName: 'ChallengeEditorBlock',
  fields: [
    {
      name: 'description',
      type: 'richText',
      editor: limitedLexical,
      required: true,
    },
    {
      name: 'solution',
      type: 'richText',
      editor: limitedLexical,
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
          editor: limitedLexical,
        },
        {
          name: 'expected',
          type: 'richText',
          editor: limitedLexical,
        },
        {
          name: 'test',
          type: 'text',
        },
      ],
    },
  ],
}
