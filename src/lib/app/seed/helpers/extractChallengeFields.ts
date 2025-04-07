import { getFileContent, getFiles } from '@/lib/utils/file'
import { join } from 'path'
import { splitBySeparator } from './splitBySeparator'
import { convertStringToLexicalJSON } from './convertToLexicalJson'

const ROOT_CHALLENGES_FOLDER = join(process.cwd(), '/src/lib/app/seed/data/challenges')

export const extractDescription = (targetChallengeFolder: string) => {
  const rawContent = getFileContent(
    join(ROOT_CHALLENGES_FOLDER, targetChallengeFolder, 'description.md'),
  )

  const cleaned = rawContent.replace(/^---[\s\S]*?---\n/, '')
  return convertStringToLexicalJSON(cleaned)
}

export const extractSolution = (targetChallengeFolder: string) => {
  const solutionContent = getFileContent(
    join(ROOT_CHALLENGES_FOLDER, targetChallengeFolder, 'solution.md'),
  )
  const cleanedSolution = solutionContent.replace(/^---[\s\S]*?---\n/, '')
  return convertStringToLexicalJSON(cleanedSolution)
}

export const extractTemplate = (targetChallengeFolder: string) => {
  try {
    return getFileContent(join(ROOT_CHALLENGES_FOLDER, targetChallengeFolder, 'template.md'))
  } catch {
    return ''
  }
}

export const extractTestCases = (targetChallengeFolder: string) => {
  const TEST_CASES_FOLDER = join(ROOT_CHALLENGES_FOLDER, targetChallengeFolder, 'tests')

  try {
    return getFiles(TEST_CASES_FOLDER).map((testCaseFileName) => {
      const testCaseContent = getFileContent(join(TEST_CASES_FOLDER, testCaseFileName))
      const rawTestCase = splitBySeparator<'task' | 'expected' | 'test'>(testCaseContent)
      return {
        task: convertStringToLexicalJSON(rawTestCase.task),
        expected: convertStringToLexicalJSON(rawTestCase.expected),
        test: rawTestCase.test,
      }
    })
  } catch {
    return []
  }
}

export const extractHints = (targetChallengeFolder: string) => {
  const HINTS_FOLDER = join(ROOT_CHALLENGES_FOLDER, targetChallengeFolder, 'hints')

  try {
    return getFiles(HINTS_FOLDER).map((hintFileName) =>
      getFileContent(join(HINTS_FOLDER, hintFileName)),
    )
  } catch {
    return []
  }
}

export const extractChallengeFields = (targetChallengeFolder: string) => {
  return {
    description: extractDescription(targetChallengeFolder),
  }
}
