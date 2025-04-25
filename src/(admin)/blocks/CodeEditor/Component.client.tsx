'use client'
import { useThemeCodePallete } from '@/lib/app/styles/useThemeCodePallete'
import { useThemePallete } from '@/lib/app/styles/useThemePallete'
import { Editor, useMonaco } from '@monaco-editor/react'
import { useEffect } from 'react'

type Props = {
  code: string
  language?: string
}
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

  const content = 'export {}; \n'.concat(code || '')
  const height = content.split('\n').length * 24.2
  return (
    <div className="bg-grey-50 p-4 text-code rounded overflow-x-auto my-4">
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

          monaco.editor.setTheme('customTheme')
        }}
      />
    </div>
  )
}
