import { CourseLessonPage } from '@/lib/pages/course-lesson'

export default async function HomePage({
  params,
}: {
  params: Promise<{ courseSlug: string; lessonSlug: string; chapterSlug: string }>
}) {
  const { courseSlug, lessonSlug, chapterSlug } = await params

  return (
    <CourseLessonPage courseSlug={courseSlug} lessonSlug={lessonSlug} chapterSlug={chapterSlug} />
  )
}
