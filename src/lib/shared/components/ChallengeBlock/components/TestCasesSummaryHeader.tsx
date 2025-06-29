import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const TestCaseSummaryHeader = ({
  isCompact,
  summary,
  toggleCompact,
}: {
  isCompact: boolean
  toggleCompact: () => void
  summary: { passed: number; checking: number; total: number; failed: number }
}) => {
  const { passed, total, checking, failed } = summary
  return (
    <div className="p-2 border-b bg-white">
      <div className="flex items-center justify-between gap-2">
        {!isCompact && <span className="font-medium text-sm">Test Cases</span>}
        <div className={cn('transition-all duration-300 text-center flex-1')}>
          <div className="text-xs font-medium">
            {passed}/{total}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
            <div
              className={cn(
                'h-1 rounded-full transition-all duration-300',
                checking > 0 && 'bg-yellow-500',
                failed > 0 ? 'bg-gradient-to-r from-green-500 to-red-500' : 'bg-green-500',
              )}
              style={{
                width: `${((passed + failed) / total) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={toggleCompact}
          className="p-1 h-6 w-6 flex-shrink-0"
        >
          {isCompact ? <ChevronRight className="w-3 h-3" /> : <ChevronLeft className="w-3 h-3" />}
        </Button>
      </div>
    </div>
  )
}
