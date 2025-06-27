import { Card, CardContent } from '@/components/ui/card'
import { Hash } from 'lucide-react'
import { TestCaseStatusIcon } from './TestCaseStatusIcon'
import { TestCase, TestCaseState } from '../types'
import { cn } from '@/lib/utils'
import { getCardBgColor } from '../utils'
import RichText from '../../RichText'

export const TestCaseCard = ({
  isCompact,
  testCase,
  testCaseState,
  index,
}: {
  index: number
  isCompact: boolean
  testCase: TestCase
  testCaseState: TestCaseState
}) => {
  return (
    <Card
      className={cn(
        'transition-all duration-300',
        isCompact ? 'p-1' : 'p-3',
        getCardBgColor(testCaseState.status),
      )}
    >
      <CardContent className="p-0">
        {isCompact ? (
          // Compact Mode
          <div className="flex items-center justify-between space-x-2">
            <div className="flex items-center space-x-1">
              <Hash className="w-3 h-3 text-gray-400" />
              <span className="text-xs font-mono">{testCaseState.id}</span>
            </div>
            <TestCaseStatusIcon status={testCaseState.status} />
          </div>
        ) : (
          // Full Mode
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span
                  className={cn(
                    'text-xs font-mono px-2 py-1 rounded',
                    testCaseState.status === 'passed' && 'bg-green-100 text-green-800',
                    testCaseState.status === 'failed' && 'bg-red-100 text-red-800',
                    testCaseState.status === 'checking' && 'bg-yellow-100 text-yellow-800',
                    testCaseState.status === 'not-run' && 'bg-gray-100 text-gray-800',
                  )}
                >
                  #{index + 1}
                </span>
                <TestCaseStatusIcon status={testCaseState.status} />
              </div>
              <TestCaseStatusIcon status={testCaseState.status} />
            </div>

            <div className="space-y-1">
              <div>
                <span className="text-xs font-medium text-gray-600">Test:</span>
                <div
                  className={cn(
                    'text-xs font-mono p-1 rounded mt-1',
                    testCaseState.status === 'passed' && 'bg-green-100',
                    testCaseState.status === 'failed' && 'bg-red-100',
                    testCaseState.status === 'checking' && 'bg-yellow-100',
                    testCaseState.status === 'not-run' && 'bg-gray-100',
                  )}
                >
                  {testCase.task && <RichText data={testCase.task} />}
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-gray-600">Expected:</span>
                <div
                  className={cn(
                    'text-xs font-mono p-1 rounded mt-1',
                    testCaseState.status === 'passed' && 'bg-green-100',
                    testCaseState.status === 'failed' && 'bg-red-100',
                    testCaseState.status === 'checking' && 'bg-yellow-100',
                    testCaseState.status === 'not-run' && 'bg-gray-100',
                  )}
                >
                  {testCase.expected && <RichText data={testCase.expected} />}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
