import { TestQuestion } from '@/lib/shared/components/TestQuestion/TestQuestion'
import { Chapter, Lesson } from '@/payload-types'

export const ContentTest = ({
  lesson,
  currentChapter,
  chapters,
  currentChapterIndex,
}: {
  lesson: Lesson
  currentChapter: Chapter
  chapters: Chapter[]
  currentChapterIndex: number
}) => {
  return (
    <div>
      {currentChapter.questions?.[0] && <TestQuestion question={currentChapter.questions[0]} />}
    </div>
  )
}
