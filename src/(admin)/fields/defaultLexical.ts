import { Code } from '@/(admin)/blocks/Code/config'
import { Quote } from '@/(admin)/blocks/Quote/config'
import { CodeEditor } from '@/(admin)/blocks/CodeEditor/config'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  InlineCodeFeature,
  LinkFeature,
  ChecklistFeature,
  UploadFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Config } from 'payload'

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      //...rootFeatures,
      FixedToolbarFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      BlocksFeature({
        blocks: [Code, CodeEditor, Quote],
        inlineBlocks: [],
      }),
      LinkFeature(),
      InlineToolbarFeature(),
      InlineCodeFeature(),
      HorizontalRuleFeature(),
      ChecklistFeature(),
      UploadFeature({
        collections: {
          media: {
            fields: [{ name: 'alt`', type: 'text', label: 'Alt Text' }],
          },
        },
        maxDepth: 1,
      }),
    ]
  },
})
