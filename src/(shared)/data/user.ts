import { User } from '@/payload-types'
import { getPayload } from '@/payload.config'
import { RequiredDataFromCollectionSlug } from 'payload'

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const payload = await getPayload()

  return payload.db.findOne({
    collection: 'users',
    where: {
      email: {
        equals: email,
      },
    },
  })
}

export const createUser = async (
  user: RequiredDataFromCollectionSlug<'users'>,
): Promise<User | null> => {
  const payload = await getPayload()
  return payload.create({
    collection: 'users',
    data: user,
  })
}
