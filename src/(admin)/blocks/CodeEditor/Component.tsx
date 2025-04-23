import React from 'react'
import { CodeEditor } from './Component.client'

export type CodeEditorBlockProps = {
  code: string
  language?: string
  blockType: 'codeEditor'
}

type Props = CodeEditorBlockProps & {
  className?: string
}

export const CodeEditorBlock: React.FC<Props> = ({ code, language }) => {
  return <CodeEditor code={code} language={language} />
}
