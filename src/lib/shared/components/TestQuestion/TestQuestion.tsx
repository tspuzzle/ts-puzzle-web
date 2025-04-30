import RichText from '../RichText'
import { AnswerCard } from './components/AnswerCard'
import { Question } from './model'

export const TestQuestion = ({ question }: { question: Question }) => {
  return (
    <div>
      <RichText data={question.question} />
      <div>
        {(question.answers || []).map((answer, index) => (
          <AnswerCard key={index} answer={answer} index={index} />
        ))}
      </div>
    </div>
  )
}
