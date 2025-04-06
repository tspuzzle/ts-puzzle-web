import { ChallengeCard } from '@/lib/shared/ui'
import { getChallengesList } from '../actions/getChallengesList'
import Link from 'next/link'
import routes from '@/lib/app/routes'
import { ChallengeLabel } from '@/payload-types'

export const ChallengesListView = async () => {
  const challengesResponse = await getChallengesList()

  const challenges = challengesResponse.docs

  console.log('Challenges:', challenges)
  return (
    <>
      <div className="py-3 mb-4">
        <p className="text-body1 text-white">{challenges.length} challenges</p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {challenges.map((challenge) => {
          const labels = challenge.labels as null | ChallengeLabel[]
          return (
            <Link
              href={routes.challenges.bySlug(challenge.slug)}
              key={challenge.id}
              className="w-full"
            >
              <ChallengeCard
                key={challenge.id}
                difficulty={challenge.difficulty}
                title={challenge.title}
                labels={labels || []}
              />
            </Link>
          )
        })}
      </div>
    </>
  )
}
