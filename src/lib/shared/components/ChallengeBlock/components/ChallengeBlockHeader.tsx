import { Button } from '@/components/ui/button'
import { RichTextData } from '@/lib/shared/types'
import { Maximize2, Minimize2 } from 'lucide-react'
import RichText from '../../RichText'
import { Chip } from '@/lib/shared/ui/chips/Chip'

export const ChallengeBlockHeader = ({
  description,
  isFullscreen,
  toggleFullscreen,
}: {
  description: RichTextData
  isFullscreen: boolean
  toggleFullscreen: () => void
}) => {
  return (
    <div className="p-6 border-b border-primary">
      <div className="flex items-center justify-between">
        <Chip title="Challenge" />
        <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="flex-shrink-0">
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </Button>
      </div>
      <RichText data={description} />
    </div>
  )
}
