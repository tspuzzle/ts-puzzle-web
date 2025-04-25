import React from 'react'
import { PiStarFourFill } from 'react-icons/pi'

export type QuoteBlockProps = {
  quote: string
  blockType: 'quote'
}

type Props = QuoteBlockProps & {
  className?: string
}

export const QuoteBlock: React.FC<Props> = ({ quote }) => {
  return (
    <div className="border-t border-b border-primary py-6 flex gap-4 items-center">
      <PiStarFourFill className="h-6 w-6 fill-primary min-w-[24px]" />
      <span className="text-h4 text-primary">{quote}</span>
    </div>
  )
}
