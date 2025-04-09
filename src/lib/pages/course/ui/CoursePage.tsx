import { Link } from 'lucide-react'
import { getCourse } from '../actions/getCourse'
import { Lesson } from '@/payload-types'
import routes from '@/lib/app/routes'

export const CoursePage = async ({ courseSlug }: { courseSlug: string }) => {
  const course = await getCourse({ courseSlug })
  console.log(course)
  return (
    <div className="container">
      <div className="bg-[url(/course-cover.jpg)] py-12 px-8 bg-cover bg-right rounded-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-h2 text-primary-light font-bold">{course?.title}</h1>
          <span className="text-subtitle text-primary-light">{course?.description}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-4 mt-4">
        {(course?.lessons?.docs || []).map((_lesson, index) => {
          const lesson = _lesson as Lesson
          return (
            <Link href={routes.courses(course.slug).lessons(lesson.slug)} key={lesson.slug}>
              <article
                key={lesson.slug}
                className="p-6 border rounded-4 flex flex-col gap-4 hover:border-primary"
              >
                <span className="text-h6 text-primary font-bold uppercase ">
                  Lesson {index + 1}
                </span>
                <div className="space-y-1">
                  <h1 className="text-h4 font-bold">{lesson.title}</h1>
                  <p className="text-body1 text-text-secondary">{lesson.description}</p>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
