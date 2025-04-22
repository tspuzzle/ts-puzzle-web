import { NotFoundError } from '@/lib/app/errors'
import { notFound } from 'next/navigation'
import { getChallenge } from '../actions/getChallenge'
import { ChallengeView } from './ChallengeView'

export const ChallengePage = async ({ slug }: { slug: string }) => {
  const challenge = await getChallenge({ slug })

  try {
    return <ChallengeView challenge={challenge} />
  } catch (error) {
    if (error instanceof NotFoundError) {
      return notFound()
    }
    throw error
  }
}
