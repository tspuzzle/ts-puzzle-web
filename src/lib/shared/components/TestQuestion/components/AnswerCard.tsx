import RichText from '../../RichText'
import { Answer } from '../model'

export const AnswerCard = ({
  answer,
  index,
  selected,
}: {
  answer: Answer
  index: number
  selected?: boolean
}) => {
  return (
    <div className="flex gap-2 p-4 rounded-lg items-center">
      <div className="text-h5 text-primary-dark width-[24px] ">
        {String.fromCharCode(97 + index)}
      </div>

      <RichText data={answer.answer} className="[&>*:first-child]:mt-0" />
    </div>
  )
}
