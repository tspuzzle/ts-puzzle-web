'use server'
import { getPayload } from '@/payload.config'

export const getChallenges = async () => {
  const payload = await getPayload()

  return await payload.find({
    collection: 'challenges',
    select: { title: true, slug: true, label: true, difficulty: true },
    pagination: false,
  })
}
