'use client'
import { useThemeCodePallete } from '@/lib/app/styles/useThemeCodePallete'
import { Highlight, PrismTheme, themes } from 'prism-react-renderer'
import React from 'react'

type Props = {
  code: string
  language?: string
}

export const Code: React.FC<Props> = ({ code, language = '' }) => {
  const colorPallete = useThemeCodePallete()

  if (!code) return null

  const theme: PrismTheme = {
    plain: {
      color: colorPallete?.lightBlue,
      backgroundColor: '#1E1E1E',
    },
    styles: [
      {
        types: ['prolog'],
        style: {
          color: 'rgb(0, 0, 128)',
        },
      },
      {
        types: ['comment'],
        style: {
          color: colorPallete?.grey,
        },
      },
      {
        types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
        style: {
          color: colorPallete?.lightBlue,
        },
      },
      {
        types: ['number', 'inserted'],
        style: {
          color: colorPallete?.purple,
        },
      },
      {
        types: ['constant'],
        style: {
          color: 'rgb(100, 102, 149)',
        },
      },
      {
        types: ['attr-name', 'variable'],
        style: {
          color: colorPallete?.green,
        },
      },
      {
        types: ['plain'],
        style: {
          color: colorPallete?.green,
        },
      },
      {
        types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
        style: {
          color: 'rgb(206, 145, 120)',
        },
      },
      {
        types: ['selector'],
        style: {
          color: 'rgb(215, 186, 125)',
        },
      },
      {
        types: ['tag'],
        style: {
          color: 'rgb(78, 201, 176)',
        },
      },
      {
        types: ['tag'],
        languages: ['markup'],
        style: {
          color: colorPallete?.lightBlue,
        },
      },
      {
        types: ['punctuation'],
        style: {
          color: colorPallete.grey,
        },
      },
      {
        types: ['operator'],
        style: {
          color: colorPallete.orange,
        },
      },
      {
        types: ['punctuation'],
        languages: ['markup'],
        style: {
          color: '#808080',
        },
      },
      {
        types: ['function'],
        style: {
          color: colorPallete?.red,
        },
      },
      {
        types: ['class-name'],
        style: {
          color: 'rgb(78, 201, 176)',
        },
      },
      {
        types: ['char'],
        style: {
          color: 'rgb(209, 105, 105)',
        },
      },
    ],
  }

  return (
    <Highlight code={code} language={language} theme={theme}>
      {({ getLineProps, getTokenProps, tokens }) => (
        <pre className="bg-grey-50 p-4 text-code rounded overflow-x-auto my-4">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ className: 'table-row', line })}>
              <span className="table-cell select-none text-left text-primary-text">{i + 1}</span>
              <span className="table-cell pl-6">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
          {/*<CopyButton code={code} />*/}
        </pre>
      )}
    </Highlight>
  )
}
