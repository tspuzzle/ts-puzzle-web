import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const BrandBackgroundCard = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'dark:bg-[url(/course-cover-dark.jpg)] bg-[url(/course-cover.jpg)] py-12 px-8 bg-cover bg-right rounded-2xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
