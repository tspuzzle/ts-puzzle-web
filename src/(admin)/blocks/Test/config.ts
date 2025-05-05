import type { Block } from 'payload'
import {
  lexicalEditor,
  BlocksFeature,
  FixedToolbarFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  InlineCodeFeature,
  UnorderedListFeature,
  OrderedListFeature,
} from '@payloadcms/richtext-lexical'
import { Code } from '../Code/config'

const editor = lexicalEditor({
  features: ({ rootFeatures }) => [
    ...rootFeatures,
    FixedToolbarFeature(),
    BoldFeature(),
    ItalicFeature(),
    UnderlineFeature(),
    InlineCodeFeature(),
    UnorderedListFeature(),
    OrderedListFeature(),
    BlocksFeature({ blocks: [Code] }),
  ],
})

export const Test: Block = {
  slug: 'test',
  interfaceName: 'TestBlock',
  fields: [
    {
      name: 'question',
      type: 'richText',
      label: 'Question',
      editor,
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
          editor,
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
