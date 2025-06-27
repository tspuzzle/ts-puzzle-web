import { cn } from '@/lib/utils'
import { TestCaseStatusType, TestCaseType } from '../config/types'
import { CheckCircle, Circle, XCircle, Code, Terminal } from 'lucide-react'

import { AnimatePresence, motion, Transition } from 'framer-motion'
import RichText from '@/lib/shared/components/RichText'

const TestCaseIcon = ({
  status,
  className,
  big,
}: {
  status: TestCaseStatusType
  className?: string
  big?: boolean
}) => {
  const classNameSize = big ? 'h-5 w-5 min-h-5 min-w-5' : 'h-5 w-5 min-h-5 min-w-5'
  const classNameCommon = 'transition-all duration-500 ease-out'

  switch (status) {
    case 'passed':
      return (
        <CheckCircle className={cn('text-success', classNameCommon, classNameSize, className)} />
      )
    case 'failed':
      return <XCircle className={cn('text-error', classNameCommon, classNameSize, className)} />
    default:
      return <Circle className={cn('text-gray-400', classNameCommon, classNameSize, className)} />
  }
}

export const TestCasesList = ({
  testCases,
  testCasesStatus,
  sidebarVisible,
}: {
  testCases: TestCaseType[]
  testCasesStatus: TestCaseStatusType[]
  sidebarVisible?: boolean
}) => {
  return (
    <AnimatePresence mode="wait">
      {sidebarVisible && (
        <div key="expanded">
          {testCases.map((testCase, index) => {
            return (
              <div key={index} className="p-2">
                <div className="flex gap-2">
                  <TestCaseIcon status={testCasesStatus[index]} />

                  <div>
                    <span>Test</span>
                    <motion.div className="inline" layoutId={`test-case-number-${index}`}>
                      {index + 1}
                    </motion.div>
                  </div>
                </div>
                <motion.div layoutId={`test-case-text-${index}`}>
                  <div className="text-[12px] flex gap-1 items-center">
                    <Code className="w-3 h-3" />
                    <span>Input</span>
                  </div>
                  <RichText data={testCase.task!} className="challenge-block" />

                  <div className="text-[12px] flex gap-1 items-center">
                    <Terminal className="w-3 h-3" />
                    <span>Expected</span>
                  </div>
                  <RichText data={testCase.expected!} className="challenge-block" />
                </motion.div>
              </div>
            )
          })}
        </div>
      )}

      {!sidebarVisible && (
        <div key="collapsed">
          {testCasesStatus.map((status, index) => (
            <div key={index} className="p-2">
              <div className="flex">
                <TestCaseIcon status={status} />

                <div>
                  <motion.div
                    style={{ position: 'relative', top: 10 }}
                    layoutId={`test-case-number-${index}`}
                  >
                    {index + 1}
                  </motion.div>
                </div>
              </div>
              <motion.div layoutId={`test-case-text-${index}`}></motion.div>
            </div>
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}
