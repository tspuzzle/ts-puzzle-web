import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Question } from './model'
import { TestQuestion } from './TestQuestion'

export const TestQuestionWithFooter = ({ question }: { question: Question }) => {
  const [mode, setMode] = useState<'picking' | 'review'>('picking')
  const [checkedAnswers, setCheckedAnswers] = useState<number[]>([])

  return (
    <>
      <TestQuestion
        question={question}
        mode={mode}
        checkedAnswers={checkedAnswers}
        setCheckedAnswers={setCheckedAnswers}
      />
      <Button onClick={() => setMode('review')} disabled={checkedAnswers.length === 0}>
        Check
      </Button>
    </>
  )
}
