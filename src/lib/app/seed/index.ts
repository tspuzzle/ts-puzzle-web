import { getFileContent, getFolders } from '@/lib/utils/file'
import { ChallengeLabel } from '@/payload-types'
import { join } from 'path'
import { Payload } from 'payload'
import { challenges } from './data/challenges'
import { addDescription } from './helpers/addDescription'
import { convertStringToLexicalJSON } from './helpers/convertToLexicalJson'

const ROOT_CHALLENGES_FOLDER = join(process.cwd(), '/src/lib/app/seed/data/challenges')
console.log(ROOT_CHALLENGES_FOLDER)

export const seed = async ({ payload }: { payload: Payload }) => {
  payload.logger.info('Seeding database...')
  const uniqueLabels = Array.from(new Set(challenges.map((challenge) => challenge.labels).flat()))

  const challengesFolders = getFolders(ROOT_CHALLENGES_FOLDER)
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

      let description = addDescription()

      const challengeFolder = challengesFolders.find((folder) => folder.endsWith(challenge.slug))
      if (challengeFolder) {
        const rawContent = getFileContent(
          join(ROOT_CHALLENGES_FOLDER, challengeFolder, 'description.md'),
        )

        const cleaned = rawContent.replace(/^---[\s\S]*?---\n/, '')
        description = convertStringToLexicalJSON(cleaned)
      }

      return payload.db.upsert({
        collection: 'challenges',
        where: { slug: { equals: challenge.slug } },
        data: {
          title: challenge.title,
          slug: challenge.slug,
          description,
          difficulty: challenge.difficulty,
          labels: challengeLabelIds,
          order: Number(challenge.order),
        },
      })
    }),
  )
}
