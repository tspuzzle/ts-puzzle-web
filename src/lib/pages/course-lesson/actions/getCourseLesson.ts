'use server'

import { getPayload } from '@/payload.config'

export const getCourseLesson = async ({
  courseSlug,
  lessonSlug,
}: {
  courseSlug: string
  lessonSlug: string
}) => {
  const payload = await getPayload()

  const challengeResponse = await payload.find({
    collection: 'lessons',

    where: {
      slug: { equals: lessonSlug },
      courseSlug: { equals: courseSlug },
    },
    depth: 1,
  })

  return challengeResponse.docs[0]
}
