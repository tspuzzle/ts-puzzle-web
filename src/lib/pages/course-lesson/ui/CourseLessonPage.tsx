import routes from '@/lib/app/routes'
import RichText from '@/lib/shared/components/RichText'
import { BrandBackgroundCard } from '@/lib/shared/ui'
import { Course } from '@/payload-types'
import Link from 'next/link'
import { SlMenu } from 'react-icons/sl'
import { getCourseLesson } from '../actions/getCourseLesson'
import { ChapterNavigationItem } from '../components/ChapterNavigationItem'

export const CourseLessonPage = async ({
  courseSlug,
  lessonSlug,
  chapterSlug,
}: {
  courseSlug: string
  lessonSlug: string
  chapterSlug?: string
}) => {
  const { lesson, currentChapterIndex, currentChapter, chapters } = await getCourseLesson({
    courseSlug,
    lessonSlug,
    chapterSlug,
  })
  const course = lesson.course as Course

  if (!currentChapter) {
    return null
  }

  return (
    <div className="px-4 bg-white min-h-[100vh-80px] h-full">
      <BrandBackgroundCard className="p-6 flex justify-between items-center">
        <h1 className="text-h4 text-primary-contrast">{course.title}</h1>
        <Link href={routes.courses.bySlug({ courseSlug: course.slug })}>
          <SlMenu className="fill-primary-contrast cursor-pointer" />
        </Link>
      </BrandBackgroundCard>
      <div className="pt-4 flex gap-12">
        <div className="grow-1 flex justify-center">
          <div className="w-full max-w-[720px]">
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
          </div>
        </div>
        <div className="w-[380px] flex flex-col gap-4">
          {chapters.map((chapter, i) => (
            <Link
              key={chapter.id}
              href={routes.courses.chapters.bySlug({
                courseSlug,
                lessonSlug,
                chapterSlug: chapter.slug,
              })}
            >
              <ChapterNavigationItem
                chapter={chapter}
                index={i}
                checkedIndex={currentChapterIndex}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
