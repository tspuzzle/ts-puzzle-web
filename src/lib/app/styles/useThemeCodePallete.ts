import { useEffect, useState } from 'react'

export const useThemeCodePallete = () => {
  const [colorPallete, setColorPallete] = useState<{
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

  return colorPallete
}
