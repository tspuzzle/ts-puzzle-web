import { Card, CardContent } from '@/components/ui/card'
import { Hash } from 'lucide-react'
import { TestCase, TestCaseState } from '../types'
import { getCardStyles } from '../utils'
import { TestCaseStatusIcon } from './TestCaseStatusIcon'
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
  const cardStyles = getCardStyles(testCaseState.status)
  return (
    <Card
      key={testCase.id}
      className={`transition-all duration-300 ${isCompact ? 'p-1' : 'p-0'} ${cardStyles.bgColor} ${cardStyles.borderColor} border-t border-r border-b border-gray-200 shadow-none overflow-hidden`}
    >
      <CardContent className="p-0">
        {isCompact ? (
          // Compact Mode
          <div className="flex items-center justify-between space-x-2 p-2">
            <div className="flex items-center space-x-1">
              <Hash className="w-3 h-3 text-gray-400" />
              <span className="text-xs font-mono">{index + 1}</span>
            </div>
            <TestCaseStatusIcon status={testCaseState.status} />
          </div>
        ) : (
          // Full Mode - New Design
          <div className="flex">
            {/* Left Status Bar */}
            <div className={`${cardStyles.statusBg} w-6 flex items-center justify-center `}>
              <div
                className="text-white text-xs font-bold whitespace-nowrap"
                style={{
                  transform: 'rotate(-90deg)',
                  transformOrigin: 'center',
                }}
              >
                {cardStyles.statusText}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-2">
              <p className="font-semibold text-sm mb-1 text-gray-800">Test case #{index + 1}</p>

              {/* Test Code */}
              <div className="mb-4">{testCase.task && <RichText data={testCase.task} />}</div>

              {/* Expected Result */}
              <p className="font-semibold text-sm mb-1 text-gray-800">Expected result</p>
              {testCase.expected && <RichText data={testCase.expected} />}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
