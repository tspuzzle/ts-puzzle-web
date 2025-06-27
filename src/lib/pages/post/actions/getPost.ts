'use server'
import { getPayload } from '@/payload.config'
import { NotFoundError } from '@/lib/app/errors'

export const getPost = async ({ slug }: { slug: string }) => {
  const payload = await getPayload()

  const postResponse = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
  })

  if (postResponse.docs.length === 0) {
    throw new NotFoundError('Challenge not found')
  }

  return postResponse.docs[0]
}
