'use client'
import RichText from '@/lib/shared/components/RichText'
import { cn } from '@/lib/utils'
import { ChallengeEditorBlock } from '@/payload-types'
import { useState } from 'react'
import { SideBarToggler } from './components/SideBarToggler'
import { TestCasesHeader } from './components/TestCasesHeader'
import { TestCasesList } from './components/TestCasesList'
import { TestCaseStatusType } from './config/types'

type Props = ChallengeEditorBlock

export const ChallengeEditor: React.FC<Props> = ({
  solution,
  description,
  testCases: _testCases,
}) => {
  console.log('solution', solution)

  const [sidebarVisible, setSidebarVisible] = useState(true)

  const testCasesStatus: TestCaseStatusType[] = ['not-run', 'failed', 'passed']

  const testCases = _testCases || []
  const passedTests = testCasesStatus.filter((testCase) => testCase === 'passed').length

  return (
    <div className="rounded-lg border-primary border-1 flex flex-col gap-6">
      <div className="p-6">
        <RichText data={description} />
      </div>
      <div className="flex">
        <div
          className={cn(
            'transition-all duration-500 ease-out bg-gray-50',
            !sidebarVisible ? 'w-8' : 'w-[40%]',
          )}
        >
          <TestCasesHeader
            passedTestsCount={passedTests}
            testsCount={testCases.length}
            sidebarVisible={sidebarVisible}
          />
          <TestCasesList
            testCases={testCases}
            testCasesStatus={testCasesStatus}
            sidebarVisible={sidebarVisible}
          />
        </div>
        <div className="flex-1">
          <SideBarToggler sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
          <div className="w-[100%] height-10 rounded bg-gray-500">Code editor</div>
        </div>
      </div>
    </div>
  )
}
