'use server'
import { getPayload } from '@/payload.config'

export const getChallengesList = async () => {
  const payload = await getPayload()

  return await payload.find({
    collection: 'challenges',
    select: { title: true, slug: true, labels: true, difficulty: true },
    pagination: false,
  })
}
