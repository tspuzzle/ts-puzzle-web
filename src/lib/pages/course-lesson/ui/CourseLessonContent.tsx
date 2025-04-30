import RichText from '@/lib/shared/components/RichText'
import { Chapter, Lesson } from '@/payload-types'
import { Content } from '@radix-ui/react-tabs'
import { ContentTest } from './ContentTest'
import { ContentText } from './ContentText'

export const CourseLessonContent = ({
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
  if (currentChapter.type === 'test') {
    return (
      <ContentTest
        lesson={lesson}
        currentChapter={currentChapter}
        chapters={chapters}
        currentChapterIndex={currentChapterIndex}
      />
    )
  }
  return (
    <ContentText
      lesson={lesson}
      currentChapter={currentChapter}
      chapters={chapters}
      currentChapterIndex={currentChapterIndex}
    />
  )
}
