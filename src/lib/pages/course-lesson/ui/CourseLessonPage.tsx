import routes from '@/lib/app/routes'
import RichText from '@/lib/shared/components/RichText'
import { BrandBackgroundCard } from '@/lib/shared/ui'
import { Course } from '@/payload-types'
import Link from 'next/link'
import { SlMenu } from 'react-icons/sl'
import { getCourseLesson } from '../actions/getCourseLesson'
import { ChapterNavigationItem } from '../components/ChapterNavigationItem'
import { CourseLessonContent } from './CourseLessonContent'

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
            <CourseLessonContent
              lesson={lesson}
              currentChapter={currentChapter}
              currentChapterIndex={currentChapterIndex}
              chapters={chapters}
            />
          </div>
        </div>
        <div className="w-[380px]">
          <div className="sticky top-6 flex flex-col gap-4">
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
    </div>
  )
}
