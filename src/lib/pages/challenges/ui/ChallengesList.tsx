import { ChallengeCard } from '@/lib/shared/ui'
import { getChallenges } from '../actions/getChallenges'
import Link from 'next/link'
import routes from '@/lib/app/routes'

export const ChallengesList = async () => {
  const challengesResponse = await getChallenges()

  const challenges = challengesResponse.docs

  console.log('Challenges:', challenges)
  return (
    <>
      <div></div>
      <div className="flex flex-wrap gap-4">
        {challenges.map((challenge) => (
          <Link
            href={routes.challenges.bySlug(challenge.slug)}
            key={challenge.id}
            className="w-[25%]"
          >
            <ChallengeCard
              key={challenge.id}
              difficulty={challenge.difficulty}
              title={challenge.title}
            />
          </Link>
        ))}
      </div>
    </>
  )
}
