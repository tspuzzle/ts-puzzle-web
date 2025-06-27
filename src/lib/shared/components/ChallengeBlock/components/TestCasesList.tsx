import { ScrollArea } from '@/components/ui/scroll-area'
import { TestCase, TestCaseState } from '../types'
import { TestCaseCard } from './TestCaseCard'

export const TestCasesList = ({
  testCases,
  testCasesStates,
  isCompact,
}: {
  testCases: TestCase[]
  testCasesStates: TestCaseState[]
  isCompact: boolean
}) => {
  return (
    <ScrollArea className="flex-1 overflow-y-scroll">
      <div className="p-2 space-y-2">
        {testCases.map((testCase, index) => {
          return (
            <TestCaseCard
              key={testCase.id}
              isCompact={isCompact}
              testCase={testCase}
              testCaseState={testCasesStates[index]}
              index={index}
            />
          )
        })}
      </div>
    </ScrollArea>
  )
}
