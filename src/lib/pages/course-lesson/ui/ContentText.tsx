import RichText from '@/lib/shared/components/RichText'
import { Chapter, Lesson } from '@/payload-types'

export const ContentText = ({
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
    <>
      <div className="border-b border-grey-100 pb-4">
        <div>
          <span className="text-h6 text-primary">PART {currentChapterIndex + 1}</span>
          <span className="text-h6 text-grey-600 pl-1">OF {chapters.length}</span>
        </div>
        <h2 className="text-h2 text-primary-text">{lesson.title}</h2>
      </div>

      <h1 className="text-h4 pt-8 text-primary-text">{currentChapter.title}</h1>
      {currentChapter.content && (
        <div className="pt-8">
          <RichText data={currentChapter.content} />
        </div>
      )}
    </>
  )
}
