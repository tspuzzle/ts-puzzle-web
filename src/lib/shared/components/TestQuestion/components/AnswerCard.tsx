import { cn } from '@/lib/utils'
import RichText from '../../RichText'
import { Answer } from '../model'
import { MdCheck } from 'react-icons/md'
import { MdClose } from 'react-icons/md'

const FeedbackLabel = ({ isCorrect, checked }: { isCorrect: boolean; checked: boolean }) => {
  const commonClasses = 'w-fit text-body2 py-0.5 px-1.5 inline-block rounded-sm'
  const errorLabelClasses = 'text-error-contrast bg-error'
  const rightLabelClasses = 'text-success-contrast bg-success'

  if (checked) {
    return isCorrect ? (
      <span className={[commonClasses, rightLabelClasses].join(' ')}>Your correct answer</span>
    ) : (
      <span className={[commonClasses, errorLabelClasses].join(' ')}>Your wrong answer</span>
    )
  }
  if (isCorrect) {
    return <span className={[commonClasses, rightLabelClasses].join(' ')}>Correct answer</span>
  }
  return null
}

export const AnswerCard = ({
  answer,
  index,
  checked,
  mode,
  onClick,
}: {
  answer: Answer
  index: number
  checked?: boolean
  mode: 'picking' | 'review'
  onClick?: () => void
}) => {
  const showFeedback = mode === 'review' && (checked || answer.isCorrect)

  return (
    <div
      role="radio"
      aria-checked={checked}
      aria-labelledby={`answer-${index}`}
      className={cn(
        'flex gap-4 p-4 rounded-lg items-center border-grey-100 border-1 hover:bg-primary-light cursor-pointer',
        {
          'bg-white hover:bg-white cursor-default': mode === 'review',
          'bg-primary-light': checked,
          'border-success bg-success-light hover:bg-success-light':
            showFeedback && answer.isCorrect,
          'border-error bg-error-light hover:bg-error-light': showFeedback && !answer.isCorrect,
        },
      )}
      onClick={onClick}
    >
      <div className="text-h5 text-primary-dark width-[24px]">
        {String.fromCharCode(97 + index)}
      </div>

      <div className="flex-1 flex gap-1 flex-col">
        {mode === 'review' && <FeedbackLabel isCorrect={answer.isCorrect} checked={checked} />}
        <RichText data={answer.answer} className="[&>*:first-child]:mt-0" />
      </div>

      <div className="w-[24px]">
        {showFeedback &&
          (answer.isCorrect ? (
            <MdCheck className="text-success w-6 h-6" />
          ) : (
            <MdClose className="text-error w-6 h-6" />
          ))}
      </div>
    </div>
  )
}
