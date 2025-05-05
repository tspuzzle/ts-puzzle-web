import RichText from '../RichText'
import { AnswerCard } from './components/AnswerCard'
import { Question } from './model'

export const TestQuestion = ({
  question,
  mode,
  checkedAnswers,
  setCheckedAnswers,
  notShowCorrectAnswer,
}: {
  question: Question
  checkedAnswers: number[]
  mode: 'picking' | 'review'
  setCheckedAnswers: (checkedAnswers: number[]) => void
  notShowCorrectAnswer?: boolean
}) => {
  return (
    <div>
      <RichText data={question.question} />
      <div className="flex flex-col gap-4 mt-8">
        {(question.answers || []).map((answer, index) => (
          <AnswerCard
            key={index}
            answer={answer}
            index={index}
            mode={mode}
            checked={checkedAnswers.includes(index)}
            onClick={() => {
              setCheckedAnswers([index])
            }}
            notShowCorrectAnswer={notShowCorrectAnswer}
          />
        ))}
      </div>
    </div>
  )
}
