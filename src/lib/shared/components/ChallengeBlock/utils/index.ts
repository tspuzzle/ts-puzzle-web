import { TestCaseState } from '../types'

export const getCardBgColor = (status: TestCaseState['status']) => {
  switch (status) {
    case 'passed':
      return 'bg-green-50 border-green-200'
    case 'failed':
      return 'bg-red-50 border-red-200'
    case 'checking':
      return 'bg-yellow-50 border-yellow-200'
    default:
      return 'bg-white border-gray-200'
  }
}

export const getTestSummary = (testCases: TestCaseState[]) => {
  const passed = testCases.filter((tc) => tc.status === 'passed').length
  const failed = testCases.filter((tc) => tc.status === 'failed').length
  const checking = testCases.filter((tc) => tc.status === 'checking').length
  const total = testCases.length

  return { passed, failed, checking, total }
}
