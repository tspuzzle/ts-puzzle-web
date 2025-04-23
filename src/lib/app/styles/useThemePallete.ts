import { useEffect, useState } from 'react'


export const useThemePallete = () => {
  const [colorPallete, setColorPallete] = useState<{
    grey50: string
    grey100: string
    grey200: string
    grey300: string
    grey400: string
    grey500: string
    grey600: string
    grey700: string
    grey800: string
    grey900: string
  }>({
    grey50: '#f7f7f7',
    grey100: '#ebedf7',
    grey200: '#d5daef',
    grey300: '#cdd0e1',
    grey400: '#bdc0d0',
    grey500: '#acaeba',
    grey600: '#9699a9',
    grey700: '#818595',
    grey800: '#767a8b',
    grey900: '#60636f',
  })

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const styles = getComputedStyle(document.body)

      setColorPallete({
        grey50: styles.getPropertyValue('--color-grey-50'),
        grey100: styles.getPropertyValue('--color-grey-100'),
        grey200: styles.getPropertyValue('--color-grey-200'),
        grey300: styles.getPropertyValue('--color-grey-300'),
        grey400: styles.getPropertyValue('--color-grey-400'),
        grey500: styles.getPropertyValue('--color-grey-500'),
        grey600: styles.getPropertyValue('--color-grey-600'),
        grey700: styles.getPropertyValue('--color-grey-700'),
        grey800: styles.getPropertyValue('--color-grey-800'),
        grey900: styles.getPropertyValue('--color-grey-900'),
      })
    })

    observer.observe(document.body, {
      attributes: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return colorPallete
}
