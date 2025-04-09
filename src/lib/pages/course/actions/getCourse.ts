'use server'
import { getPayload } from '@/payload.config'

export const getCourse = async ({ courseSlug }: { courseSlug: string }) => {
  const payload = await getPayload()

  const courseResponse = await payload.find({
    collection: 'courses',
    select: { slug: true, title: true, description: true, lessons: true },
    where: { slug: { equals: courseSlug } },
    sort: 'order',
    pagination: false,
  })

  return courseResponse.docs[0]
}
