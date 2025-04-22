import { Config, TextFieldSingleValidation } from 'payload'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  LinkFeature,
  LinkFields,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Code } from '@/(admin)/blocks/Code/config'

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      //...rootFeatures,
      FixedToolbarFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      BlocksFeature({
        blocks: [Code],
        inlineBlocks: [],
      }),
      LinkFeature(),
      InlineToolbarFeature(),
      HorizontalRuleFeature(),
    ]
  },
})
