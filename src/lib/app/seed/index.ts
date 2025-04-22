import { getFolders } from '@/lib/utils/file'
import { Challenge, ChallengeLabel } from '@/payload-types'
import { join } from 'path'
import { Payload } from 'payload'
import { challenges } from './data/challenges'
import { addDescription } from './helpers/addDescription'
import {
  extractDescription,
  extractSolution,
  extractTemplate,
  extractTestCases,
} from './helpers/extractChallengeFields'

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
    challenges.map(async (challenge) => {
      const challengeLabelIds = challenge.labels.reduce((acc, label) => {
        const savedLabel = savedLabels.find((savedLabel) => savedLabel.title === label)
        if (savedLabel) {
          return [...acc, savedLabel.id]
        }
        return acc
      }, [] as number[])

      let description = addDescription()
      let solution = addDescription()
      let template = ''
      let testCases: any[] = []

      const challengeFolder = challengesFolders.find((folder) => folder.endsWith(challenge.slug))
      if (challengeFolder) {
        description = extractDescription(challengeFolder)
        solution = extractSolution(challengeFolder)
        template = extractTemplate(challengeFolder)
        testCases = extractTestCases(challengeFolder)
        console.log('testCases', testCases)
      }

      const savedData: Pick<
        Challenge,
        | 'title'
        | 'slug'
        | 'description'
        | 'solution'
        | 'difficulty'
        | 'labels'
        | 'order'
        | 'template'
        | 'testCases'
      > = {
        title: challenge.title,
        slug: challenge.slug,
        description,
        solution,
        difficulty: challenge.difficulty as Challenge['difficulty'],
        labels: challengeLabelIds,
        order: Number(challenge.order),
        template,
        testCases,
      }

      const existedChallengeResponse = await payload.find({
        collection: 'challenges',
        where: { slug: { equals: challenge.slug } },
      })

      if (existedChallengeResponse.totalDocs > 0) {
        return payload.update({
          collection: 'challenges',
          id: existedChallengeResponse.docs[0].id,
          data: savedData,
        })
      }

      return payload.create({
        collection: 'challenges',
        data: savedData,
      })
    }),
  )
}
