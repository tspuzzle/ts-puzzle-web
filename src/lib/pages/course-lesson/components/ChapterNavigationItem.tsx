import { cn } from '@/lib/utils'
import { Chapter } from '@/payload-types'
export const ChapterNavigationItem = ({
  chapter,
  index,
  checkedIndex,
}: {
  chapter: Chapter
  index: number
  checkedIndex: number
}) => {
  const isChecked = index === checkedIndex
  return (
    <div
      className={cn(
        'p-4 border border-grey-100 rounded-lg flex flex-col gap-2',
        isChecked && 'border-none bg-primary-light',
      )}
    >
      <p className="text-h6 text-primary">PART {index + 1}</p>
      <h5 className={cn('text-h5 text-primary-dark', isChecked && 'text-primary')}>
        {chapter.title}
      </h5>
    </div>
  )
}
