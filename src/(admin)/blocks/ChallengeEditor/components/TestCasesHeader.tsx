import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

export const TestCasesHeader = ({
  passedTestsCount,
  testsCount,
  sidebarVisible,
}: {
  sidebarVisible: boolean
  passedTestsCount: number
  testsCount: number
}) => {
  return (
    <div className="p-2">
      <div className="flex justify-between gap-4 items-stretch min-h-7">
        {testsCount > 0 && (
          <div className="flex-1 flex flex-col">
            <span className="text-[12px]">
              {passedTestsCount}/{testsCount}
            </span>
            <Progress value={(passedTestsCount * 100) / testsCount} />
          </div>
        )}
      </div>
    </div>
  )
}
