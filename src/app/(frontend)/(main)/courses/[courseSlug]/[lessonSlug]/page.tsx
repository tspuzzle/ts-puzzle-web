import { CourseLessonPage } from '@/lib/pages/course-lesson'

export default async function HomePage({
  params,
}: {
  params: Promise<{ courseSlug: string; lessonSlug: string }>
}) {
  const { courseSlug, lessonSlug } = await params

  return <CourseLessonPage courseSlug={courseSlug} lessonSlug={lessonSlug} />
}
