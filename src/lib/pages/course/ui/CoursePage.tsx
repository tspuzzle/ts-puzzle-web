import { getCourse } from '../actions/getCourse'
import { Chapter, Lesson } from '@/payload-types'
import routes from '@/lib/app/routes'
import Link from 'next/link'
import { Chip } from '@/lib/shared/ui/chips/Chip'

export const CoursePage = async ({ courseSlug }: { courseSlug: string }) => {
  const course = await getCourse({ courseSlug })
  console.log(course)
  return (
    <div className="px-4 bg-white min-h-[100vh-80px] h-full">
      <div className="dark:bg-[url(/course-cover-dark.jpg)] bg-[url(/course-cover.jpg)] py-12 px-8 bg-cover bg-right rounded-2xl">
        <div className="flex flex-col gap-4 max-w-[1000px]">
          <h1 className="text-h2 text-primary-contrast font-bold">{course?.title}</h1>
          <span className="text-subtitle text-primary-light">{course?.description}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-4">
        {(course?.lessons?.docs || []).map((_lesson, index) => {
          const lesson = _lesson as Lesson
          const chapterCounts = (lesson?.chapters?.docs || []).length
          return (
            <Link href={routes.courses(course.slug).lessons(lesson.slug)} key={lesson.slug}>
              <article
                key={lesson.slug}
                className="p-6 border border-grey-100 rounded-lg flex flex-col gap-4 hover:border-primary"
              >
                <span className="text-h6 text-primary font-bold uppercase ">
                  Lesson {index + 1}
                </span>
                <div className="space-y-1">
                  <h1 className="text-h4 font-bold text-primary-text">{lesson.title}</h1>
                  <p className="text-body1 text-secondary-text">{lesson.description}</p>
                </div>
                {chapterCounts > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <Chip title={`${chapterCounts} chapters`} />
                  </div>
                )}
              </article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
