import { useThemeCodePallete } from '@/lib/app/styles/useThemeCodePallete'
import { useThemePallete } from '@/lib/app/styles/useThemePallete'
import { Editor, useMonaco } from '@monaco-editor/react'
import { useEffect, useState } from 'react'

const LINE_MULTIPLIER = 24

export const EditoContainer = ({
  code,
  setCode,
}: {
  code: string
  setCode: (code: string) => void
  className?: string
}) => {
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

  const [height, setHeight] = useState(
    (code.split('\n').length - 1) * LINE_MULTIPLIER || LINE_MULTIPLIER,
  )

  return (
    <div className="bg-grey-50 text-code">
      <Editor
        height={height}
        value={code}
        language={'typescript'}
        options={{
          minimap: { enabled: false },
          formatOnType: true,
          fontSize: 16,
          //fontFamily: jetBrains.style.fontFamily,
          scrollBeyondLastLine: false,

          scrollbar: {
            alwaysConsumeMouseWheel: false,
          },
        }}
        onChange={(val) => {
          setCode(val || '')
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
            editor.onDidChangeModelContent(() => {
              const lineCount = editor.getModel()?.getLineCount() || 0
              setHeight(lineCount * LINE_MULTIPLIER)
            })
          }

          monaco.editor.setTheme('customTheme')
        }}
      />
    </div>
  )
}
