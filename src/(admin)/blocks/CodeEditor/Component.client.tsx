'use client'
import { Editor } from '@monaco-editor/react'

type Props = {
  code: string
  language?: string
}
export const CodeEditor: React.FC<Props> = ({ code, language }) => {
  const content = 'export {}; \n'.concat(code || '')
  const height = content.split('\n').length * 24.2
  return (
    <Editor
      height={height}
      value={content}
      language={language || 'typescript'}
      options={{
        minimap: { enabled: false },
        formatOnType: true,
        fontSize: 16,
        //fontFamily: jetBrains.style.fontFamily,
        scrollBeyondLastLine: false,
        lineNumbers: (num: number) => String(num - 1),
        scrollbar: {
          alwaysConsumeMouseWheel: false,
        },
      }}
      onMount={(editor, monaco) => {
        // https://microsoft.github.io/monaco-editor/playground.html?source=v0.52.0#example-customizing-the-appearence-exposed-colors
        monaco.editor.defineTheme('customTheme', {
          base: 'vs', // or 'vs-light'
          inherit: true,
          rules: [],
          colors: {
            'editor.background': '#000000',
          },
        })

        // supress diagnostic warning
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
          diagnosticCodesToIgnore: [6133], // Suppress "variable is declared but never used" warning
        })
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
          diagnosticCodesToIgnore: [6133], // Suppress "variable is declared but never used" warning
        })

        const defaultCompilerOptions =
          monaco.languages.typescript.typescriptDefaults.getCompilerOptions()

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          ...defaultCompilerOptions,
          noImplicitAny: true,
        })
        if (editor) {
          // hide the first line that contain "export {};"
          const _editor = editor as any
          _editor.setHiddenAreas([new monaco.Range(1, 1, 1, 1)])
        }

        monaco.editor.setTheme('customTheme')
      }}
    />
  )
}
