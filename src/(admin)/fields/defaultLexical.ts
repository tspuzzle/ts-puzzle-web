import { Code } from '@/(admin)/blocks/Code/config'
import { Quote } from '@/(admin)/blocks/Quote/config'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  LinkFeature,
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
        blocks: [Code, Quote],
        inlineBlocks: [],
      }),
      LinkFeature(),
      InlineToolbarFeature(),
      HorizontalRuleFeature(),
    ]
  },
})
