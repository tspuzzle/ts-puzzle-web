import { compileTypescriptCode } from '@/lib/shared/lib'

import { useState } from 'react'
import { TestCase, TestCaseState } from '../types'
import { getTestSummary } from '../utils'

export const useChallengeContext = ({ testCases }: { testCases: TestCase[] }) => {
  const [isRunningTests, setIsRunningTests] = useState(false)
  const [code, setCode] = useState('')
  const [testCasesStates, setTestCasesStates] = useState<TestCaseState[]>(
    testCases.map((t) => ({ status: 'not-run', id: t.id })),
  )

  const runTests = async () => {
    setIsRunningTests(true)

    setTestCasesStates((states) => states.map((state) => ({ ...state, status: 'checking' })))
    console.log('Running tests...')

    await Promise.all(
      testCases.map((testCase, i) =>
        compileTypescriptCode(`${code};${testCase.test}`).then((result) => {
          setTestCasesStates((states) =>
            states.map((state, index) => {
              if (index === i) {
                return {
                  ...state,
                  status: result.success ? 'passed' : 'failed',
                  error: result.success ? '' : result.errors.join('\n'),
                }
              }
              return state
            }),
          )
        }),
      ),
    )
    setIsRunningTests(false)
  }

  const testSummary = getTestSummary(testCasesStates)

  return { isRunningTests, code, setCode, runTests, testSummary, testCasesStates }
}
