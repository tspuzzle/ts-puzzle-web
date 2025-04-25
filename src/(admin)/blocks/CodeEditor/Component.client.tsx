'use client'
import { useThemeCodePallete } from '@/lib/app/styles/useThemeCodePallete'
import { useThemePallete } from '@/lib/app/styles/useThemePallete'
import { Editor, useMonaco } from '@monaco-editor/react'
import { useEffect, useState } from 'react'

type Props = {
  code: string
  language?: string
}
const LINE_MULTIPLIER = 24

export const CodeEditor: React.FC<Props> = ({ code, language }) => {
  const monaco = useMonaco()
  const codePallete = useThemeCodePallete()
  const themePallete = useThemePallete()

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('customTheme', {
        base: 'vs', // or 'vs-light'
        inherit: true,
        rules: [
          { token: 'keyword', foreground: codePallete.lightBlue },
          { token: 'number', foreground: codePallete.purple },
          { token: 'type.identifier', foreground: codePallete.green },
          { token: 'identifier', foreground: codePallete.red },
          { token: 'comment', foreground: codePallete.grey },
        ],
        colors: {
          'editor.background': themePallete?.grey50 || '#ffffff',
        },
      })
    }
  }, [codePallete, themePallete, monaco])

  useEffect(() => {
    if (monaco) {
      monaco.editor.onDidChangeMarkers(() => {
        console.log('test')
      })
    }
  }, [monaco])

  const content = 'export {}; \n'.concat(code || '')

  const [height, setHeight] = useState((content.split('\n').length - 1) * LINE_MULTIPLIER)

  return (
    <div className="bg-grey-50 p-4 text-code rounded  my-4">
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

          if (editor) {
            editor.onDidChangeModelContent(() => {
              const lineCount = editor.getModel()?.getLineCount() || 0
              setHeight((lineCount - 1) * LINE_MULTIPLIER)
            })
          }

          monaco.editor.setTheme('customTheme')
        }}
      />
    </div>
  )
}
