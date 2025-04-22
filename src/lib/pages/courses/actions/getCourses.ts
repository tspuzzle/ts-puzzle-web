'use server'
import { getPayload } from '@/payload.config'

export const getCourses = async () => {
  const payload = await getPayload()

  const coursesResponse = await payload.find({
    collection: 'courses',
    select: { title: true, slug: true },
    sort: 'order',
    pagination: false,
  })

  return coursesResponse.docs
}
