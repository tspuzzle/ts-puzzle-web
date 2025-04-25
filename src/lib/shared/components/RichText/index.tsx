import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

import { CodeBlock, CodeBlockProps } from '@/(admin)/blocks/Code/Component'
import { QuoteBlock, QuoteBlockProps } from '@/(admin)/blocks/Quote/Component'
import { CodeEditorBlock, CodeEditorBlockProps } from '@/(admin)/blocks/CodeEditor/Component'

import { cn } from '@/lib/utils'

import './styles.scss'
import { Media } from '@/payload-types'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CodeBlockProps>
  | SerializedBlockNode<CodeEditorBlockProps>
  | SerializedBlockNode<QuoteBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  upload: ({ node }) => {
    console.log('node', node)

    if (node.relationTo === 'media') {
      const uploadDoc = node.value
      if (typeof uploadDoc !== 'object') {
        return null
      }
      const { alt, height, url, width } = uploadDoc as Media
      if (!url) {
        return null
      }

      const aspectRatio = width && height ? width / height : 16 / 9
      return (
        <Image
          alt={alt}
          src={url}
          sizes="100vw"
          width={720}
          height={720 / aspectRatio}
          style={{ width: '100%', height: 'auto' }}
        />
      )
    }

    return null
  },
  blocks: {
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
    quote: ({ node }) => <QuoteBlock {...node.fields} />,
    codeEditor: ({ node }) => <CodeEditorBlock {...node.fields} />,
  },
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        'rich-text',
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose md:prose-md dark:prose-invert': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
