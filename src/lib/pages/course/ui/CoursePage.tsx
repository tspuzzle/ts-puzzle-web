import routes from '@/lib/app/routes'
import { Chip } from '@/lib/shared/ui/chips/Chip'
import { Lesson } from '@/payload-types'
import Link from 'next/link'
import { getCourse } from '../actions/getCourse'
import { BrandBackgroundCard } from '@/lib/shared/ui'

export const CoursePage = async ({ courseSlug }: { courseSlug: string }) => {
  const course = await getCourse({ courseSlug })
  const lessons = (course?.lessons?.docs || []) as Lesson[]
  return (
    <div className="px-4 bg-white min-h-[100vh-80px] h-full">
      <BrandBackgroundCard>
        <div className="flex flex-col gap-4 max-w-[1000px]">
          <h1 className="text-h2 text-primary-contrast font-bold">{course?.title}</h1>
          <span className="text-subtitle text-primary-light">{course?.description}</span>
        </div>
      </BrandBackgroundCard>
      <div className="flex flex-col space-y-4 mt-4">
        {lessons.map((lesson, index) => {
          const chapterCounts = (lesson?.chapters?.docs || []).length
          return (
            <Link
              href={routes.courses.lessons.bySlug({
                courseSlug: course.slug,
                lessonSlug: lesson.slug,
              })}
              key={lesson.slug}
            >
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
