import { Code } from '@/(admin)/blocks/Code/config'
import { Quote } from '@/(admin)/blocks/Quote/config'
import { CodeEditor } from '@/(admin)/blocks/CodeEditor/config'
import { Test } from '@/(admin)/blocks/Test/config'
import { ChallengeEditor } from '@/(admin)/blocks/ChallengeEditor/config'

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
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnorderedListFeature,
  OrderedListFeature,
  IndentFeature,
  AlignFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Config } from 'payload'

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      //...rootFeatures,
      FixedToolbarFeature(),
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      StrikethroughFeature(),
      IndentFeature(),
      SubscriptFeature(),
      SuperscriptFeature(),
      AlignFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      BlocksFeature({
        blocks: [Code, CodeEditor, ChallengeEditor, Quote, Test],
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
            fields: [{ name: 'title', type: 'text', label: 'Title' }],
          },
        },
        maxDepth: 1,
      }),
    ]
  },
})
