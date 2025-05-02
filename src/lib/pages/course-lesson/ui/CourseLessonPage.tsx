import routes from '@/lib/app/routes'
import { BrandBackgroundCard } from '@/lib/shared/ui'
import { Course } from '@/payload-types'
import Link from 'next/link'
import { SlMenu } from 'react-icons/sl'
import { IoArrowForwardCircleSharp } from 'react-icons/io5'

import { getCourseLesson } from '../actions/getCourseLesson'
import { ChapterNavigationItem } from '../components/ChapterNavigationItem'
import { CourseLessonContent } from './CourseLessonContent'
import { getNextCourseLesson } from '../actions/getNextCourseLesson'

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

  const nextChapter = await getNextCourseLesson({
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
            {nextChapter && (
              <Link href={routes.courses.chapters.bySlug(nextChapter)}>
                <div className="flex gap-6 justify-between p-4 rounded-lg bg-primary-light items-center cursor-pointer mb-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-body2 text-primary-dark">Next</span>
                    <span className="text-h4 text-primary">{nextChapter.lessonTitle}</span>
                    <span className="text-h5 text-primary">
                      Chapter: {nextChapter.chapterTitle}
                    </span>
                  </div>
                  <IoArrowForwardCircleSharp className="w-6 h-6 text-primary" />
                </div>
              </Link>
            )}
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
