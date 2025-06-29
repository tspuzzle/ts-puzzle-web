'use client'
import { cn } from '@/lib/utils'
import { ChallengeEditorBlock } from '@/payload-types'
import { useState } from 'react'
import { ChallengeBlockHeader } from './components/ChallengeBlockHeader'
import { EditorPanel } from './components/EditorPanel'
import { TestCasesList } from './components/TestCasesList'
import { TestCaseSummaryHeader } from './components/TestCasesSummaryHeader'
import { useChallengeContext } from './hooks/useChallengeContext'
import { TestCase } from './types'

export interface ChallengeBlockProps {
  title?: string
  description?: string
  testCases?: TestCase[]
  maxHeight?: number
  challengeBlock: ChallengeEditorBlock
}

export default function ChallengeBlock({ challengeBlock }: ChallengeBlockProps) {
  const [isCompact, setIsCompact] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleCompact = () => setIsCompact(!isCompact)
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen)

  const containerClasses = isFullscreen ? 'fixed inset-0 z-50 bg-white border-none' : 'w-full'

  const testCases = challengeBlock.testCases || []
  const { isRunningTests, testSummary, code, setCode, runTests, testCasesStates } =
    useChallengeContext({
      testCases,
    })

  console.log('==>', isRunningTests)

  return (
    <div
      className={cn(
        'border border-primary rounded-lg shadow-lg flex flex-col overflow-hidden transition-all duration-300',
        containerClasses,
      )}
    >
      <ChallengeBlockHeader
        isFullscreen={isFullscreen}
        description={challengeBlock.description}
        toggleFullscreen={toggleFullscreen}
      />

      <div className={cn('flex-1 flex min-h-0', !isFullscreen && 'max-h-[400px]')}>
        <div
          className={cn(
            'border-r border-primary bg-gray-50 transition-all duration-300 ease-in-out',
            isCompact ? 'w-[12%]' : 'w-[40%]',
          )}
        >
          <div className={cn('h-full flex flex-col')}>
            <TestCaseSummaryHeader
              isCompact={isCompact}
              toggleCompact={toggleCompact}
              summary={testSummary}
            />

            <TestCasesList
              isCompact={isCompact}
              testCases={testCases}
              testCasesStates={testCasesStates}
            />
          </div>
        </div>

        <div
          className={cn('flex-1 transition-all duration-300 ', isCompact ? 'w-[88%]' : 'w-[60%]')}
        >
          <EditorPanel
            code={code}
            setCode={setCode}
            isLoading={isRunningTests}
            onSubmit={runTests}
          />
        </div>
      </div>
    </div>
  )
}
