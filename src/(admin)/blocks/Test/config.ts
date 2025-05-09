import type { Block } from 'payload'
import { limitedLexical } from '../limitedLexical'

export const Test: Block = {
  slug: 'test',
  interfaceName: 'TestBlock',
  fields: [
    {
      name: 'question',
      type: 'richText',
      label: 'Question',
      editor: limitedLexical,
      required: true,
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
      required: true,
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
          editor: limitedLexical,
          required: true,
        },
        {
          name: 'isCorrect',
          type: 'checkbox',
          label: 'Is Correct?',
          defaultValue: false,
          required: true,
        },
      ],
    },
  ],
}
