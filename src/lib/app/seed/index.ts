import { Payload } from 'payload'
import { challenges } from './data/challenges'
import { ChallengeLabel } from '@/payload-types'
import { addDescription } from './helpers/addDescription'

export const seed = async ({ payload }: { payload: Payload }) => {
  payload.logger.info('Seeding database...')
  const uniqueLabels = Array.from(new Set(challenges.map((challenge) => challenge.labels).flat()))

  const _savedLabels = await Promise.all(
    uniqueLabels.map((label) =>
      payload.db.upsert({
        collection: 'challengeLabels',
        where: { title: { equals: label } },
        data: { title: label },
      }),
    ),
  )

  const savedLabels = _savedLabels as ChallengeLabel[]

  await Promise.all(
    challenges.map((challenge) => {
      const challengeLabelIds = challenge.labels.reduce((acc, label) => {
        const savedLabel = savedLabels.find((savedLabel) => savedLabel.title === label)
        if (savedLabel) {
          return [...acc, savedLabel.id]
        }
        return acc
      }, [] as number[])

      return payload.db.upsert({
        collection: 'challenges',
        where: { slug: { equals: challenge.slug } },
        data: {
          title: challenge.title,
          slug: challenge.slug,
          description: addDescription(),
          difficulty: challenge.difficulty,
          labels: challengeLabelIds,
          order: challenge.order,
        },
      })
    }),
  )
}
