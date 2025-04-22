'use server'
import { Chapter, Lesson } from '@/payload-types'

import { getPayload } from '@/payload.config'

export const getCourseLesson = async ({
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
      slug: { equals: lessonSlug },
      courseSlug: { equals: courseSlug },
    },
    depth: 1,
  })

  const lesson = lessonResponse.docs[0] as Lesson

  const chapters = (lesson.chapters?.docs || []) as Chapter[]

  const _currentChapterIndex = chapters.findIndex((chapter) => chapter.slug === chapterSlug)
  const currentChapterIndex = _currentChapterIndex === -1 ? 0 : _currentChapterIndex

  return {
    lesson,
    chapters,
    currentChapterIndex,
    currentChapter: chapters[currentChapterIndex],
  }
}
