import { Button } from '@/components/ui/button'
import { EditoContainer } from './EditorPanelEditor'
import { Clock, Play } from 'lucide-react'

export const EditorPanel = ({
  code,
  setCode,
  onSubmit,
  isLoading,
}: {
  code: string
  setCode: (code: string) => void
  onSubmit: () => void
  isLoading?: boolean
}) => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-2 border-b bg-white">
        <span className="font-medium text-sm">Code Editor</span>
      </div>

      <div className="flex-1 relative bg-grey-50 overflow-auto">
        <EditoContainer code={code} setCode={setCode} />
      </div>

      <div className="p-2 border-t bg-gray-50 flex justify-end">
        <Button size="sm" onClick={onSubmit} disabled={isLoading}>
          {isLoading ? (
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
  )
}
