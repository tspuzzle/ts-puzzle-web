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

export const getCardStyles = (status: TestCaseState['status']) => {
  switch (status) {
    case 'passed':
      return {
        borderColor: 'border-l-green-500',
        bgColor: 'bg-green-50',
        statusText: 'PASSED',
        statusBg: 'bg-green-500',
      }
    case 'failed':
      return {
        borderColor: 'border-l-red-500',
        bgColor: 'bg-red-50',
        statusText: 'FAILED',
        statusBg: 'bg-red-500',
      }
    case 'checking':
      return {
        borderColor: 'border-l-yellow-500',
        bgColor: 'bg-yellow-50',
        statusText: 'RUNNING',
        statusBg: 'bg-yellow-500',
      }
    default:
      return {
        borderColor: 'border-l-gray-400',
        bgColor: 'bg-gray-50',
        statusText: 'NOT RUN',
        statusBg: 'bg-gray-400',
      }
  }
}

export const getTestSummary = (testCases: TestCaseState[]) => {
  const passed = testCases.filter((tc) => tc.status === 'passed').length
  const failed = testCases.filter((tc) => tc.status === 'failed').length
  const checking = testCases.filter((tc) => tc.status === 'checking').length
  const total = testCases.length

  return { passed, failed, checking, total }
}
