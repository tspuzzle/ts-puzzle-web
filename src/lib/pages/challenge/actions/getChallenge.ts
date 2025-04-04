'use server'
import { getPayload } from '@/payload.config'
import { NotFoundError } from '@/lib/app/errors'

export const getChallenge = async ({ slug }: { slug: string }) => {
  const payload = await getPayload()

  const challengeResponse = await payload.find({
    collection: 'challenges',
    where: { slug: { equals: slug } },
  })

  if (challengeResponse.docs.length === 0) {
    throw new NotFoundError('Challenge not found')
  }

  return challengeResponse.docs[0]
}
