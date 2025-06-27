import { ChallengeEditorBlock } from '@/payload-types'

export type TestCaseType = ExtractArrayType<
  Exclude<ChallengeEditorBlock['testCases'], null | undefined>
>

export type TestCaseStatusType = 'passed' | 'failed' | 'not-run'
