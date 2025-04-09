import Link from 'next/link'
import { getCourses } from '../actions/getCourses'
import routes from '@/lib/app/routes'

export const CoursesListPage = async () => {
  const courses = await getCourses()
  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <Link key={course.id} href={routes.courses.bySlug(course.slug)}>
          <div>{course.title}</div>
        </Link>
      ))}
    </div>
  )
}
