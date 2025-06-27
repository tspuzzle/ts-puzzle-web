import { ChallengeEditorBlock } from '@/payload-types'

export type TestCaseState = {
  id?: string | null
  status: 'not-run' | 'checking' | 'failed' | 'passed'
}

export type TestCase = NonNullable<ChallengeEditorBlock['testCases']>[number]
