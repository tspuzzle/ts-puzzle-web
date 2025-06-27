import { Button } from '@/components/ui/button'
import { RichTextData } from '@/lib/shared/types'
import { Maximize2, Minimize2 } from 'lucide-react'
import RichText from '../../RichText'

export const ChallengeBlockHeader = ({
  title,
  description,
  isFullscreen,
  toggleFullscreen,
}: {
  title: string
  description: RichTextData
  isFullscreen: boolean
  toggleFullscreen: () => void
}) => {
  return (
    <div className="p-4 border-b bg-gray-50">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg truncate">{title}</h3>
        <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="flex-shrink-0">
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </Button>
      </div>
      <RichText data={description} />
    </div>
  )
}
