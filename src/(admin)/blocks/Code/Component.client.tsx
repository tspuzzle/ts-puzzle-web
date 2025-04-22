'use client'
import { Highlight, PrismTheme, themes } from 'prism-react-renderer'
import React, { useEffect } from 'react'
import { CopyButton } from './CopyButton'

type Props = {
  code: string
  language?: string
}

export const Code: React.FC<Props> = ({ code, language = '' }) => {
  const [colorPallete, setColorPallete] = React.useState<{
    green: string
    grey: string
    orange: string
    purple: string
    lightBlue: string
    darkBlue: string
    red: string
    white: string
  }>({
    green: '#14c75b',
    grey: '#a7a9b0',
    orange: '#faae44',
    purple: '#cb47ff',
    lightBlue: '#24abff',
    darkBlue: '#3c40bf',
    red: '#fe5f55',
    white: '#ffffff',
  })

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const styles = getComputedStyle(document.body)

      setColorPallete({
        green: styles.getPropertyValue('--color-code-green'),
        grey: styles.getPropertyValue('--color-code-grey'),
        orange: styles.getPropertyValue('--color-code-orange'),
        purple: styles.getPropertyValue('--color-code-purple'),
        lightBlue: styles.getPropertyValue('--color-code-light-blue'),
        darkBlue: styles.getPropertyValue('--color-code-dark-blue'),
        red: styles.getPropertyValue('--color-code-red'),
        white: styles.getPropertyValue('--color-code-white'),
      })
    })

    observer.observe(document.body, {
      attributes: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

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
          color: 'rgb(106, 153, 85)',
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
          color: 'rgb(156, 220, 254)',
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

  console.log('Code:', themes.vsDark)
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
