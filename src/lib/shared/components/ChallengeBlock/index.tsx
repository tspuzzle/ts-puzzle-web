'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChallengeEditorBlock } from '@/payload-types'
import { Clock, Play } from 'lucide-react'
import { useState } from 'react'
import { ChallengeBlockHeader } from './components/ChallengeBlockHeader'
import { TestCasesList } from './components/TestCasesList'
import { TestCaseSummaryHeader } from './components/TestCasesSummaryHeader'
import { TestCase, TestCaseState } from './types'
import { getTestSummary } from './utils'

export interface ChallengeBlockProps {
  title?: string
  description?: string
  testCases?: TestCase[]
  initialCode?: string
  maxHeight?: number
  challengeBlock: ChallengeEditorBlock
}

export default function ChallengeBlock({
  challengeBlock,
  title = 'Sum Function Challenge',
  initialCode = 'function sum(a, b) {\n  // Your code here\n  return a + b;\n}',
}: ChallengeBlockProps) {
  const [isCompact, setIsCompact] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [code, setCode] = useState(initialCode)
  const [isRunningTests, setIsRunningTests] = useState(false)

  const toggleCompact = () => setIsCompact(!isCompact)
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen)

  const containerClasses = isFullscreen ? 'fixed inset-0 z-50 bg-white' : 'w-full'

  const runTests = async () => {
    /*
    setIsRunningTests(true)

    // Reset all tests to not-run first
    const updatedTests = currentTestCases.map((tc) => ({ ...tc, status: 'not-run' as const }))
    setCurrentTestCases([...updatedTests])

    // Small delay before starting
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Simulate running each test with delays
    for (let i = 0; i < updatedTests.length; i++) {
      // Set current test to checking
      updatedTests[i].status = 'checking'
      setCurrentTestCases([...updatedTests])

      // Wait for test execution (simulate processing time)
      await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400))

      // Randomly determine if test passes (you can replace this with actual test logic)
      const passes = Math.random() > 0.3 // 70% pass rate for demo
      updatedTests[i].status = passes ? 'passed' : 'failed'
      setCurrentTestCases([...updatedTests])
    }

    setIsRunningTests(false)
    */
  }

  const testCases = challengeBlock.testCases || []
  const [testCasesStates, setTestCasesStates] = useState<TestCaseState[]>(
    testCases.map((t) => ({ status: 'not-run', id: t.id })),
  )

  const testSummary = getTestSummary(testCasesStates)

  return (
    <div
      className={cn(
        'border rounded-lg shadow-lg flex flex-col overflow-hidden transition-all duration-300',
        containerClasses,
      )}
    >
      <ChallengeBlockHeader
        isFullscreen={isFullscreen}
        title={title}
        description={challengeBlock.description}
        toggleFullscreen={toggleFullscreen}
      />

      {/* Main Content */}
      <div className={cn('flex-1 flex min-h-0', !isFullscreen && 'max-h-[400px]')}>
        <div
          className={cn(
            'border-r bg-gray-50 transition-all duration-300 ease-in-out',
            isCompact ? 'w-[80px]' : 'w-[40%]',
          )}
        >
          <div className="h-full flex flex-col">
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

        {/* Code Editor Panel */}
        <div className={'flex-1 transition-all duration-300'}>
          <div className="h-full flex flex-col">
            {/* Editor Header */}
            <div className="p-2 border-b bg-white">
              <span className="font-medium text-sm">Code Editor</span>
            </div>

            {/* Code Editor */}
            <div className="flex-1 relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full p-3 font-mono text-sm border-none outline-none resize-none bg-gray-900 text-gray-100"
                placeholder="Write your code here..."
                spellCheck={false}
              />
            </div>

            {/* Editor Footer */}
            <div className="p-2 border-t bg-gray-50 flex justify-end">
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 disabled:opacity-50"
                onClick={runTests}
                disabled={isRunningTests}
              >
                {isRunningTests ? (
                  <>
                    <Clock className="w-4 h-4 mr-1 animate-spin" />
                    Running Tests...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-1" />
                    Run Tests
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
