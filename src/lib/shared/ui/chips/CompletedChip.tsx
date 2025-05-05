import { clsx } from 'clsx'
import { IoCheckmarkCircle } from 'react-icons/io5'

const CONFIG: { [key: string]: { text: string; color: string; background: string } } = {
  beginner: {
    text: 'Beginner',
    color: 'text-success',
    background: 'bg-success-light',
  },
  easy: {
    text: 'Easy',
    color: 'text-success',
    background: 'bg-success-light',
  },
  medium: {
    text: 'Medium',
    color: 'text-warning',
    background: 'bg-warning-light',
  },
  hard: {
    text: 'Hard',
    color: 'text-warning',
    background: 'bg-warning-light',
  },
  extreme: {
    text: 'Extreme',
    color: 'text-error-contrast',
    background: 'bg-error',
  },
}

export const CompletedChip = ({ text }: { text?: string }) => {
  return (
    <div className="flex gap-2 text-h6 uppercase items-center text-success">
      <IoCheckmarkCircle className="text-success w-5 h-5" />
      {text || 'Completed'}
    </div>
  )
}
