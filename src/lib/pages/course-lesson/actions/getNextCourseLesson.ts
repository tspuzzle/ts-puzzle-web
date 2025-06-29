import { Chapter } from '@/payload-types'
import { getPayload } from '@/payload.config'

export const getNextCourseLesson = async ({
  courseSlug,
  lessonSlug,
  chapterSlug,
}: {
  courseSlug: string
  lessonSlug: string
  chapterSlug?: string
}) => {
  const payload = await getPayload()

  const lessonResponse = await payload.find({
    collection: 'lessons',

    where: {
      courseSlug: { equals: courseSlug },
    },
    select: { chapters: true, slug: true, title: true },
    sort: '-order',
  })

  const lessons = lessonResponse.docs || []

  const currentLessonIndex = lessons.findIndex((lesson) => lesson.slug === lessonSlug)

  if (currentLessonIndex === -1) {
    // invalud data probably
    return null
  }

  const currentLesson = lessons[currentLessonIndex]
  const currentLessonChapters = (currentLesson.chapters?.docs || []) as Chapter[]

  const currentChapterIndex = !chapterSlug
    ? 0
    : currentLessonChapters.findIndex((chapter) => chapter.slug === chapterSlug)

  if (currentChapterIndex === -1) {
    // invalid data probably
    return null
  }

  if (currentChapterIndex < currentLessonChapters.length - 1) {
    const nextChapter = currentLessonChapters[currentChapterIndex + 1]
    return {
      courseSlug,
      lessonSlug: currentLesson.slug,
      lessonTitle: currentLesson.title,
      chapterSlug: nextChapter.slug,
      chapterTitle: nextChapter.title,
    }
  }

  const nextLessonIndex = currentLessonIndex + 1
  const nextLesson = lessons[nextLessonIndex]

  if (!nextLesson) {
    return null
  }

  const nextChapter = nextLesson.chapters?.docs?.[0] as Chapter | undefined

  if (!nextChapter) {
    return null
  }

  return {
    courseSlug,
    lessonSlug: nextLesson.slug,
    lessonTitle: nextLesson.title,
    chapterSlug: nextChapter.slug,
    chapterTitle: nextChapter.title,
  }
}
