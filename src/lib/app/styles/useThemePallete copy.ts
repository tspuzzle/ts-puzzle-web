import { useEffect, useState } from 'react'

export const useThemeCodePallete = () => {
  const [colorPallete, setColorPallete] = useState<{
    grey50: string
  }>({
    grey50: '#f0f0f0',
  })

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const styles = getComputedStyle(document.body)

      setColorPallete({
        grey50: styles.getPropertyValue('--color-code-green'),
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
