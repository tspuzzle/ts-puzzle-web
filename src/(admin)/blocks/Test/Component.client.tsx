'use client'
import React, { useState } from 'react'
import { Question } from '@/lib/shared/components/TestQuestion/model'
import { TestQuestion } from '@/lib/shared/components/TestQuestion/TestQuestion'
import { Button } from '@/components/ui/button'
import { Chip } from '@/lib/shared/ui/chips/Chip'
import RichText from '@/lib/shared/components/RichText'
import { CompletedChip } from '@/lib/shared/ui/chips/CompletedChip'

type Props = Question

const SuccessScreen = ({ question }: { question: Question }) => {
  const correctAnswerIndex = (question.answers || []).findIndex((answer) => answer.isCorrect)
  const correctAnswer = question.answers?.[correctAnswerIndex]
  if (!correctAnswer) {
    return null
  }

  return (
    <div className="p-6 rounded-lg border-primary border-1 flex flex-col gap-6">
      <div>
        <CompletedChip text="Correct Answer" />
      </div>
      <RichText data={question.question} />
      <div className="flex gap-8 items-center">
        <div className="w-12 h-12 min-w-12 rounded-full bg-primary-light text-primary text-h4 flex items-center justify-center">
          {String.fromCharCode(97 + correctAnswerIndex).toUpperCase()}
        </div>

        <RichText data={correctAnswer.answer} />
      </div>
    </div>
  )
}
export const Test: React.FC<Props> = (props) => {
  const [checkedAnswers, setCheckedAnswers] = useState<number[]>([])
  const [mode, setMode] = useState<'picking' | 'review'>('picking')
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  if (isCorrect) {
    return <SuccessScreen question={props} />
  }

  return (
    <div className="p-6 rounded-lg border-primary border-1 flex flex-col gap-6">
      <div>
        <Chip title="Quiz" />
      </div>

      <TestQuestion
        question={props}
        mode={mode}
        checkedAnswers={checkedAnswers}
        setCheckedAnswers={(checkedAnswers) => {
          setMode('picking')
          setCheckedAnswers(checkedAnswers)
        }}
        notShowCorrectAnswer
      />
      <div className="flex justify-end">
        <Button
          onClick={() => {
            const rightAnswer = (props.answers || []).findIndex((answer) => answer.isCorrect)
            if (rightAnswer === checkedAnswers[0]) {
              setIsCorrect(true)
              return
            }
            setMode('review')
          }}
          disabled={checkedAnswers.length === 0}
        >
          Check Answer
        </Button>
      </div>
    </div>
  )
}
