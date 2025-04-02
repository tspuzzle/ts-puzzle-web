import { cn } from '@/lib/utils'
import { clsx, type ClassValue } from 'clsx'

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

export const DifficultyLabel = ({ type }: { type: string }) => {
  const { text, ...restStyles } = CONFIG[type] || CONFIG.beginner
  return (
    <div
      className={clsx('px-2 h-6 rounded-sm text-h6 flex items-center', Object.values(restStyles))}
    >
      {text}
    </div>
  )
}
